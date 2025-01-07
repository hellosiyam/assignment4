function password(numbers) {
    let number = Object.keys(numbers).length;
    let birthString = numbers.birthYear.toString();
    if (birthString.length < 4 || number < 3) {
        return "error"
    }
    
    let nam = numbers.name;
    let birth = numbers.birthYear;
    let site = numbers.siteName;
    let sit=site[0].toUpperCase()+site.slice(1).toLowerCase();
    const thePassword =sit + "#" + nam + "@" + birth;
    return thePassword
    
}
console.log(password({ name: "kolimuddin" , birthYear: 1020 , siteName: "google" }));

// function password(numbers) {
//     let number = Object.keys(numbers).length  
//     let strBirth = numbers.birthYear.toString();
//     if (strBirth.length < 4 || number < 3) {
//         return "Error";
//     }
    
//     const nam = numbers.name;
//     const birth = numbers.birthYear;
//     const site = numbers.siteName
//     const sit = site[0].toUpperCase()+site.slice(1).toLowerCase();
//     const thePassword = sit+ "#" + nam + "@" + birth;
//     return thePassword;
    
    
// }
// console.log(password({name: "kolimuddin"  , birthYear: 1099 , siteName: "google"}));

