import React from "react";
import { getByRole, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Products } from "./Products";

import * as api from "../../app/api";
import { renderWithContext } from "../../test-utils";
import mockProducts from "../../../public/products.json"

const getProductsSpy = jest.spyOn(api, "getProducts");
getProductsSpy.mockResolvedValue(mockProducts);

test("several products should be listed", async () => {
  renderWithContext(<Products />);

  // O método waitFor é usado para aguardar até que um determinado elemento seja renderizado na tela antes de prosseguir com a execução do teste. Isso é útil em casos em que o componente precisa ser renderizado antes que o teste possa ser realizado corretamente.
  await waitFor(() => expect(getProductsSpy).toHaveBeenCalledTimes(1));

  const articles = screen.getAllByRole("article");
  expect(articles.length).toEqual(mockProducts.length);
});

test("Each individual products should contain a heading", async () => {
  renderWithContext(<Products />);

  for (let product of mockProducts) {
    await screen.findByRole("heading", { name: product.name });
  }
})

test("should be able to add a banana to the cart", async () => {
  const { store } = renderWithContext(<Products />);

  const button = await screen.findByLabelText(/Add Bananas/i);

  userEvent.click(button);

  // foi usado o waitFor pois somente com expect o teste não passava pois o dispatch do botao é assincrono
  await waitFor(() => expect(store.getState().cart.items["207"]).toEqual(1));
  
  userEvent.click(button);
  userEvent.click(button);
  await waitFor(() => expect(store.getState().cart.items["207"]).toEqual(3));
});
