const landscape = {
  title: "Landscape",
  photographer: "Nathan",
  equipment: "Canon",
  format: "digital",
  src: "/landscape-nm.jpg",
  location: [32.7122222, -103.1405556]
};

function displayPhoto(photo) {
  const {
    title,
    photographer = "Anonymous",
    location: [latitude, longitude],
    src: url,
    ...other
  } = photo;

  const additional = Object.keys(other).map(key => `${key}:${other[key]}`);
  return `
    <img alt="${title} 사진 ${photographer} 촬영" src="${url}" />
    <div>${title}</div>
    <div>${photographer}</div>
    <div>위도: ${latitude}</div>
    <div>경도: ${longitude}</div>
    <div>${additional}</div>
  `;
}

console.log(displayPhoto(landscape));


