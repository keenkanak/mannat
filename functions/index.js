const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors")({ origin: "*" });
const { Client, resources } = require("coinbase-commerce-node");
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("3a0fea98874d4780ba90f3ad36c64749");
const secret = "01c0d5b5-161a-482f-9bd4-cc098b5805e1";
Client.init(secret);

const { Charge } = resources;
exports.createCharge = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    console.log(req.query);
    const chargeData = {
      name: "Donation",
      description: "Donation",
      local_price: {
        amount: req.query.value,
        currency: "USD",
      },
      pricing_type: "fixed_price",
      metadata: {
        user: "Kanak Dullu",
      },
    };
    const charge = await Charge.create(chargeData);
    res.send(charge);
  });
});

exports.webhookHandler = functions.https.onRequest(async (req, res) => {
  const rawBody = req.rawBody;
  const signature = req.headers["x-cc-webhook-signature"];
  const webhookSecret = "070b27b2-5080-497f-a2c8-285147bf2e87";

  try {
    const event = Webhook.verifyEventBody(rawBody, signature, webhookSecret);

    if (event.type === "charge:pending") {
      // TODO
      // user paid, but transaction not confirm on blockchain yet
    }

    if (event.type === "charge:confirmed") {
      // TODO
      // all good, charge confirmed
    }

    if (event.type === "charge:failed") {
      // TODO
      // charge failed or expired
    }

    res.send(`success ${event.id}`);
  } catch (error) {
    functions.logger.error(error);
    res.status(400).send("failure!");
  }
});

exports.newsApi = functions.https.onRequest(async (req, res) => {
  console.log(req.query);
  cors(req, res, async () => {
    newsapi.v2
      .topHeadlines({
        q: req.query.target,
        language: "en",
      })
      .then((response) => {
        console.log(response);
        res.send(response);
      });
  });
});

const app = express();
app.post("/", function (req, res) {
  console.log(req);
  res.send(req.body);
});

exports.reachOut = functions.https.onRequest(app);
