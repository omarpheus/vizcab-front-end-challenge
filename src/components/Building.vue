<script setup>
  // We need a test to make sure that the object passed in props respects the right data structure for the building
  defineProps({
    building: Object
  })
</script>

<template>
  <div>
    <div :id="`building-${building.id}`" class="building">
      <div class="building-name">{{ building.name }}</div>
      <div class="building-address-street">{{ building.address }}</div>
      <div class="building-address-postcode-city">
        <span class="building-address-postcode">{{ building.postcode }}</span> <span class="building-address-city">{{ building.city }}</span>
      </div>
      <div class="building-details"><router-link :to="`/buildings/${building.id}`">Details</router-link></div>
    </div>
  </div>
</template>

<script setup>
// We can also use grid-template to position the building details links
.building-details {
  background-color: #333333;
  color: #d5ddf0;

}
</script>