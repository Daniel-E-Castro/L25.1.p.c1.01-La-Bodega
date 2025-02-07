/*En una bodega se tiene el costo de varios artículos y se le piensa ganar a cada uno el 50%...
 Hacer un programa que calcule el total de ganancia que tendrá la bodega al venderlos todos.
 Ej. Costos varios artículos: 10, 20, 14, 6 y 4
La salida requerida presenta el siguiente formato: 
La ganancia será de Bs.27
*/

import cl_Bodega from "./Cl_Bodega.js";
import cl_Articulo from "./Cl_Articulo.js";

let articulo1 = new cl_Articulo(10)
let articulo2 = new cl_Articulo(20)
let articulo3 = new cl_Articulo(14)
let articulo4 = new cl_Articulo(6)
let articulo5 = new cl_Articulo(4)

let bodega = new cl_Bodega()

bodega.procesar(articulo1)
bodega.procesar(articulo2)
bodega.procesar(articulo3)
bodega.procesar(articulo4)
bodega.procesar(articulo5)

alert(`La Ganancia sera de Bs. ${bodega.totalGanancia()}`)


