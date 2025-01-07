// function checkName(names) {
//     if (names ==! "string") {
//         return "invlide"
//     }
//     const lastChar = names.slice(-1).toLowerCase();
//     const chrt = ['a', 'y', 'i', 'e', 'o', 'u', 'w', ]
//     for(const name of lastChar){
//         if (chrt.includes(name)) {
//             return "Good Name"
//         }
//     }
//     return 'Bad Name'
// }
// console.log(checkName("RAFEm"));

function checkName(names) {
    if (names ==! "string") {
        return "Enter a String value"
    }

    const lastChar = names.slice(-1).toLowerCase();
    const chr = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    for( const name of lastChar){
        if (chr.includes(name)) {
            return "Good Name"
        }
    }
    return "Bad Name"
}
console.log(checkName(0));
