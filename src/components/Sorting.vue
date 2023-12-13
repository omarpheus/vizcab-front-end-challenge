<script setup>
  // NOT COMPLETED

  // We need to have a button that on switch
  // 1. Displays the text according to what we want to sort (carbon or surface)
  // 2. Emits a callback to the parent page/component to that we can call the function to sort the buildings.

  // That is why we will call ref and emit in vue 3.

  // We need a test to make sure that the state is true or false
  
   import { ref, defineEmits } from 'vue'
   const isCarbon = ref({state: true, text: 'Sort by carbon emissions'})
   const emit = defineEmits(['submit'])

  function isCarbon(state) {
    emit('submit', !state)
    return !state
  }
</script>

<template>
  <div>
    <button @click="">{{ isCarbon.text }}</button>
  </div>
</template>