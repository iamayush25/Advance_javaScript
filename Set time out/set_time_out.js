let myData = new Promise ((resolve,reject)=>{
    let condition = false;
    if(condition){
        setTimeout(()=>{
            console.log('Name of Students of HVA');
            resolve(['Ayush','Shivam','Anjali','nitin','jyoti'])
        },1000)
    }
    else{
        setTimeout(()=>{
            reject('Error : something went wrong please try again')
        },0)
    }
})
myData.then((Result)=>{
    console.log(Result);
}).catch((Error)=>{
    console.log(Error);
})