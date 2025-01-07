function deleteInvalids(numbers) {
    if (typeof numbers ==! "object" || typeof numbers === "number" || typeof numbers === "string") {
        return "Error"
    }

    const filterOf = numbers.filter(values => !isNaN(values))
    const num = []
    for(const number of filterOf){
      if (typeof number === "number") {
        num.push(number);
      } 
    }
    return num
}
console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
