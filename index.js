
const throttler = (callback, delay) =>{
     return function(...args){
        setTimeout(()=>{
            callback() ; 
        },delay)
     }
}


 const myFun = throttler(()=>{
    console.log("User Clicked...")
},2000)