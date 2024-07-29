# Vue indecision-app Chat Yes/No: Un simple chatbot para tomar decisiones

Este proyecto de Vue.js te permite crear un chatbot interactivo que responde a tus preguntas con "Sí" o "No", utilizando imágenes para dar una respuesta visual.

## Características

* **Chat interactivo:**  Pregunta al chatbot cualquier cosa que pueda responderse con "Sí" o "No".
* **Respuestas con imágenes:**  El chatbot responde con imágenes relevantes para representar "Sí" o "No".
* **Desplazamiento suave:**  La ventana de chat se desplaza automáticamente hacia abajo para que no te pierdas ningún mensaje.

## Cómo usar

1. **Clona el repositorio:** `git clone [URL del repositorio]`
2. **Instala las dependencias:** `npm install`
3. **Ejecuta el servidor de desarrollo:** `npm run serve`

## Uso

1. Abre la aplicación en tu navegador.
2. Escribe tu pregunta "Sí/No" en el campo de entrada.
3. Presiona Enter para enviar tu pregunta.
4. El chatbot responderá con una imagen que representa "Sí" o "No".

## Estructura del código

* **`ChatMessages.vue`:** Este componente se encarga de mostrar los mensajes del chat.
    * **`v-for`:** Se utiliza para iterar sobre el arreglo de mensajes (`messages`) y mostrar cada uno en un componente `ChatBubble`.
    * **`ChatBubble.vue`:** Este componente representa un solo mensaje en el chat, mostrando el texto y la imagen (si corresponde).
    * **`watch`:** Se utiliza para observar cambios en el arreglo de mensajes y actualizar el desplazamiento de la ventana de chat para que siempre se muestre el último mensaje.

## Personalización

* **Biblioteca de imágenes:**  Puedes personalizar fácilmente la biblioteca de imágenes utilizada para las respuestas modificando la carpeta `src/assets/images`.
* **Estilo:**  La aplicación utiliza Tailwind CSS para el estilo. Puedes modificar el archivo `src/styles/main.css` para personalizar la apariencia.

## Contribuciones

¡Las contribuciones son bienvenidas! No dudes en enviar solicitudes de extracción para corregir errores, mejorar las funciones o agregar nuevas imágenes.

## Licencia

Este proyecto está licenciado bajo la licencia MIT.


