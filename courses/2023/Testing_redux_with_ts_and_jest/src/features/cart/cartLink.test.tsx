import React from "react";
import { screen } from "@testing-library/react";
import { CartLink } from "./CartLink";
import { addToCart, removeFromCart, updateQuantity } from "./cartSlice";
import { getStateWithItems, renderWithContext } from "../../test-utils";


test("Should contain a link", () => {
  renderWithContext(<CartLink />);
  expect(screen.getByRole("link")).toBeInTheDocument();
});

test("should show text when there are no items in the cart", () => {
  renderWithContext(<CartLink />);

  const link = screen.getByRole("link");

  expect(link).toHaveTextContent("Cart");
  expect(link).not.toHaveTextContent("0");
  expect(link).not.toHaveTextContent("1");
});

test("should show the correct number of items in the cart", () => {
  const state = getStateWithItems({testItem: 1 })
  const {store} = renderWithContext(<CartLink />, state);

  const link = screen.getByRole("link");
  
  expect(link).toHaveTextContent("1");

  store.dispatch(updateQuantity({id: "testItem", quantity: 5}));

  expect(link).toHaveTextContent("5");

  // adicionando outro item
  store.dispatch(addToCart("testItem2"));
  expect(link).toHaveTextContent("6");

  //removendo os itens
  store.dispatch(removeFromCart("testItem"));
  store.dispatch(removeFromCart("testItem2"));
  expect(link).toHaveTextContent("Cart");
});
