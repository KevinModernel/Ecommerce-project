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

Posicionando el cursor sobre los productos, aparecerá un botón para "Anadir al carro".

![image](https://user-images.githubusercontent.com/114360790/209019762-60260000-136e-4e0b-bbe2-08d5c839c90b.png)

Una vez agregado, presionando en el botón "Carrito" de la barra de navegación vemos los productos agregados (/cart).

![image](https://user-images.githubusercontent.com/114360790/209020027-8710799d-604b-4050-9005-b2202b2c334f.png)

Los productos agregados al carrito se almacenan en la base de datos, en la collection "carts":

![image](https://user-images.githubusercontent.com/114360790/209020672-ae1414a1-c45f-4a74-a6d0-93ee729ea3fc.png)

Si apretamos "Eliminar Producto" en la derecha del listado del Carrito, quitamos el producto de la BD.

Si apretamos "Confirmar compra":

1- Se crea una orden, que se almacena en la BD en la collection "orders". Cada orden podrá ser obtenida por el Admin, y así ver las compras realizadas.

2- Se resta la cantidad de productos comprados, del stock total.  (stock total almacenado en collection "products").

3- Se elimina el carrito de la BD, quedando vacio.

4- Se envia un mail con la orden al comprador.

Por otro lado, si el usuario que se logea es admin (En la base de datos, collection "Users" está el campo isAdmin que puede ser true or false), en la barra de navegacion se adicionará el botón "Admin", para acceder al Panel de Control (/admin).

![image](https://user-images.githubusercontent.com/114360790/209178453-e122d32b-7d8f-4695-8394-a7c15bc49529.png)

Ingresando, se despliegan distintas opciones para la administración del Ecommerce. Todas las opciones (rutas) tienen un middleware para verificar si el usuario logeado es admin, en caso de no serlo, no permite acceder a la ruta.

![image](https://user-images.githubusercontent.com/114360790/209178620-1900d26a-6a12-40fd-8712-151bdc57b789.png)

Añadir producto (/admin/addproduct):

![image](https://user-images.githubusercontent.com/114360790/209182939-5aee4f2d-2754-4ed3-86cd-95277a6362ad.png)

Formulario para añadir nuevo producto, completando todos los campos, se crea un nuevo producto y se almacena en la BD en la collection "products". (La imagen debe estar guardada en la carpeta public/img).

Ordenes de compra (/admin/orders): 

![image](https://user-images.githubusercontent.com/114360790/209180247-359cc4e0-cb93-4433-bb97-e65830ac831f.png)

Accediendo a la collection "orders" de la BD se listan las ordenes de compra realizadas hasta el momento. Con el botón "Entregado" de la derecha, se modifica el estado de la orden, de "generada" a "entregada", cuando los productos sean enviados al comprador.

Stock críticos (/admin/critical):

![image](https://user-images.githubusercontent.com/114360790/209180572-a2f332b8-f75d-4b54-8579-bd9ef0769285.png)

Se muestran los artículos con stock menor a 5, y se tiene la opción de reponer stock, actualizando la cantidad de existencias en la BD.

Reponer stock (/admin/restock):

![image](https://user-images.githubusercontent.com/114360790/209180852-5a720cd2-674a-4701-92b7-76acd3846511.png)

Listado de todos los productos cargados, con posibilidad de reponer stock.

![image](https://user-images.githubusercontent.com/114360790/209181082-31071e81-8de9-4e91-ae76-18eff85d6715.png)

Listado de todos los productos cargados, con posiblidad de modificar de manera individual los campos de interés, o eliminar el producto.


