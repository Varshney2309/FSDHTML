// console.log("Hello prakhuuuuur");
// function fun(a,b){
//     return a+b;
// }
// console.log(fun(3,4));

// function cCompiler()
// {
//     return "C Compiler";

// }
// function javaCompiler(){
//     return "Java Compiler";

// }
const button=document.getElementById("btn");
console.dir(button);

function selectLanguage(language){
    console.log("hi,inside selectLanguage");
    let data;
    if(language=="c"){
        function cCompiler()
{
    return "C Compiler";

}
data=cCompiler();


    }
    if(language="java"){
        function javaCompiler(){
            return "Java Compiler";
        
        }
        data=javaCompiler()

    }
    return data;
    


}
// console.log(selectLanguage("java"));
