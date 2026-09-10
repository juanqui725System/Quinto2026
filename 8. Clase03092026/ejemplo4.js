// ejemplo utilizando operadores logicos
let a=5,b=6,c=5, d=7;
console.log(a==c && b==d); // false
console.log(a==c || b==d);  //true
console.log(!(a==c)); //false
console.log(!(a==b)); //true
console.log(a==c && b!=d);  //true
console.log(a!=c || b==d);  //false
console.log(a!=c && b==d); 
console.log(a!=c || b!=d); 
console.log(a==c && b==d || a==c && b==d); 
console.log(a!=c || b>=d && a<=c || b!=d); 
console.log(a==c && b==d || a!=c && b!=d); 
console.log(a==c || b==d && a!=c || b!=d); 
console.log(a>c && b!=d || a==c && b!=d); 

const productos={
    "monitor": 100,
    "teclado": 50,
    "mouse": 25,
}
console.log(productos);
console.log("Cantidad de monitores:", productos["monitor"]);
/**
 * En una tienda de computadoras los clientes
 * pueden averiguar el precio de los productos.
 * El dueno de la tienda quiere un programa
 * en javascript que permita mostrar el total de
 * productos que el cliente desea comprar 
 * y el precio total a pagar.
 * El programa debe:
 * tener una lista de proudctos con sus precios.
 * Permitir al usuario ingresar el nombre de un
 * producto y la cantidad que desea comprar.
 * Calcular el precio total a pagar y mosrar.
 * Si el producto no existe, mostrar un mensaje.
 */
