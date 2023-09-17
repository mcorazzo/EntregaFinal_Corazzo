Documentación del Proyecto

Descripción:
Este proyecto es una aplicación web que permite a los usuarios visualizar detalles de productos y agregarlos a un carrito de compras. La información de los productos se almacena een una base de datos, lo que facilita su mantenimiento y actualización.

Tecnologías Utilizadas:
React: Biblioteca de JavaScript para la construcción de interfaces de usuario.
React Router: Biblioteca para la gestión de rutas en aplicaciones React.
Firebase Firestore (anteriormente): Usado para la persistencia y consulta de datos. Sonner: Biblioteca para mostrar notificaciones toast.
Context API de React: Usado para la gestión del estado global, especialmente para el carrito de compras.

Uso:
La aplicación brinda las siguientes funcionalidades a sus usuarios:

Los usuarios pueden desplazarse y explorar diferentes productos disponibles en la tienda.
Gracias al sistema de rutas implementado con React Router, cada producto puede tener su propia URL única, facilitando la compartición y el acceso directo.
Vista Detallada de Productos:

Al seleccionar un producto en particular, los usuarios son dirigidos a una página de detalles.
Esta vista proporciona información detallada del producto, incluyendo imágenes, descripción, precio y otras características relevantes.
Agregar Productos al Carrito:

Desde la vista detallada, los usuarios tienen la posibilidad de agregar productos al carrito de compras.
Se puede especificar la cantidad de unidades de un producto para agregar al carrito, permitiendo a los usuarios comprar múltiples unidades de un mismo artículo.
Notificaciones Toast:

Durante la interacción con la aplicación, los usuarios reciben notificaciones tipo "toast" que informan sobre acciones específicas.
Por ejemplo, al cargar un producto con éxito, se mostrará una notificación indicando que la acción fue exitosa.
Finalizar Compra:

Una vez que los usuarios hayan agregado todos los productos deseados al carrito, pueden dirigirse a la sección de "checkout" o finalización de compra.
En esta sección, se les pedirá que completen un formulario con información relevante para la entrega y el pago.
Tras enviar el formulario, se iniciará el proceso de compra y se notificará al usuario sobre el estado de su pedido.
Vista de Carrito:

Los usuarios pueden ver todos los productos agregados al carrito en una vista consolidada.
Aquí pueden revisar los productos seleccionados, la cantidad de cada uno, el precio total y modificar la cantidad o eliminar productos según lo deseen.


Instalación y Configuración:

Clonar el Repositorio:
git clone [URL_DEL_REPOSITORIO]

Navegar al directorio del proyecto:
cd [NOMBRE_DEL_DIRECTORIO]

Instalar las dependencias:
Utilizando npm:
npm install

Ejecutar la aplicación:
npm start
Esto iniciará la aplicación en http://localhost:3000/.


Instalación de Firebase:
Para agregar Firebase a tu proyecto de JavaScript/React, primero debes instalar el SDK de Firebase:

npm install firebase

Configuración de Firebase en la Consola:
Ve a Firebase Console.
Haz clic en "Agregar proyecto" y sigue los pasos para crear un nuevo proyecto.
Una vez que hayas creado tu proyecto, selecciona la opción "Agregar Firebase a tu aplicación web".
Te proporcionarán un fragmento de código con la configuración de tu aplicación. Se 
verá algo así:

var firebaseConfig = {
  apiKey: "tu_api_key",
  authDomain: "tu_proyecto.firebaseapp.com",
  projectId: "tu_proyecto",
  storageBucket: "tu_proyecto.appspot.com",
  messagingSenderId: "tu_messaging_sender_id",
  appId: "tu_app_id",
  measurementId: "G-tu_measurement_id"
};

Integración con React:
Crea un nuevo archivo llamado firebase.js en tu proyecto.
Importa firebase y luego inicializa firebase con la configuración que obtuviste en el paso anterior:

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // Tu configuración aquí
};

const app = initializeApp(firebaseConfig);
Exporta las funciones o características específicas que desees utilizar en tu aplicación, como autenticación, base de datos, almacenamiento, etc.
Por ejemplo, para Firestore (base de datos):

import { getFirestore } from "firebase/firestore";
const db = getFirestore();
export { db };

Uso en tu Aplicación React:

Ahora puedes importar y usar Firebase en cualquier componente de React:

import { db } from "./firebase";
Y luego usar db para interactuar con Firestore, o cualquier otro servicio de Firebase que hayas configurado.

