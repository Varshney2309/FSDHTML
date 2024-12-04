// // console.log("Hello prakhuuuuur");
// // function fun(a,b){
// //     return a+b;
// // }
// // console.log(fun(3,4));

// // function cCompiler()
// // {
// //     return "C Compiler";

// // }
// // function javaCompiler(){
// //     return "Java Compiler";

// // }
// const button=document.getElementById("btn");
// const output=document.getElementById('output');
// const select=document.getElementById('select');

// console.dir(select);

// function selectLanguage(language){
//     console.log("hi,inside selectLanguage");
//     output.innerHTML="<h2>Welcome to home page</h2>"
//     let data;
//     if(language=="c"){
//         function cCompiler()
// {
//     return "C Compiler";

// }
// data=cCompiler();


//     }
//     if(language=="java"){
//         function javaCompiler(){
//             return "Java Compiler";
        
//         }
//         data=javaCompiler()

//     }
//     return data;
    


// }
// button.addEventListener("click",()=>{
//     const comp=selectLanguage(select.value);
// output.innerHTML=`<h2 style=color:red>${comp}</h2>`;
//     console.log(comp);


// });
// // console.log(selectLanguage("java"));

const myprommise=new Promise(
    (resolve,reject)=>{
        let a=5;
        if(a>10){
            resolve({name:"rahul",branch:"IT"});
        }
        
        else{
            reject("Data is rejected");
        }

    }
);
// myprommise.then(msg=>console.log(msg))
// .catch(error=>console.log(error))
// .finally(()=>console.log("finally executed"));
const data=fetch("https://dummyjson.com/recipes");
data.then(
    (res)=>{
        console.log(res);
        res.json().then(
            (response)=>{
                console.log(response.recipes[0]);
            }
        )
    }
)