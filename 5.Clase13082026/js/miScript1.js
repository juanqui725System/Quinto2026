a=5
b=6
if(b%2==0)
{
    console.log(b," es numero par");
}
if(a%2==0)
{
     console.log(a," es numero par");
}
else{
     console.log(a," es numero impar");
}
/** Realizar un programa para sumar los primero 10 numero
 * Ejemplo:0+1+2+3+4+5+6+7+8+9=45
 */
let suma=0;
for(let i=0;i<=10;i++)
{
  suma+=i; //suma=suma+i
}
console.log("La suma es:",suma);
/** Realizar un programa para generar los numeros pares
 *  de n numeros, n es introducido por teclado.
 * Ejemplo: Si n=3 entoncces mostrar 2,4,6,
 * Ejemplo: Si n=5 entonces mostrar 2,4,6,8,10
 */
let n=parseInt(prompt("Int. n:"));
for(let i=1;i<=n;i++)
{
    console.log(i*2);
}
