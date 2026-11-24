# HTML-005 — Construir un formulario de registro

- **Tema:** formularios, controles y validación básica
- **Nivel:** básico
- **Tipo:** construir desde cero

## Objetivo

Crear un formulario entendible y usable, asociando cada control con su etiqueta.

## Enunciado

Crea un formulario para registrar una solicitud de asesoría académica ficticia. No debe conectarse a un servidor ni guardar información real.

## Requisitos

1. Agrupa los controles dentro de form.
2. Incluye un campo de nombre y otro de correo.
3. Asocia cada control con un label mediante for e id.
4. Utiliza tipos de input adecuados para texto y correo.
5. Incluye un select para elegir un área de estudio.
6. Incluye un grupo de radio buttons para seleccionar un nivel de experiencia.
7. Incluye un textarea para describir la duda.
8. Agrupa los radio buttons en fieldset y utiliza legend para nombrar el grupo.
9. Define name en los controles que enviarían datos.
10. Marca como obligatorios los campos esenciales usando required.
11. Agrega un botón con type="submit".

## Restricciones

- No agregues contraseñas ni datos personales reales.
- No utilices placeholder como sustituto de label.
- No simules controles utilizando div o texto.
- No afirmes que el formulario guarda información: el procesamiento del servidor está fuera del ejercicio.

## Resultado esperado

Un formulario con campos identificados, opciones seleccionables y validación básica del navegador. Al intentar enviar sin completar los campos obligatorios, el navegador debe mostrar sus avisos nativos.

## Casos de revisión

| Revisión | Resultado esperado |
|---|---|
| Etiquetas | Cada input, select y textarea tiene label asociado. |
| Identificadores | Cada for corresponde al id del control correcto. |
| Envío | Los controles tienen name y el botón es submit. |
| Opciones | El grupo radio comparte el mismo name. |
| Validación | Los campos obligatorios incluyen required. |
| Agrupación | Los radio buttons están dentro de fieldset y legend. |

## Archivo inicial

Continúa desde [HTML-005.html](HTML-005.html).

## Solución

Consulta [SOLUCIONES/HTML-005.html](../SOLUCIONES/HTML-005.html) después de intentarlo.

## Nota

required ayuda con la validación del navegador, pero una aplicación real también debe validar los datos en el servidor.

## Fuentes

- [MDN — Formularios HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms)
- [MDN — Estructurar un formulario](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
