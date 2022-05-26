const three_sum = require("../three_sum.js")

test("three sum",() => {
    expect(three_sum([[-1,0,1,2,-1,-4]])).toEqual([[-1,-1,2],[-1,0,1]])
    expect(three_sum([])).toEqual([])
    expect(three_sum([0])).toEqual([])
})
