// function add(a,b){
//    return (a+b);
// }
// var ans=add(4,3);
// console.log(ans);

function callback(){
   console.log("this is a callback function");
}
function add(a,b,callback)
{
   var result=a+b;
   console.log(result);
   callback();
}
add(7,1,callback);