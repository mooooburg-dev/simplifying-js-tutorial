const filters = new Map().set("색상", "검정색").set("견종", "래브라도레트리버");

function checkFilters(filters) {
  for (const entry of filters) {
    console.log(entry);
  }
}

function getAppliedFilters(filters) {
  const applied = [];
  for (const [key, value] of filters) {
    applied.push(`${key}:${value}`);
  }
  return `선택한 조건은 ${applied.join(", ")} 입니다.`;
}

function sortByKey(a, b) {
  return a[0] > b[0] ? 1 : -1;
}

function getSortedAppliedFilters(filters) {
  // const applied = [];
  // for(const [key, value] of [...filters].sort(sortByKey)) {
  //   applied.push(`${key}:${value}`);
  // }
  // return `선택한 조건은 ${applied.join(", ")} 입니다.`;

  const applied = [...filters]
    .sort(sortByKey)
    .map(([key, value]) => {
      return `${key}:${value}`;
    })
    .join(", ");
  return `선택한 조건은 ${applied} 입니다.`;
}

console.log(getSortedAppliedFilters(filters));
