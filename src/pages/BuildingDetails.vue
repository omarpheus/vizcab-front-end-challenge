<script setup>
  import { reactive, onBeforeMount } from 'vue'
  // We need to retrieve the data from the backend.
  // Best option is to store data in localStorage of the browser.
  // (localStorage.setItem("buildingsData", buildings.data) -> localStorage.getItem("buildingsData"))
  // Then we search for the right building with the id
  // We can find the route.params.idBuilding
  // Or we can create a store JS file
  // Or the backend must have an additionnal route with the id of the building

  // We need a test to make sure that the object passed in props respects the right data structure for the building

</script>

<template>
  <div>
    Building details page
  </div>
</template>