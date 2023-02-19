import configureStore from "redux-mock-store";
import thunk from "redux-thunk"
import cartReducer, {
  CartState,
  addToCart,
  removeFromCart,
  updateQuantity,
  getNumItems,
  getMemoizedNumItems,
  getTotalPrice,
  checkoutCart,
} from "./cartSlice";

import { RootState, getStoreWithState } from "../../app/store";
import products from " ../../../public/products.json"
import * as api from "../../app/api"
import { getStateWithItems } from "../../test-utils";

const mockStore = configureStore([thunk]);

jest.mock("../../app/api", () => {
  return {
    async getProducts() {
      return []
    },
    async checkout(items: api.CartItems = {}) {
      const empty = Object.keys(items).length === 0;

      if (empty) throw new Error("Must include cart items");
      if (items.evilItem > 0) throw new Error()
      if (items.badItem > 0) return { sucess: false };

      return { success: true };
    }
  }
});

describe("cart reducer", () => {
  test("an empty action", () => {
    const initialState = undefined;
    const action = { type: "" };
    const result = cartReducer(initialState, action);

    expect(result).toEqual({
      checkoutState: "READY",
      errorMessage: "",
      items: {},
    });
  })

  test("addToCart", () => {
    const initialState = undefined;
    const action = addToCart("abc")
    let state = cartReducer(initialState, action);

    expect(state).toEqual({
      checkoutState: "READY",
      errorMessage: "",
      items: { abc: 1},
    });

    state = cartReducer(state, action);
    state = cartReducer(state, action);

    expect(state).toEqual({
      checkoutState: "READY",
      errorMessage: "",
      items: { abc: 3},
    });

  });

  test("removeFromCart", () => {
    const initialState: CartState = {
      checkoutState: "READY",
      errorMessage: "",
      items: { abc: 1, def: 3 },
    };
    const action = removeFromCart("abc");
    let state = cartReducer(initialState, action);

    expect(state).toEqual({
      checkoutState: "READY",
      errorMessage: "",
      items: { def: 3},
    });
  });

  test("updateQuantity", () => {
    const initialState: CartState = {
      checkoutState: "READY",
      errorMessage: "",
      items: { abc: 1, def: 3 },
    };

    const action = updateQuantity({ id: "def", quantity: 5 });
    let state = cartReducer(initialState, action);

    expect(state).toEqual({
      checkoutState: "READY",
      errorMessage: "",
      items: { abc: 1, def: 5},
    });
  });
});

describe("Selectors", () => {
  describe("getNumItems", () => {
    it("should return 0 with no items", () => {
      const cart: CartState = {
        checkoutState: "READY",
        errorMessage: "",
        items: {},
      }

      const result = getNumItems({ cart } as RootState);

      expect(result).toBe(0);
    });
  
    it("should add up the total", () => {
      const cart: CartState = {
        checkoutState: "READY",
        errorMessage: "",
        items: {abc: 3, def: 3},
      }

      const result = getNumItems({ cart } as RootState);

      expect(result).toBe(6);
    });
  });

  describe("getMemoizedNumItems", () => {
    it("should return 0 with no items", () => {
      const cart: CartState = {
        checkoutState: "READY",
        errorMessage: "",
        items: {},
      }

      const result = getMemoizedNumItems({ cart } as RootState);

      expect(result).toBe(0);
    });

    it("should add up the total", () => {
      const cart: CartState = {
        checkoutState: "READY",
        errorMessage: "",
        items: {abc: 3, def: 3},
      }

      const result = getMemoizedNumItems({ cart } as RootState);

      expect(result).toBe(6);
    });

    it("should not compute again with the same state", () => {
      const cart: CartState = {
        checkoutState: "READY",
        errorMessage: "",
        items: {abc: 3, def: 3},
      }

      getMemoizedNumItems.resetRecomputations();
      getMemoizedNumItems({ cart } as RootState);

      expect(getMemoizedNumItems.recomputations()).toEqual(1);

      getMemoizedNumItems({ cart } as RootState);
      expect(getMemoizedNumItems.recomputations()).toEqual(1);

      getMemoizedNumItems({ cart } as RootState);
      getMemoizedNumItems({ cart } as RootState);
      getMemoizedNumItems({ cart } as RootState);
      expect(getMemoizedNumItems.recomputations()).toEqual(1);
    });

    it("should recompute with new state", () => {
      const cart: CartState = {
        checkoutState: "READY",
        errorMessage: "",
        items: {abc: 3, def: 3},
      }

      getMemoizedNumItems.resetRecomputations();
      getMemoizedNumItems({ cart } as RootState);

      expect(getMemoizedNumItems.recomputations()).toEqual(1);

      cart.items = { abc: 2 };

      getMemoizedNumItems({ cart } as RootState);

      expect(getMemoizedNumItems.recomputations()).toEqual(2);
    });
  });

  describe("getTotalPrice", () => {
    it("should return 0 with an enpty cart", () => {
      const state: RootState = {
        cart: {
          checkoutState: "READY",
          errorMessage: "",
          items: {},
        },
        products: { products: {} },
      }

      const result = getTotalPrice(state);

      expect(result).toBe("0.00");
    });

    it("should add up the totals", () => {
      const state: RootState = {
        cart: {
          checkoutState: "READY",
          errorMessage: "",
          items: {
            [products[0].id]: 3,
            [products[1].id]: 4,
          },
        },
        products: { products: {
          [products[0].id]: products[0],
          [products[1].id]: products[1],
        } },
      }

      const result = getTotalPrice(state);

      expect(result).toBe("43.23");
    });

    it("should not compute again with the same state", () => {
      const state: RootState = {
        cart: {
          checkoutState: "READY",
          errorMessage: "",
          items: {
            [products[0].id]: 3,
            [products[1].id]: 4,
          },
        },
        products: { products: {
          [products[0].id]: products[0],
          [products[1].id]: products[1],
        } },
      }

      getTotalPrice.resetRecomputations();
      const result = getTotalPrice(state);

      expect(result).toBe("43.23");
      expect(getTotalPrice.recomputations()).toEqual(1);

      getTotalPrice(state);
      expect(getTotalPrice.recomputations()).toEqual(1);
    });

    it("sould recompute with new products", () => {
      const state: RootState = {
        cart: {
          checkoutState: "READY",
          errorMessage: "",
          items: {
            [products[0].id]: 3,
            [products[1].id]: 4,
          },
        },
        products: { products: {
          [products[0].id]: products[0],
          [products[1].id]: products[1],
        } },
      }

      getTotalPrice.resetRecomputations();
      let result = getTotalPrice(state);

      expect(result).toBe("43.23");
      expect(getTotalPrice.recomputations()).toEqual(1);

      state.products.products = {
        [products[0].id]: products[0],
        [products[1].id]: products[1],
        [products[2].id]: products[2],
      }

     result = getTotalPrice({...state});

      expect(result).toBe("43.23");
      expect(getTotalPrice.recomputations()).toEqual(2);
    });

    it("should recompute when cart changes", () => {
      const state: RootState = {
        cart: {
          checkoutState: "READY",
          errorMessage: "",
          items: {
            [products[0].id]: 3,
            [products[1].id]: 4,
          },
        },
        products: {
          products: {
            [products[0].id]: products[0],
            [products[1].id]: products[1],
          },
        },
      };

      getTotalPrice.resetRecomputations();
      let result = getTotalPrice(state);

      expect(result).toEqual("43.23");
      expect(getTotalPrice.recomputations()).toEqual(1);

      state.cart.items = {}

      result = getTotalPrice({...state});

      expect(result).toEqual("0.00");
      expect(getTotalPrice.recomputations()).toEqual(2);
    });
  });
});

// testando os thunks com mock do dispatch. Quando a função checkoutCart do cartSlice é chamada, o jest mocka a chamada da api sendo sucesso ou erro. O dispatch é chamado duas vezes, uma com o pending e outra com o fulfilled ou rejected. O teste verifica se o dispatch foi chamado duas vezes e se o payload é o esperado.
describe("thunks", () => {
  describe("checkoutCart w/mocked dispatch", () => {
    it("should checkout", async () => {
      const dispatch = jest.fn();

      const state: RootState = {
        products: { products: {} },
        cart: {
          checkoutState: "READY",
          errorMessage: "",
          items: { abc: 123 }
        }
      };

      const thunk = checkoutCart();
      await thunk(dispatch, () => state, null);
      console.log("thunk cartslice test:", thunk)

      const { calls } = dispatch.mock;
      console.log("calls cartslice test:", calls, calls[0], calls[1])

      expect(calls.length).toBe(2);
      expect(calls[0][0].type).toEqual("cart/checkout/pending");
      expect(calls[1][0].type).toEqual("cart/checkout/fulfilled");
      expect(calls[1][0].payload).toEqual({ success: true });
    });

    it("should fail with no items", async () => {
      const dispatch = jest.fn();

      const state: RootState = {
        products: { products: {} },
        cart: {
          checkoutState: "READY",
          errorMessage: "",
          items: {}
        }
      };

      const thunk = checkoutCart();
      await thunk(dispatch, () => state, null);
      console.log("thunk cartslice test:", thunk)

      const { calls } = dispatch.mock;
      console.log("calls cartslice test:", calls, calls[0], calls[1])
      console.log("calls[0] cartslice test:", calls[0]);
      console.log("calls[1] cartslice test:", calls[1]);

      expect(calls.length).toBe(2);
      expect(calls[0][0].type).toEqual("cart/checkout/pending");
      expect(calls[1][0].type).toEqual("cart/checkout/rejected");
      expect(calls[1][0].payload).toEqual(undefined);
      expect(calls[1][0].error.message).toEqual("Must include cart items");
    });
  });
});

// testando checkoutCart com o mock do configureStore da lib redux-mock-store.
describe("checkoutCart w/mock redux store", () => {
  it("should checkout", async () => {
    const store = mockStore({
      cart: {
        items: { testItem: 3 }
      }
    })

    await store.dispatch(checkoutCart() as any);
    const actions = store.getActions();

    // essa actions se comporta como o "CALLS" do mock do dispatch
    expect(actions).toHaveLength(2);
    expect(actions[0].type).toEqual("cart/checkout/pending");
    expect(actions[1].type).toEqual("cart/checkout/fulfilled");
    expect(actions[1].payload).toEqual({ success: true });
  });

  it("should fail with no items", async () => {
    const store = mockStore({
      cart: {
        items: {},
        errorMessage: ""
      }
    })

    await store.dispatch(checkoutCart() as any);
    const actions = store.getActions();

    expect(actions).toHaveLength(2);
    expect(actions[0].type).toEqual("cart/checkout/pending");
    expect(actions[1].type).toEqual("cart/checkout/rejected");
    expect(actions[1].payload).toEqual(undefined);
    expect(actions[1].error.message).toEqual("Must include cart items");
  });
})

describe("checkoutCart w/full redux store", () => {
  it("should checkout with items", async () => {
    const state = getStateWithItems({ testItem: 3 });
    const store = getStoreWithState(state);

    await store.dispatch(checkoutCart() as any);

    expect(store.getState().cart).toEqual({
      items: {},
      checkoutState: "READY",
      errorMessage: "",
    })
  });

  it("should checkout with items", async () => {
    const state = getStateWithItems({});
    const store = getStoreWithState(state);

    await store.dispatch(checkoutCart() as any);

    expect(store.getState().cart).toEqual({
      items: {},
      checkoutState: "ERROR",
      errorMessage: "Must include cart items",
    })
  });

  it("should handle an error response", async () => {
    const state = getStateWithItems({ badItem: 7 });
    const store = getStoreWithState(state);

    await store.dispatch(checkoutCart() as any);

    expect(store.getState().cart).toEqual({
      items: { badItem: 7 },
      checkoutState: "ERROR",
      errorMessage: "",
    })
  });

  it("should handle an empty error message", async () => {
    const state = getStateWithItems({ evilItem: 7 });
    const store = getStoreWithState(state);

    await store.dispatch(checkoutCart() as any);

    expect(store.getState().cart).toEqual({
      items: { evilItem: 7 },
      checkoutState: "ERROR",
      errorMessage: "",
    })
  });

  it("should be pending before checking out", async () => {
    const state = getStateWithItems({ goodItem: 3 });
    const store = getStoreWithState(state);

    expect(store.getState().cart.checkoutState).toEqual("READY");
    // aqui a action é chamada, mas não é esperada a resposta, pois o await é feito na linha, então ela fica como "pending" fazendo assim o checkoutState ser "LOADING"
    const action = store.dispatch(checkoutCart() as any);

    expect(store.getState().cart.checkoutState).toEqual("LOADING")

    // aqui o await faz com que a action seja executada e o checkoutState seja "READY"
    await action;

    expect(store.getState().cart.checkoutState).toEqual("READY")
  });
});
