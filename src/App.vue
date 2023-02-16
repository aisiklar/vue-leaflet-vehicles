<script setup>
import { ref, watch, computed, onMounted } from "vue";
import "leaflet/dist/leaflet.css";

//component import
import { LMap, LTileLayer, LCircle } from "@vue-leaflet/vue-leaflet";
//import data from "../../../sumo-simulator/sumo-exercises/samsun-sinopYolu_Demo2/data-default";
import data from "../data";

//reactive
//const latLong = ref([41.36, 36.21]);
const latLong = ref([]);
const circleRadius = ref(50);
const vehicleSpeed = ref("");
const qtyVehiclePoints = ref(0);
const vehiclePoints = ref([]);

const zoom = ref(17);

/*
watch(zoom, (newZoom) => {
  console.log("zoom:", newZoom);
}); */

/* console.log(
  "data",
  data[0].time,
  " ... ",
  data[0].vehicles[0].vehicleID,
  "...",
  data[0].vehicles[0].coords
); */

// log out the vehicles - for debug purposes
/*
for (let index = 0; index < 3; index++) {
  console.log(`"data",
  ${data[index].time}`);
  for (let qty = 1; qty < data[index].vehicles.length; qty++) {
    console.log(
      `id: ${data[index].vehicles[qty].vehicleID},
      coords: ${data[index].vehicles[qty].coords}`
    );
  }
} */

const newCircleRadius = computed(() => {
  console.log("zoom: ", parseInt(zoom.value, 10));
  return parseInt(zoom.value, 10) <= 11
    ? 50
    : parseInt(zoom.value, 10) <= 14
    ? 30
    : 5;
});

console.log("data length: ", data.length);

// stop with :clearTimeout(incrementTime);

const incrementTime = setInterval(getDataByTime, 1000);

let index = 0;
/* function getDataByTime() {
  console.log("time passes", index);
  index += 5;
  if (index >= 15) {
    console.log("index = data.length, stop timing");
    clearTimeout(incrementTime);
  }
} */

function getDataByTime() {
  //console.log("in getDataByTime func.");
  //console.log("index: ", index);
  //console.log(`time: ${data[index].time}`);
  //console.log(`vehicles length: ${data[index].vehicles.length}`);
  qtyVehiclePoints.value = data[index].vehicles.length;
  //console.log("qtyVehiclePoints: ", qtyVehiclePoints.value);
  vehiclePoints.value = data[index].vehicles;
  //console.log("vehiclePoints: ", vehiclePoints.value);
  //console.log(`vehicles: ${data[index].vehicles}`);
  data[index].vehicles.forEach((vehicle) => {
    //console.log("vehicle", vehicle);
    latLong.value = vehicle.coords;
    //console.log("vehicleSpeed: ", vehicle.speed);
    //console.log("type vehicleSpeed: ", typeof vehicle.speed);
  });
  index++;
  if (index == data.length) {
    //console.log("index = data.length, stop timing");
    clearTimeout(incrementTime);
  }
}

// end of script
</script>

<template>
  <div class="body-container">
    <div class="side-bar-container"></div>
    <div class="main-body-container">
      <div class="map-container">
        <l-map ref="map" v-model:zoom="zoom" :center="[41.37835, 36.21848]">
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
          ></l-tile-layer>
          <div v-for="vehicle of vehiclePoints" :key="vehicle.vehicleID">
            <!-- iterable arrays: -->
            <l-circle
              :lat-lng="vehicle.coords"
              :radius="newCircleRadius"
              :color="
                vehicle.speed < 2
                  ? 'red'
                  : vehicle.speed < 12
                  ? 'orange'
                  : 'green'
              "
            />
          </div>
        </l-map>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.body-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
}

.side-bar-container {
  width: 400px;
  border-right: 2px solid aqua;
}

.map-container {
  width: 1200px;
  height: 900px;
}

@media (min-width: 1024px) {
}
</style>
