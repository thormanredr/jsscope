console.log(nombre); // undefined
var nombre = "Andres";

console.log(saludar()); // "Hola"
function saludar() {
  return "Hola";
}
```Las funciones se elevan **completamente**, por eso puedes invocarlas antes.

🔹 Funciones asignadas a variables (`var`):

```js
console.log(saludar()); // ❌ Error
var saludar = function () { return "Hola"; };



console.log(x);   // ❌ ReferenceError
let x = 5;