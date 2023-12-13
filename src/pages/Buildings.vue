<script setup>
  import { reactive, onBeforeMount } from 'vue'
  // import SortingVue from '../components/Sorting.vue';
  import Building from '../components/Building.vue';

  const buildings = reactive({data: [], key: 0}) // reactive component for the list of buildings

  function sortBuildings(buildingsData, isCarbon) {
    // Buildings data is expected to be an array of objects of buildings
    // isCarbon is expected to be a boolean. When true, we sort by carbon emissions. When false, we sort by surface
    // A test may be needed here
    
    if (isCarbon === true) {
      return buildingsData.sort((a, b) => {
        return a.carbon_emission - b.carbon_emission
      })
    } else {
      return buildingsData.sort((a, b) => {
        return a.surface - b.surface
      })
    }
    // We may need buildings.key++ to rerender the component
  }

  onBeforeMount(() => {
    // we fetch data to the backend
    fetch(
      `http://localhost:3500`, { // We may improve the code by passing http://localhost:3500 to an .env variable.
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
      sortBuildings(buildings.data.data, true) // sorted by carbon emissions
    })
    .catch((error) => {
      console.error('Error:', error)
    })
  })

</script>

<template>
  <div>
    <div>
      <div><button>Sorting button that is not yet completed</button></div>
      <!-- <SortingVue /> -->
       <!--
        needs a callback to know whether the page is sorted by carbon or surface
        When the button is switched, we will call a function that will sort the object "buildings"
        The callback will trigger the function sortBuildings with a parameter true or false
      -->
    </div>
    <div class="buildings-list" :key="buildings.key">
      <div class="building-component" :id="`building-component-${building.id}`" v-for="building in buildings.data.data" :key="building.id">
        <!--
          To display the buildings by batches of 10, we need to replace the array of buildings.data.data with an array of the 1st 10 buildings.
          The next 10 would be retrieved from localStorage when we click on the pagination buttons.
          For example, when I click on 3, I will retrieved the buildings with the index 30-39
        -->

        <Building :building="building" />
      </div>
    </div>
  </div>
</template>

<style scoped>


.buildings-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem
}
.building-component {
  background-color: #80a1e9;
  color: #333333;
}

@media screen and (max-width: 768px) {
  .buildings-list{
    grid-template-columns: 1fr;
  }
}

</style>