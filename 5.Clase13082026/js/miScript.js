alert("Mi primer programa");
console.log("Mi primer programa");
const a=25;
const b=30;
const c=a+b;
console.log("La suma es:",c);
let d=5;
let e=7;
let f=a+b;
d=f+e;
f=d+e;//69
console.log("La suma es:",f+e,f);
console.log("La suma es:",d+e);
console.log("La resta es:",d-e);
console.log("La multiplicacion es:",d*e);
console.log("La division es:",d/e);
let valorA=parseInt(prompt("Introduzca un numero"));
let valorB=prompt("Introduzca un numero");
let res=valorA+parseInt(valorB);
alert(res);
valorA=parseFloat(prompt("Introduzca un numero"));
valorB=prompt("Introduzca un numero");
res=valorA+Number(valorB);
alert(res);
console.log(Boolean(0)); //false
console.log(Boolean(1)); //true
console.log(Boolean("")); //false
console.log(Boolean("hola"));//true