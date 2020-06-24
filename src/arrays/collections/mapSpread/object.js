const filters = {
  색상: "검정색",
  견종: "래프라도레트리버"
};

function getAppliedFilters(filters) {
  const keys = Object.keys(filters);
  const applied = [];
  for (const key of keys) {
    applied.push(`${key} : ${filters[key]}`);
  }
  return `선택한 조건은 ${applied.join(", ")} 입니다.`;
}

function getSortedAppliedFilters(filters) {
  const keys = Object.keys(filters);
  keys.sort();
  const applied = [];
  for (const key of keys) {
    applied.push(`${key} : ${filters[key]}`);
  }
  return `선택한 조건은 ${applied.join(", ")} 입니다.`;
}

console.log(getAppliedFilters(filters));
