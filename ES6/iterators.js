//Filter, Map, Reduce and Some - Iterators
//Are advanced iterators, always give us a shallow copy of data present and 
//maintain the data immutability whatever change we do to get new collection it will not update in parent collection

let personsList = [
    {id : 1, name : "John", savedby : "CaptainAmerica"},
    {id : 2, name : "Alice", savedby : "IronMan"},
    {id : 3, name : "Roger", savedby : "CaptainAmerica"},
    {id : 4, name : "Adam", savedby : "IronMan"},
    {id : 5, name : "Alex", savedby : "SpiderMan"}
];

//1. Give me a list of persons who are saved by CaptainAmerica

let pplSavedByCA = personsList.filter((person) => person.savedby == "CaptainAmerica")

//console.log("pplSavedByCA", pplSavedByCA)
//console.log("personsList", personsList)

//2. Give me a list of names who are saved by IronMan and put Sir in front of their names
let pplSavedByIronMan = personsList.map((person)=> person.savedby == "IronMan" ? "Sir " +person.name : "").filter((p)=>p!=="")

//console.log("pplSavedByIronMan", pplSavedByIronMan)
//console.log("personsList", personsList)

//3. If anyone is saved by Batman
let savedByBatMan = personsList.some(pesron => pesron.savedby === "BatMan")
console.log("savedByBatMan ", savedByBatMan)
let svdBySPMan = personsList.some(pesron => pesron.savedby === "SpiderMan")
//console.log("svdBySPMan ", svdBySPMan)
//console.log("personsList", personsList)

//4. Give me the number of persons saved by each super hero

let savedByEachSuperHero = personsList.reduce((perviousVal, currentVal)=>{
                    console.log("perviousVal", perviousVal )                
                    console.log("currentVal", currentVal )
                    //perviousVal.add(currentVal.savedby);
                    //return perviousVal;
                    
                    perviousVal[currentVal.savedby] = perviousVal[currentVal.savedby] ? perviousVal[currentVal.savedby] + 1 : 1;
                    return perviousVal;
                }, new Set())

console.log("savedByEachSuperHero", savedByEachSuperHero)



//Question :
///////////////////////////

let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "javascript"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];

//1. List the person with javascript tag
//2. List the same on person using java and put programmer after their name, change the name key to Developer
//3. If we have anyone with tag python
//4. Find the number of unique tags and their count present