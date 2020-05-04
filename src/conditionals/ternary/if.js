let title = "과장";
// let permissions;

// if (title === "과장") {
//   permissions = ["근로시간", "수당"];
// } else {
//   permissions = ["근로시간"];
// }

const permissions = title === "과장" ? ["근로시간", "수당"] : ["근로시간"];

console.log(permissions);
