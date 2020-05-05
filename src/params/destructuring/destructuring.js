// const landscape = {
//   title: "Landscape",
//   photographer: "Nathan",
//   equipment: "Canon",
//   format: "digital",
//   src: "/landscape-nm.jpg",
//   location: [32.7122222, -103.1405556]
// };

// const landscape = {
//   photographer: 'Nathan',
// };

// const { photographer } = landscape;
// console.log(photographer);  // Nathan

// const landscape = {};
// const { photographer = 'Anonymous', title } = landscape;
// console.log(photographer);  // Anonymous
// console.log(title);         // undefined

// const landscape = {
//   photographer: "Nathan",
//   equipment: "Canon",
//   format: "digital",
// };

// const {
//   photographer,
//   ...additional
// } = landscape;

// console.log(additional);  // {equipment: "Canon", format: "digital"}

// const landscape = {
//   src: '/landscape-nm.jpg',
// };
// const { src: url }  = landscape;

// console.log(src); // Error!
// console.log(url); // '/landscape-nm.jpg'

// const landscape = {
//   location: [32.7122222, -103.1405556],
// }

// const {landscape : [latitude, longitude]} = landscape;

// console.log(latitude);  // 32.7122222
// console.log(longitude); // -103.1405556
