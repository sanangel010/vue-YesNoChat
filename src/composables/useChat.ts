import { ref } from 'vue';
import type { ChatMessage } from '../interfaces/chat-message.interface';
import type { YesNoResponse } from '@/interfaces/yes-no.response';
import { sleep } from '@/helpers/sleep';

export const useChat = () => {

    // Esta era la forma fija de llenar los elementos, se sustituye por la siguiente variable
    // const messages = ref<ChatMessage[]>([
    //     {
    //       id: new Date().getTime() + 5,
    //       message: 'NOOOO !!!',
    //       itsMine: false,
    //       image: 'https://yesno.wtf/assets/no/13-755222c98795431aa2e7d453ab1e75a1.gif',
    //     },
    //     {
    //       id: new Date().getTime(),
    //       message: "'Hola mundo mundial !!''",
    //       itsMine: true,
    //     },
    //     {
    //       id: new Date().getTime() + 1,
    //       message: 'NOOOO !!!',
    //       itsMine: false,
    //       image: 'https://yesno.wtf/assets/no/13-755222c98795431aa2e7d453ab1e75a1.gif',
    //     },
    //     {
    //       id: new Date().getTime() + 2,
    //       message: 'SIIIuuuuuu !!!',
    //       itsMine: true,
    //       image: 'https://yesno.wtf/assets/no/13-755222c98795431aa2e7d453ab1e75a1.gif',
    //     }
    //   ]);

    // Variable del tipo de la interfaz ChatMessage.
    const messages = ref<ChatMessage[]>([]);

    // Se hace la llamada al api de yes no.
    const getHerResponse = async() => {
        const resp = await fetch('https://yesno.wtf/api');
        const data = (await resp.json()) as YesNoResponse;

        return data;
    };

    // función que recibe objeto reactivo, vue va a reaccionar a ese cambio.
    const onMessage = async( text: string ) => {
        // Si no hay texto, finaliza la ejecución.
        if(text.length === 0) return;

          // Objeto reactivo.
          messages.value.push({
              id: new Date().getTime(),
              message: text,
              itsMine: true,
          });

          // Evaluar si temina con un ?, si no finaliza la ejecución.
          if( !text.endsWith('?') ) return;
    
          await sleep(1.5);

          // Se desestructura la respuesta del api, de acuerdo con la forma de la interface yes-no.response.ts
          const {answer, image} = await getHerResponse();

          // Objeto reactivo donde se  envía la imagen y la respuesta del api.          
          messages.value.push({
            id: new Date().getTime(),
            message: answer,
            image: image,
            itsMine: false,
        });
      };




    

    return {
        // Properties
        messages,
        // Methods
        onMessage,
    }
}