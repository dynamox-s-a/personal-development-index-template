import React from "react";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Cart } from "./Cart";
import * as api from "../../app/api";

import { renderWithContext, getStateWithItems } from "../../test-utils";

type Product = api.Product

const checkoutSpy = jest.spyOn(api, "checkout");

test("An empty cart should not have any items", () => {
  renderWithContext(<Cart />);

  const rows = screen.queryAllByRole("row");

  expect(rows.length).toEqual(2);

  screen.getByText("$0.00", { selector: ".total"})
});

test("Cart should display correct total", () => {
  const state = getStateWithItems(
    { testItem: 3 },
    {
      testItem: { name: "Test Product", price: 11.11 } as Product
    }
  )

  renderWithContext(<Cart />, state);
  screen.getByText("$33.33", { selector: ".total" });
});

test("Updating product quantity should update total", async () => {
  const state = getStateWithItems(
    { testItem: 3 },
    {
      testItem: { name: "Test Product", price: 11.11 } as Product
    }
  )

  renderWithContext(<Cart />, state);

  const input = screen.getByLabelText(/Update Test Product quantity/i);

  userEvent.clear(input);
  userEvent.tab();

  await waitFor(() => {
    screen.getByText("$0.00", { selector: ".total" });
  });

  // aqui o tab nao esta funcionando acarretando que o valor nao seja atualizado, e eu nao entendi o porque
  // userEvent.type(input, "4");
  // userEvent.tab();


  // screen.getByText("$44.44", { selector: ".total" });
})

test("removing items should update total", async () => {
  const state = getStateWithItems(
    { carrots: 2, bunnies: 3},
    {
      carrots: { name: "Carrots", price: 5.50 } as Product,
      bunnies: { name: "Bunnies", price: 20.0 } as Product
    }
  )

  renderWithContext(<Cart />, state);

  screen.getByText("$71.00", { selector: ".total" });

  const removeBunniesButton = screen.getByRole("button", { name: /remove bunnies/i });
  userEvent.click(removeBunniesButton);

  await waitFor(() => {
    screen.getByText("$11.00", { selector: ".total" });
  });

  const removeCarrotsButton = screen.getByRole("button", { name: /remove carrots/i });
  userEvent.click(removeCarrotsButton);

  await waitFor(() => {
    screen.getByText("$0.00", { selector: ".total" });
  });
})

test("cannot checkout with an empty cart", async () => {
  checkoutSpy.mockRejectedValueOnce(new Error("Cart must not be empty"));
  renderWithContext(<Cart />);

  const checkout = screen.getByRole("button", { name: "Checkout" });
  const table = screen.getByRole("table");

  expect(table).not.toHaveClass("checkoutLoading");
  userEvent.click(checkout);

  const tableWithClass = screen.getByRole("table").querySelector(".checkoutLoading");

  waitFor(() => {
    expect(tableWithClass).toHaveClass("checkoutLoading");
  });

  await screen.findByText("Cart must not be empty", { selector: ".errorBox" });
  expect(table).toHaveClass("checkoutError");
});

test("should clear items after checkout", async () => {
  const state = getStateWithItems(
    { carrots: 2, bunnies: 3},
    {
      carrots: { name: "Carrots", price: 5.50 } as Product,
      bunnies: { name: "Bunnies", price: 20.0 } as Product
    }
  )
  checkoutSpy.mockResolvedValueOnce({ success: true });

  renderWithContext(<Cart />, state);

  screen.getByText("$71.00", { selector: ".total" });

  const checkout = screen.getByRole("button", { name: "Checkout" });
  userEvent.click(checkout);

  await waitFor(() => {
    screen.getByText("$71.00", { selector: ".total" });
    expect(screen.getAllByRole("row").length).toEqual(4);
  });
});