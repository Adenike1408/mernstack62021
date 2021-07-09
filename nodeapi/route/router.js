let exprs = require("express");

let router = exprs.Router(); //Router({caseSensitive:true})
let TrainingModel = require("../DataModel/TrainingModel");

router.get("/trainings", (req, res)=>{

    TrainingModel.find((err, data)=>{
        
        if(!err){
            res.json(data)
        }else{
            console.log("Error ", err)
            res.send("Error occured");
        }

    })
})

router.get("/training", (req, res )=>{
    console.log("Query String" , req.query);

    let trainingObj = new TrainingModel(req.query);

    trainingObj.save((err, data)=>{

        if(!err){
            res.json(data)
        }else{
            console.log("Error", err)
            res.send("An Error occured")
        }
    })

})

router.get("/browse", (request, response )=>{

    response.send("This is a router driven api")

})

router.get("/request/:id", (request, response )=>{
    console.log("request ===> ", request )

    response.json({'request':'printed successfully'})

})

router.get("/response", (request, response )=>{
    console.log("response ===> ", response )

    response.json({'response':'printed successfully'})

})

//will respond to any request that comes to this path ==> get, put, post, patch and delete
router.all("/response", (request, response )=>{
    console.log("response ===> ", response )

    response.json({'response':'printed successfully'})

})

router.get("*", (request, response )=>{
    response.send("Nothing matches to your requested route")
})

module.exports = router;