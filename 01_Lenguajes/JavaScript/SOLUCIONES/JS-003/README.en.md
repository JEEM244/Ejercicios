# Solution — JS-003

## Output

~~~text
Subtotal: 269.70
Discount: 26.97
Total: 242.73
~~~

## Explanation

First, multiply the unit price by the quantity. Then calculate the discount percentage and subtract it from the subtotal.

toFixed(2) returns a string with two decimal places. It is used when displaying the amount, not for the following calculations.

File: [solucion.js](solucion.js).
