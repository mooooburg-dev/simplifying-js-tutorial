const name = {
  first: "Lemmy",
  last: "kilmister"
};

// function getName({ first, last }) {
//   return `${first} ${last}`;
// };

const getName = ({first, last}) => ({
  fullName: `${first} ${last}`
});

console.log(getName(name)); // Object {fullName: "Lemmy kilmister"}








