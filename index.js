function p (calc){
  // if(calc.length>1 || a.length >1 || b.length > 1){
  //   return false;
  // }
  // return p(calc, a, b)
  return function(...args){
    return a+b+c // was missed this line during call
  }
}

var a=1; var b=2; var c=3;

function calc (a,b,c){
return a+b+c;
}
var p1 = p(calc, a, b)
p1(c) //6
console.log("p1 print",p1())

var p2 = p(calc, a)
p2(b,c) //6
console.log("p1 print",p2())

var p3 = p(calc)
p3(a,b,c) //6