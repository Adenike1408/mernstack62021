//classes :  classes with syntax similar to java, .net 
//are special type of functions in javascript that give us desired behaviour

class CalculateArea {

    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
    }

    Sqaure = () => this.length*this.length;
    
    Rectangle = () => this.length*this.width;

}

let CalcObj = new CalculateArea(5,6);

console.log(CalcObj.Sqaure());
console.log(CalcObj.Rectangle());

// create a class with name calculator, which accepts two params in cnstrctr - should have methods
// add, subTract, Multiply and divide and some level of validation