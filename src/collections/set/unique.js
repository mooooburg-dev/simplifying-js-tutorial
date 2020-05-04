const dogs = [
  {
    이름: "맥스",
    크기: "소형견",
    견종: "보스턴테리어",
    색상: "검정색"
  },
  {
    이름: "도니",
    크기: "대형견",
    견종: "래브라도레트리버",
    색상: "검정색"
  },
  {
    이름: "섀도",
    크기: "중형견",
    견종: "래프라도레트리버",
    색상: "갈색"
  }
];

function getColors(dogs) {
  return dogs.map(dog => dog["색상"]);
}

// function getUnique(attributes) {
//   const unique = [];
//   for (const attribute of attributes) {
//     if (!unique.includes(attribute)) {
//       unique.push(attribute);
//     }
//   }
//   return unique;
// }

function getUnique(attributes) {
  return [...new Set(attributes)];
}

// getColors로 색상만을 가져온 후
// getUnique 함수로 고유 색상만 배열로 담는 두가지 함수를 아래 함수로 통합 할 수 있더ㅏ

function getUniqueColors(dogs) {
  return [...dogs.reduce((colors, { 색상 }) => colors.add(색상), new Set())];
}

console.log(getUniqueColors(dogs));
