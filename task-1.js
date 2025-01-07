function calculateMoney(ticket) {
    if (typeof ticket !== "number") {
        return "Invalid Number"
    }
    const ticketPrice = 120;
    const earnMoney = ticketPrice * ticket
    const gurdFee = 500;
    const lunchFee = 50;
    const stuff = 8;
    const stuffLunchFee = lunchFee * stuff;
    const cost = gurdFee + stuffLunchFee;
    const totalEarn = earnMoney - cost
    if (totalEarn <0) {
        return 'Error'
    }
    return totalEarn;
}
console.log(calculateMoney(100));
