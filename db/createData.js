/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable eqeqeq */
const faker = require('faker');
const fs = require('fs');

const file = fs.createWriteStream('/Users/jd/Desktop/test.csv');
// const fs = require("fs");

const ConvertToCSV = (objArray) => {
  const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
  let str = '';

  for (let i = 0; i < array.length; i += 1) {
    let line = '';
    for (const index in array[i]) {
      if (line != '') {
        line += ',';
      }
      line += array[i][index];
    }
    str += (`${line}\r\n`);
  }
  return str;
};

const showcases = [];

for (let i = 0; i < 1000000; i += 1) {
// for (let i = 1000000; i < 2000000; i += 1) {
// for (let i = 2000000; i < 3000000; i += 1) {
// for (let i = 3000000; i < 4000000; i += 1) {
// for (let i = 4000000; i < 5000000; i += 1) {
// for (let i = 5000000; i < 6000000; i += 1) {
// for (let i = 6000000; i < 7000000; i += 1) {
// for (let i = 7000000; i < 8000000; i += 1) {
// for (let i = 8000000; i < 9000000; i += 1) {
// for (let i = 9000000; i < 10000000; i += 1) {
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
// let j = 0;
// let j = 1000000;
// let j = 2000000;
// let j = 3000000;
// let j = 4000000;
// let j = 5000000;
// let j = 6000000;
// let j = 7000000;
// let j = 8000000;
let j = 9000000;
let counter = 0;

// for (let x = 0; x < 5000000; x += 1) {
// for (let x = 5000000; x < 10000000; x += 1) {
// for (let x = 10000000; x < 15000000; x += 1) {
// for (let x = 15000000; x < 20000000; x += 1) {
// for (let x = 20000000; x < 25000000; x += 1) {
// for (let x = 25000000; x < 30000000; x += 1) {
// for (let x = 30000000; x < 35000000; x += 1) {
// for (let x = 35000000; x < 40000000; x += 1) {
// for (let x = 40000000; x < 45000000; x += 1) {
for (let x = 45000000; x < 50000000; x += 1) {
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

// file.write(showcasesCSV);
// let writeOneMillionTimes = (writer, data, encoding, callback) => {
//   let i = 1000000;
//   write();
//   function write() {
//     let ok = true;
//     do {
//       i--;
//       if (i === 0) {
//         // Last time!
//         writer.write(data, encoding, callback);
//       } else {
//         // See if we should continue, or wait.
//         // Don't pass the callback, because we're not done yet.
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       // Had to stop early!
//       // Write some more once it drains.
//       writer.once('drain', write);
//     }
//   }
// };

// writeOneMillionTimes(file, showcasesCSV, 'utf8', (err) => {
//   if (err) { console.log(err); }
//   console.log('csv was finally made!');
// });

// fs.appendFile('./test.csv', showcasesCSV, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

const jsonPictures = JSON.stringify(pictures);
const picturesCSV = ConvertToCSV(jsonPictures);

fs.appendFile('./pic.csv', picturesCSV, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
