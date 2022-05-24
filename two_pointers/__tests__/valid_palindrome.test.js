const valid_palindrom = require('../valid_palindrom.js')


test("valid palindrome", () => {
    expect(
        valid_palindrom("A man, a plan, a canal: Panama")
    ).toBeTruthy()
})