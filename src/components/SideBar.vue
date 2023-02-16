<script setup>
import { ref } from "vue";

const simType = ref("sensor");

const selectSimType = (event) => {
  console.log("button event:", event);
  console.log("name:", event.target.name);
  switch (event.target.name) {
    case "statik":
      simType.value = "statik";
      break;
    case "adaptif":
      simType.value = "adaptif";
      break;
    case "sensor":
      simType.value = "sensor";
      break;
    default:
      simType.value = "sensor";
      break;
  }
};
</script>

<template>
  <div class="sidebar-container">
    <div class="sim-select-container">
      <p>Lütfen Simülasyon Tipini Seçin</p>
      <div class="sim-select">
        <button
          :class="simType == 'statik' ? 'button selected' : 'button'"
          @click="selectSimType"
          name="statik"
        >
          Statik Işık
        </button>
        <button
          :class="simType == 'adaptif' ? 'button selected' : 'button'"
          @click="selectSimType"
          name="adaptif"
        >
          Adaptif Işık
        </button>
        <button
          :class="simType == 'sensor' ? 'button selected' : 'button'"
          @click="selectSimType"
          name="sensor"
        >
          Sensörlü Kontrol
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar-container {
  font-size: 1.6rem;
  .sim-select-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .sim-select {
      margin: 1rem auto;
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      .button {
        width: 150px;
        font-size: 1.2rem;
        margin: 0 2px;

        &:hover {
          cursor: pointer;
        }

        &.selected {
          background-color: aqua;
        }
      }
    }
  }
}
</style>
