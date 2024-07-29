<template>
    <!-- Example Message -->
    <div v-if="itsMine" class="flex justify-end">
        <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
            {{ message }}
        </div>
    </div>

    <!-- Example Received Message -->
    <div v-else class="flex">
        <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
            <span class="capitalize"> {{ message }} </span>
            <img v-if="image" :src="image" alt="YesNoImage" class="w-52 h-52 object-cover rounded-md">
        </div>
    </div>
</template>

<script setup lang="ts">
interface Props {
    message: string;
    itsMine: boolean;
    image?: string;
}

// Con definir esta propiedad YA es posible recibir los valores en el formulario. de manera directa, es decir habilita las properties en el componente.
defineProps<Props>();

</script>