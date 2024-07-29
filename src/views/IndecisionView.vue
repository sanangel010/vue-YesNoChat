<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
    <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
      <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
        <span>Mi esposa</span>
      </div>
  
      <!-- Chat Messages, se envían los mensajes mediante la propiedad reactiva de messages y se envían 
       con ref, eso envíará los valores al componente = ChatMessages.vue  -->
      <ComponenteChat :messages="messages" />    

      <!-- Caja de envío de mensajes -->
      <!-- 
      Forma larga.
      <CajaMensajes @send-message="onMessage($event)" /> -->
      
      <!-- Forma corta, se elimina el: ($event) -->
      <CajaMensajes @send-message="onMessage" />

    </div>
  </template>

<script setup lang="ts">
    import ComponenteChat from '../components/chat/ChatMessages.vue';
    import CajaMensajes from '../components/chat/MessageBox.vue'; 
    import { useChat } from '../composables/useChat';
    // Se obtienen las properties y los methods del composable, basicamente el composable es una
    // archivo del tipo TS.
    const { messages, onMessage} = useChat();
</script>
