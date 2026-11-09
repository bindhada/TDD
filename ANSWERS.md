Week 10 – Answers
Exercise 1 – A new pizza on the menu

Question 1: The test is still red. Which schema stopped it, and why? What does that tell you about TypeScript types versus Zod checks?

The PizzaTypeSchema stopped it because "vegetarian" was not included in the allowed pizza types. Zod's parse() checks the value at runtime and throws an error if the value is invalid.

TypeScript types are checked during development and compilation, but they do not validate values at runtime. Zod provides runtime validation.

Question 2: What file does the orderPizza("vegetarian") test belong in, and why?

It belongs in pizzashop.integration.test.ts because orderPizza() combines multiple functions: createPizza(), sendOrder() and chargeCustomer(). Testing the complete process is an integration test.

Exercise 2 – Testing chargeCustomer

Question: This bug would never have been found without a test. What was it, and what does that tell you about testing error messages?

The bug was a spelling mistake in the error message. "Customer" was written as "cutomer". The function still threw an error, but the message was incorrect.

This shows that testing only whether an error is thrown is not always enough. We should also test the exact error message when our own code throws an error.