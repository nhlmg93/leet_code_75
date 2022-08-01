function maxProfit(prices=[]) {
    let p_buy = 0
    let p_sell = 1
    let profit = 0
    while (p_sell < prices.length) {
        if (prices[p_buy] < prices[p_sell]) {
            profit = Math.max(profit, prices[p_sell] - prices[p_buy])
        } else {
            p_buy = p_sell
        }
        p_sell++
    }
    return profit
}
module.exports = maxProfit
