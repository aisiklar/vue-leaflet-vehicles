let data = [
  {
    time: 1.0,
    vehicles: [
      {
        vehicleID: "veh0",
        coords: [41.3455040557658, 36.238151723895456],
        speed: 0.0,
      },
    ],
  },
  {
    time: 11.0,
    vehicles: [
      {
        vehicleID: "f_0.0",
        coords: [41.37018758467567, 36.22823922202488],
        speed: 0.0,
      },
      {
        vehicleID: "veh0",
        coords: [41.34525404241188, 36.23700809559794],
        speed: 18.224092715699225,
      },
    ],
  },
];

console.log("for in usage: \n");
for (let element in data) {
  console.log("element: ", element);
}

console.log("for of usage: \n");
for (let element of data) {
  console.log("element: ", element);
}

console.log("for of in vehicles usage: \n");
for (let i = 0; i < data.length; i++) {
  console.log("i: ", i);
  for (let element of data[i].vehicles) {
    console.log("element: ", element);
  }
  for (let property in data[i].vehicles[0]) {
    console.log("for vehicles[0], property, ", property);
  }
}

/* let data2 = [1, 2, 3, 4, 5];

for (let i in data2) {
  console.log("i: ", i);
}

for (let i of data2) {
  console.log("i of: ", i);
}
 */
