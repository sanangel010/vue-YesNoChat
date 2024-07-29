<template>
     <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
          <!-- Messages go here -->

          <!-- Para obtener la información que se recibe mediante el arreglo de ChatMessage, se usa el v-for -->
         
          <ChatBubble 
            v-for="message in messages"
            :key="message.id"
            v-bind="message"
          />

          <!-- 
          
          Forma larga, pero como se esta recibiendo lo mismo en la interface y en el props, se
          puede hacer solo envíando el v-bind

          <ChatBubble 
            v-for="message in messages"
            :key="message.id"
            :its-mine="message.itsMine"          
            :message="message.message" 
            :image="message.image" 
          /> -->
          <!-- <ChatBubble :its-mine="false" :messages="'Propiedad declarada en false, mismas consideraciones'" />
          <ChatBubble :its-mine="false" :messages="'NO'" 
          :image="'https://yesno.wtf/assets/no/13-755222c98795431aa2e7d453ab1e75a1.gif'" /> -->

        </div>
      </div>  
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';
  import type { ChatMessage } from '@/interfaces/chat-message.interface';
  import ChatBubble from './ChatBubble.vue';

  interface Props {
    messages: ChatMessage[];
  }

  const { messages } = defineProps<Props>();

  const chatRef = ref<HTMLDivElement | null>(null);

  // watch permite estar observando el comportamiento de un elemento y permite actuar
  // de acuerdo a la necesidad en caso de haber cambios.
  watch(messages, () => {
    // Se incorpora un timeout, para darle tiempo al renderizado 
    // y se puedan realizar los calculos adecuados de los tamaños.
    setTimeout(() => {
      chatRef.value?.scrollTo({
        top: chatRef.value?.scrollHeight,
        behavior: 'smooth',
      });
    }, 100);
  });
</script>