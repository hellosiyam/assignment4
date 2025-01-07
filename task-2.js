function checkName(names) {
  if (typeof names ==! "string" || typeof names === "object" || typeof names === "number") {
    return "Enter a Name"
  }
  const lastChr = names.slice(-1).toLowerCase();
  const chr = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
  for(const nam of lastChr){
    if (chr.includes(nam)) {
        return "This is a good ass for your babay"
    }
  }
  return "This is not a good ass for your babay"
}
console.log(checkName("10"));
