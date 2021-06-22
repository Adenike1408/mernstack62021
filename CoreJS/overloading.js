//polymorphism
//function overriding we did with objects
//function overloading
//over-writing : 

//overloading - nick
TreatCovidPateints()

function TreatCovidPateints(){
    console.log("Treatment 1")
}
TreatCovidPateints() 

function TreatCovidPateints(param1){
    console.log("Treatment 2 "+param1)
}
TreatCovidPateints("Mild") 


function TreatCovidPateints(param1, param2){
    console.log("Treatment 3 "+param1 +" "+param2)
}
TreatCovidPateints("Mild", "HomeIsolation")