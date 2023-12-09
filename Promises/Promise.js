let object = {
    FirstName : 'Ayush',
    lastName : 'sharma',
    age : 23 

}
let prom = new Promise (function(resolve , reject){       // first perameter for fullfill and second for rejected
    if(object.hasOwnProperty('FirstName')){               // For check FirstName is available in object or not ....
        resolve('Data is vailid')
    }
    else(
        reject('Data is invailid')
    )
})
prom.then((DataTrue)=>{             // then access all fullfill value
    console.log(DataTrue);
}).catch((DataWrong)=>{            // catch access all rejected value 
    console.log(DataWrong);
})

// then and catch is callback function