# Solution — JS-012

## Expected output

~~~text
Total: 60
Alumno: Mara
Aviso: Revisa tus ejercicios.
~~~

The messages are kept in Spanish to match the starter and solution code.

## Fixed errors

1. **Incorrect accumulation:** total = precio replaced the total on each iteration. It was changed to total += precio.
2. **Misspelled name:** usuairo does not exist. The parameter is usuario, so the code uses usuario.nombre.
3. **Block scope:** mensaje was declared inside the if block and could not be read afterward. It was declared with let inside the function and assigned within the block.

## Debugging process

Run the file and inspect the total. Fix the first issue and run it again. Continue with the ReferenceError and finally the message that is out of scope.

File: [solucion.js](solucion.js).
