
import { describe, test, expect } from "vitest";
import {
  PizzaTypeSchema,
  PizzaSchema,
  AmountSchema,
  OrderIdSchema,
} from "./pizzashop";

describe("Schema Unit Tests", () => {
  test("PizzaTypeSchema accepts margherita", () => {
    expect(PizzaTypeSchema.parse("margherita")).toBe("margherita");
  });

  test("PizzaTypeSchema rejects capital M", () => {
    expect(() => PizzaTypeSchema.parse("Margherita")).toThrow();
  });

  test("PizzaSchema accepts a valid pizza", () => {
    expect(
      PizzaSchema.parse({ type: "pepperoni", price: 120 })
    ).toEqual({ type: "pepperoni", price: 120 });
  });

  test("PizzaSchema rejects a pizza without price", () => {
    expect(() => PizzaSchema.parse({ type: "pepperoni" })).toThrow();
  });

  test("AmountSchema rejects a string", () => {
    expect(() => AmountSchema.parse("100")).toThrow();
  });

  test("OrderIdSchema accepts zero", () => {
    expect(OrderIdSchema.parse(0)).toBe(0);
  });
});
