# EcommerceMole
## Descripcion:
###  Dicho proyecto fue creado con el proposito  de simular un carrito de compra de computadoras y celulares.
____

## Lenguajes utilizados: ##
- HTML
- CSS
- Bootstrap
- ReactJS
- Firebase
____

## Componentes: ##

__- App.js__  
__- cart.js__  
__- cartContext.js__  
__- cartWidget.js__  
__- item.js__  
__- itemCount.js__  
__- itemDetail.js__  
__- itemDetalContainer.js__  
__- itemList.js__  
__- itemListContainer.js__  
__- loader.js__  
__- Navbar.js__  
__- notifications.js__  
__- signIn.js__  
__- signUp.js__

____
  
## Descripcion de las funcionalidades de cada componente: ##

### __App__: Componente principal del proyecto. Su funcionalidad es la de juntar la funcionalidad del resto de los componentes para que la aplicacion funcione como aplicacion de una sola pagina.

### __Navbar__: Encargado de la navegacion de la aplicacion. mapea las categorias de los productos traidas de firebase y contiene los enlaces a /category por los cuales los productos son mapeados y mostrados segun la categoria a la que pertenecen. Ademas contiene los enlaces a los componentes singIn.js y signUp.js y  el icono del carrito de compra que es un enlace al componente cart.js y contiene el numero de productos agregados al carrito por el usuario.

### __signIn__: Contiene la vista del formulario para que el usuario registrado ingrese con sus datos a la aplicacion.

### __signUp__: Contiene la vista del formulario para que el usuario registre sus datos en la aplicacion.

### __itemListContainer__: La funcionalidad de este  componente es la de mostrar los productos traida de firebase, ya sea todos los productos o segun la categoria elegida en el Navbar.js. Toma la categoria por parametros y hace una consulta a la base de datos igualando la categoria traida por parametros con las categorias guardadas en firebase. En el caso de no haber un parametro de categoria este trae todos los productos de firebase y manda esta informacion al componente itemList.js mediante un estado llamado products donde es guardada toda la informacion obtenida de la base de datos de firebase.

### __itemList__: Recibe el estado de los productos enviados por itemListContainer y mapea los datos con el componente item.

### __item__: Es el componente encargado de mostrar la vista de cada uno de los productos por su id.

### __itemDetailContainer__: manda a itemDetail todos los datos del producto seleccionado buscandolo con el id obtenido por parametro y comparandolo con los ids de la tabla 'products' de la base de datos de firebase.

### __itemDetail__: muestra los detalles del producto y un boton (o input) para agregar la cantidad del producto que el usuario quiera ordenar. Contiene las siguientes funcionalidades:

#### -__increment__: suma la cantidad de productos a agregar al carrito.

#### -__decrement__: resta la cantidad de productos a agregar al carrito.

#### -__ItemDetail__ -> handleAdd: agrega la cantidad del producto al estado 'quantity' y 'toCart', calcula el total y crea el objeto 'productObj' con los datos obtenidos por props(id, name, price, quantity, img, total).

#### -__ItemDetail__ -> addItem: muestra la notificacion del item agregado con su nombre y cantidad ordenada.

### __cartContext__: Es el componente que contiene el contexto del estado cart y de las siguientes funcionalidades:

#### - __funcion addItem__ para añadir las caracteristicas de un producto (id, nombre, imagen, stock, precio) al estado cart.

#### - __funcion getQuantity__ para agregarle la cantidad de productos pedidos por el usuario a la variable count. Esto lo hace mediante el recorrido de todos los datos de cada producto obteniendo solo la cantidad de estos y sumandolas a count.

#### - __isInCart__ trae los datos del producto que coincida con el id mandado por parametro con el id del filtro de cart.

#### - __clearCart__ limpia todos los productos agregados al carrito.

#### -__removeItem__ filtra todos los elementos que no coincidan con el id del elemento mandado por props y los setea dentro del estado cart descartando asi el unico elemento que coincida con el id del filtrado.

#### -__getTotal__ calcula el total de todos los productos agregados al carrito mediante el calculo de los precios de todos los productos multiplicados por la cantidad de cada uno.

### __cartWidget__ muestra en el icono de la navegacion la cantidad de productos agregados al carrito. 

### __cart__: muestra los productos agregados al carrito y contiene la funcion 'createOrder', 'clearCart' y 'removeItem'.

#### -__createOrder__ busca por sus ids los productos agregados al carrito que coincidan con los ids de los productos guardados en la tabla 'products' de la base de datos de firebase para mostrar sus datos (name, price, stock, img, total) y actualiza la tabla 'orders' con los datos obtenidos de los productos y generando un id unico de compra con los datos del usuario que creo la orden. En caso de no haber productos se muestra un enlace para volver a la lista de estos.

#### -__createOrder__ elimina todos los productos agregados al carrito.

#### -__removeItem__ elimina unicamente el item seleccionado buscandolo por su id.

### __notifications__: Componente encargado de mostrar la notificacion del nombre del producto seleccionado y la cantidad agregada de este al carrito. 

### __services__: En este componente esta el codigo y las variables necesarias para poder conectar el resto de los componentes a la Base de datos creada en firestore y poder trabajar con esta.

### __loader__: Su funcionalidad es de mostrar la vista de carga cuando se cambia de rutas en la aplicacion (solo en caso de demora).

### __asyncmock__: Componente utilizado como simulador de base de datos para la aplicacion en fase de prueba (actualmente no cumple ninguna funcionalidad).
___
## Con esto concluye el markdown del proyecto ecommerceMole.




