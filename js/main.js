function strlenght(str, maxlength) {
  return str === maxlength ? true : false;
}

const ID = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
];
const URl = [
  "photo/1.jpg",
  "photo/2.jpg",
  "photo/3.jpg",
  "photo/4.jpg",
  "photo/5.jpg",
  "photo/6.jpg",
  "photo/7.jpg",
  "photo/8.jpg",
  "photo/9.jpg",
  "photo/10.jpg",
  "photo/11.jpg",
  "photo/12.jpg",
  "photo/13.jpg",
  "photo/14.jpg",
  "photo/15.jpg",
  "photo/16.jpg",
  "photo/17.jpg",
  "photo/18.jpg",
  "photo/19.jpg",
  "photo/20.jpg",
  "photo/21.jpg",
  "photo/22.jpg",
  "photo/23.jpg",
  "photo/24.jpg",
  "photo/25.jpg",
];
const DESCRIPTION = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
];

const LIKES = [
  "15",
  "25",
  "35",
  "45",
  "55",
  "65",
  "75",
  "85",
  "95",
  "19",
  "19",
  "19",
  "19",
  "19",
  "150",
  "160",
  "170",
  "180",
  "190",
  "200",
  "90",
  "40",
  "60",
  "70",
  "90",
];

const COMMENTS = [
  "15",
  "25",
  "35",
  "45",
  "55",
  "65",
  "75",
  "85",
  "95",
  "19",
  "19",
  "19",
  "19",
  "19",
  "150",
  "160",
  "170",
  "180",
  "190",
  "200",
  "90",
  "40",
  "60",
  "70",
  "90",
];

const creatPhoto_count = 25;

const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const getRandomArrayElement = (elements) =>
  elements[getRandomPositiveInteger(0, elements.length - 1)];

// const creatPhoto = () => {
//   return{
//     id: getRandomArrayElement(ID),
//     url: getRandomArrayElement(URl),
//     description: getRandomArrayElement(DESCRIPTION),
//     likes: getRandomArrayElement(LIKES),
//     comments: getRandomArrayElement(COMMENTS),
//   }
// };

function geturl(i) {
  return `photo/${i + 1}.jpg`;
}
const Photo = new Array(25).fill(null).map((_, i) => ({
  id: i + 1,
  url: geturl(i),
  description: i + 1,
  likes: getRandomArrayElement(LIKES),
  comments: getRandomArrayElement(COMMENTS),
}));

console.log(Photo);
