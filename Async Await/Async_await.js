let myData = new Promise (function (resolve,reject){
    let condition = true
    if(!condition){
        setTimeout(()=>{
            resolve(['Ayush','Shivam','Anjali','nitin','jyoti'])
        },2000)
    }
    else{
        setTimeout(()=>{

            reject('Error : something went wrong please try again')
        },1000)
    }
})

const namelist = async ()=>{
    try {
        console.log('Name list of HVA student.....');
        let response = await myData    // await function take some time for print statment
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}
namelist()