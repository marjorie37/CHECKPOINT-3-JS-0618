// Define toAlternatingCase() function such 
//that each lowercase letter becomes uppercase 
//and each uppercase letter becomes lowercase 
//BUT remove underscore

// For example:

// ```
//     toAlternatingCase("hello world") === "HELLO WORLD"

//     toAlternatingCase("HE_LLO WO_RLD") === "hello world"

//     toAlternatingCase("hello WORLD") === "HELLO world"

//     toAlternatingCase("HeLLo WoRLD") === "hEllO wOrld"

//     toAlternatingCase("12345") === null

function toAlternatingCase(chaine) {

    // const regex = new RegExp("_", "g")
    // const chaine2 = chaine.replace(regex, "")
    // if (isNaN(chaine2)) {
    //     let Alternate = [...chaine2].map(elt => {
    //         return elt === elt.toUpperCase()
    //             ? elt.toLowerCase()
    //             : elt.toUpperCase()
    //     }).join('')
    //     return Alternate
    // } else {
    //     return null
    // }
    const regex = new RegExp("[a-z ]", "i")
    const chaine2 = [...chaine].filter(elt => regex.test(elt)).map(elt => {
        return elt === elt.toUpperCase()
            ? elt.toLowerCase()
            : elt.toUpperCase()
    }).join('')
    console.log(chaine2);
    return chaine2 === "" ? null : chaine2;

}

let test = toAlternatingCase("568gffg787644")
console.log(test);