let a = fetch("https://jsonplaceholder.typicode.com/users")
async function fetchData() {
  try {
    const response = await a;
    let result = await response.json()
    // console.log(result);
    let resultFilter = result.filter((item)=>{
      console.log(item.name);
    }) 
    console.log(resultFilter);
    
  }
  catch(Error){
    console.log(Error);
  }
}
fetchData()

