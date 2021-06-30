//callback hell
//Promise : Proxy which doesn't knows the output at start of execution
//promise call back function with two objects to perform operation on resolved or rejected state

let promiseObj = new Promise((resolve, reject)=>{

                        setTimeout(() => {
                                resolve({
                                    "status":"Resolved",
                                    "data":"Server call successfull",
                                    "status code" : 200
                                })
                        }, 1000);

                        setTimeout(() => {
                            reject({
                                "status":"Rejected",
                                "data":"Server call failed",
                                "status code" : 400
                            })
                        }, 1500);
                        
                })

console.log(promiseObj);

        promiseObj.then((data, err)=>{ //then is positive case of response from server(settimeout) as resolved
            console.log("err" , err)
            console.log("data ", data)
        }).catch((data, err)=>{  //then is positive case of response from server(settimeout) as rejected
            console.log("err" , err)
            console.log("data ", data)
        }).finally(()=>{
            console.log(promiseObj);
        })

console.log("end of Line Execution");