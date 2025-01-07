function calculateMoney(ticket) {
    const ticketPrice = 120;
    const earnMoney = ticketPrice * ticket
    const gurdFee = 500;
    const lunchFee = 50;
    const stuff = 8;
    const stuffLunchFee = lunchFee * stuff;
    const cost = gurdFee + stuffLunchFee;
    const totalEarn = earnMoney - cost

    if (ticket < 0 && ticket !== "number") {
        return "Invalid Number"
    }
    else{
        return totalEarn;
    }
}
console.log(calculateMoney(1055));
