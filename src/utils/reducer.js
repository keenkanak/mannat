export const initialState = {
  basket: [],
  partner: null,
  child: null,
};

export const books = [
  {
    id: 2,
    price: "0.2",
    title: "Gul Mohar English Textbook for Grade 2",
    publisher: "Orient Blackswan",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/512o6tf1CVL._SX368_BO1,204,203,200_.jpg",
  },
  {
    id: 3,
    price: "1.03",
    title: "Gul Mohar English Textbook for Grade 3",
    publisher: "Orient Blackswan",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51Z2Q6To22L._SX369_BO1,204,203,200_.jpg",
  },
  {
    id: 4,
    price: "0.1",
    title: "Gul Mohar English Textbook for Grade 4",
    publisher: "Orient Blackswan",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51TiHd5On+L._SX368_BO1,204,203,200_.jpg",
  },
  {
    id: 5,
    price: "0.1",
    title: "Foundation Mathematics for Grade 1",
    publisher: "Goyal Brothers Prakashan",
    image:
      "https://www.goyal-books.com/image/cache/catalog/demo/product/578-500x500.jpg",
  },
  {
    id: 6,
    price: "0.2",
    title: "Foundation Mathematics for Grade 2",
    publisher: "Goyal Brothers Prakashan",
    image:
      "https://n3.sdlcdn.com/imgs/f/n/n/Foundation-Mathematics-for-Primary-Classes-SDL455477492-1-f4238.jpg",
  },
  {
    id: 7,
    price: "0.1",
    title: "Total History and Civics for Grade 9",
    publisher: "Morning Star",
    image:
      "https://rukminim1.flixcart.com/image/416/416/k40798w0/regionalbooks/r/e/3/total-history-civics-icse-class-9-2021-original-imafnyhnfesermwe.jpeg?q=70",
  },
  {
    id: 8,
    price: "0.3",
    title: "Concise Physics for Grade 9",
    publisher: "Selina Publishers",
    image:
      "https://www.aplustopper.com/wp-content/uploads/2018/08/Concise-Physics-Class-9-ICSE-Solutions.jpg",
  },
  {
    id: 9,
    price: "1.5",
    title: "Merchant of Venice for Grade 10",
    publisher: "Morning Star",
    image: "https://images-na.ssl-images-amazon.com/images/I/41GgaCXzizL.jpg",
  },
  {
    id: 10,
    price: "1",
    title: "Total Geography for Grade 10",
    publisher: "Morning Star",
    image: "https://images-na.ssl-images-amazon.com/images/I/81HDMh-Lf3L.jpg",
  },
];

export const getTotal = (basket) => {
  let sum = 0;
  for (var i = 0; i < basket.length; i++) {
    sum += parseFloat(basket[i].price);
  }
  return sum;
};

export const actions = {
  addToBasket: "ADD_TO_BASKET",
  logout: "LOGOUT",
  setPartner: "SET_PARTNER",
  setChild: "SET_CHILD",
  emptyBasket: "EMPTY_BASKET",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.emptyBasket: {
      return { ...state, basket: [] };
    }

    case actions.addToBasket:
      return { ...state, basket: [...state.basket, action.item] };
    case actions.setPartner:
      return {
        ...state,
        partner: action.payload,
        child: null,
      };

    case actions.removeFromBasket:
      const idx = state.basket.findIndex((item) => item.id === action.payload);
      let newBasket = [...state.basket];
      if (idx >= 0) {
        newBasket.splice(idx, 1);
        state.basket.filter((item) => item.id !== action.payload);
      } else {
        console.warn(
          `Can't remove product ${action.id} as it's not in the basket`
        );
      }
      return { ...state, basket: newBasket };

    case actions.setChild:
      return {
        ...state,
        partner: null,
        child: action.payload,
      };
    case actions.logout:
      return {
        ...state,
        partner: null,
        child: null,
      };

    default:
      return state;
  }
};

export default reducer;
