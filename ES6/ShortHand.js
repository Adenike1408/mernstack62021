// If my key value (that i am reading from any variable) are same then instead of having both of them we can have only one

let cat = "Miaow",
 dog = "Woof",
 bird = "Chrip",
 lion = "roar";


 let animalSound = {
    cat: cat,
    dog : dog,
    bird : bird,
    lion : lion
}

let animalSoundShortHand = {
    cat,
    dog,
    bird,
    lion
 }

 console.log("animal sound ", animalSound) // we use comma to auto cast object
 console.log("animal sound from ShortHand ", animalSoundShortHand) // we use comma to auto cast object

 
 console.log("animal sound "+ animalSound) // object in incorrect format

 console.log("animal sound "+ JSON.stringify(animalSound)) // to parse in to object type

 module.exports = {animalSoundShortHand};
