const faker = require('faker');
const fs = require('fs');

// const fs = require("fs");

const ConvertToCSV = (objArray) => {
  let array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
  let str = '';

  for (let i = 0; i < array.length; i += 1) {
    let line = '';
    for (const index in array[i]) {
      if (line != '') line += ',';
      line += array[i][index];
    }
    str += (`${line}\r\n`);
  }
  return str;
};

const showcases = [];

for (let i = 0; i < 1000000; i += 1) {
  const showcase = {
    showcase_id: i,
    attractionTitle: faker.commerce.productName(),
    city: faker.address.city(),
    reviews: faker.random.number({ min: 10, max: 3000 }),
    attractionRank: faker.random.number({ min: 1, max: 34 }),
    totalRankings: faker.random.number({ min: 35, max: 101 }),
    ratio: faker.random.number({ min: 1, max: 34 }) / faker.random.number({ min: 35, max: 101 }),
    attractionType: faker.name.jobType(),
    travelersChoiceAward: true,
    likedStatus: true,
    ticketPrice: faker.random.number({ min: 0, max: 500 }),
    averageRating: faker.random.number({ min: 0, max: 25 }) / 5,
    description: faker.lorem.sentence(),
    isOpen: true,
    suggestedDuration: faker.random.number({ min: 0, max: 200 }),
    address: faker.address.streetAddress(),
  };
  showcases.push(showcase);
}

const pictures = [];
let j = 0;
let counter = 0;

for (let x = 0; x < 5000000; x += 1) {
  const picture = {
    picture_id: x,
    pic: faker.image.city(),
    showcase_id: j,
  };

  if (counter === 5) {
    j += 1;
    counter = 0;
  }
  counter += 1;
  pictures.push(picture);
}

// const jsonShowcases = JSON.stringify(showcases);
// const showcasesCSV = ConvertToCSV(jsonShowcases);

const jsonPictures = JSON.stringify(pictures);
const picturesCSV = ConvertToCSV(jsonPictures);

// fs.writeFile('./test.csv', showcasesCSV, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

fs.writeFile('./pic.csv', picturesCSV, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
