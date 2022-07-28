const validParentheses = require("../valid_parentheses.js")

test("maxProfit",() => {
    expect(validParentheses("()")).toBeTruthy()
    expect(validParentheses("()[]{}")).toBeTruthy()
    expect(validParentheses("(]")).toBeFalsy()
})