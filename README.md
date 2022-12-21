# EC-Project
 Repositorio proyecto Ecommerce
 
 Proyecto realizado para el aprendizaje, estudio e implementación de siguientes tecnologías/herramientas:
 
 BackEnd:
  - NodeJS
  - Express (router, HTTP Requests)
  - MongoDB y Mongoose
  - Passport y bcrypt
 
 FrontEnd:
  - Template Engine PUG
  - HTML y CSS
  - Bootstrap
  - jQuery
  - JavaScript

Además de aprender sobre programación asincrónica, patrones de diseño, PostMan, principio SOLID

Al entrar a la página ('/') sin estar logeado, se llega al menú de login:

![image](https://user-images.githubusercontent.com/114360790/209010708-d3e0509a-3c79-48b7-957a-3aeff96901e6.png)

Si se ingresa una contraseña o usuario incorrecto, se le avisa:

![image](https://user-images.githubusercontent.com/114360790/209010858-f06e3548-bffd-45d6-a907-462115f402d1.png)

El usuario se autentica con Passport Local y los datos están almacenados en una base de datos en Mongo Atlas.

Si el usuario no tiene cuenta puede presionar en "Registrarse", se redirige a /signup y, puede completar el formulario para registrarse (en la foto los datos ya fueron completados):

![image](https://user-images.githubusercontent.com/114360790/209011360-6c2b31cf-94f2-4c5c-a96a-458cfe7b8b0f.png)

La contraseña se encripta mediante bcrypt.

![image](https://user-images.githubusercontent.com/114360790/209013076-f5cd0c7d-80cd-4bc1-a39c-8c92d4a9716d.png)

Una vez registrado o logeado exitosamente, se redirecciona al listado de productos en venta (/products), y en la barra de navegación se adicionan los botones "Cerrar Sesión" y "Carrito".

![image](https://user-images.githubusercontent.com/114360790/209013245-5d988329-4313-40ad-84bf-302813078764.png)

Los productos pueden filtrarse por categoria haciendo click en el menú desplegable.

![image](https://user-images.githubusercontent.com/114360790/209019501-2b249f2a-e0d0-484f-9a30-0a47d531b12c.png)

En "productos" podemos posicionar el cursor sobre los productos, y aparecerá un botón para "Anadir al carro".

![image](https://user-images.githubusercontent.com/114360790/209019762-60260000-136e-4e0b-bbe2-08d5c839c90b.png)

Una vez agregado, presionando en el botón "Carrito" de la barra de navegación vemos los productos agregados.

![image](https://user-images.githubusercontent.com/114360790/209020027-8710799d-604b-4050-9005-b2202b2c334f.png)

Los productos agregados al carrito se almacenan en la base de datos, en la collection "carts":

![image](https://user-images.githubusercontent.com/114360790/209020672-ae1414a1-c45f-4a74-a6d0-93ee729ea3fc.png)






