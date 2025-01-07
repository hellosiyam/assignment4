function monthlySavings(earnMoney, levingCost) {
    if (Array.isArray(earnMoney) !== Array && typeof levingCost !== "number") {
        return "Error"
    }
    let totalEarn = 0;
    for(const money of earnMoney){
        if (money >= 3000) {
            const tex = (3000*20)/100;
            const totalMoney = money - tex;
            totalEarn = totalMoney + totalEarn;
            // console.log(totalEarn);
            
        }
        else{
            totalEarn = money + totalEarn;
            // console.log(totalEarn);  
        }
    }
    const sasving = totalEarn - levingCost;
    if (sasving < 0) {
        return "Earn Money"
    }
    else{
        return  "Total Saving:" +" "+sasving;
    }
}
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));
