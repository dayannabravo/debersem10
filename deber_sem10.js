/*Partiendo del siguiente array, realizar las operaciones necesario
 para ordenar los días de la semana:

let week = ['Sunday', 'Tuesday', 'Wednesday', 'Thursday',  'Saturday' ]; 

Eliminar el día domingo del inicio de la lista.
Agregar el día lunes al inicio de la lista.
Agregar el día domingo al final de la lista.
Insertar el día viernes en la posición correspondiente.
Mostrar en pantalla de elemento en elemento usando un for.
Usar los métodos: push, pop, shift, unshift, splice */
'use strict'
let day = ['Sunday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'];
for (let i = 0; i < day.length; i++) {
    alert(`${day[i]}`);
  }
  
day.shift();
alert(day);
day.unshift('Monday');
alert(day);
day.push('Sunday');
alert(day);
day.splice(4, 0, 'Friday');
alert(day);

