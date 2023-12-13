<script setup>
  import { reactive, onBeforeMount } from 'vue'
  import SortingVue from '../components/Sorting.vue';

  const buildings = reactive({data: [], key: 0}) // reactive component for the list of buildings

  onBeforeMount(() => {
    // we fetch data to the backend
    fetch(
      `http://localhost:3500`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    .then(async (response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      buildings.data = await response.json()
      // Now sort the buildings according to their surface or carbon emissions
      // ...
    })
    .catch((error) => {
      console.error('Error:', error)
    })
  })

</script>

<template>
  <div>
    <div><SortingVue /></div>
    <div :key="buildings.key">
      <div v-for="building in buildings.data.data" :key="building.id">
        <div :id="`building-${building.id}`" class="building">
          <div class="building-name">{{ building.name }}</div>
          <div class="building-address-street">{{ building.address }}</div>
          <div class="building-address-postcode-city">
            <span class="building-address-postcode">{{ building.postcode }}</span> <span class="building-address-city">{{ building.city }}</span>
          </div>
          <div class="building-details"><router-link :to="`/buildings/${building.id}`">Details</router-link></div>
        </div>
      </div>
    </div>
  </div>
</template>