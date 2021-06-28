let animalSound = require("./ShortHand");

//below the ESC - backtick

let dynVal = 2546;

// let myNormalString = "Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
//                     "\n Lorem Lipsum Lorem Lipsum"+dynVal+"Lorem Lipsum" +
//                     "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
//                     "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
//                     "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum";
// console.log(myNormalString)

let myNormalString = `Lorem Lipsum Lorem Lipsum Lorem Lipsum
                      Lorem Lipsum Lorem Lipsum ${dynVal} Lorem Lipsum
                     Lorem Lipsum Lorem Lipsum Lorem Lipsum
                        ${JSON.stringify(animalSound)}

                     Lorem Lipsum Lorem Lipsum Lorem Lipsum
                     Lorem Lipsum Lorem Lipsum Lorem Lipsum`;
console.log(myNormalString)