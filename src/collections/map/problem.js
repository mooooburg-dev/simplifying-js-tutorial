function addFilters(filters, key, value) {
  filters[key] = value;
}
function deleteFilters(filters, key, value) {
  delete filters[key];
}
function clearFilters(filters) {
  filters = {};
  return filters;
}

let filters = new Map()
  .set("견종", "래브라도레트리버")
  .set("크기", "대형견")
  .set("색상", "갈색");

console.log(filters.get("크기"));
