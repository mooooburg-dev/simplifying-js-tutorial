const band = [
  {
    name: "corbett",
    instrument: "guitar"
  },
  {
    name: "evan",
    instrument: "guitar"
  },
  {
    name: "sean",
    instrument: "bass"
  },
  {
    name: "brett",
    instrument: "drums"
  }
];

function getInstrument(member) {
  return member.instrument;
}

const instruments = band.map(getInstrument);

const instruments = band.map(member => member.instrument);
