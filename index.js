module.exports=()=>{
        let a = 1;
        const c = "const variable";
        a = new Promise((resolve, reject)=>{
            resolve('resolved value!!!!');
        });
        a.then(data=>{
            console.log(data);
        });
}