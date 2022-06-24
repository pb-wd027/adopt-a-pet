const express = require("express");
const app = express();
const pets = require("./helper");

// "commonjs" style, original nodeJS
// const x = require("y")

// "module" style, modern javascript
// import x from "y"

app.get("/", (req, res) =>
  res.send(`
    <h1>Adopt a Pet!</h1>
    <p>Browse through the links below to find your new furry friend:</p>
    <ul>
        <li><a href="/about">about</a></li>
        <li><a href="/animals/dogs">Dogs</a></li>
        <li><a href="/animals/cats">Cats</a></li>
        <li><a href="/animals/rabbits">Rabbits</a></li>
    </ul>
`)
);

app.get("/animals/:pet_type", (req, res) =>
  res.send(`
    <h1>list of ${req.params.pet_type}</h1>
    <ul>
        ${pets[req.params.pet_type]
          .map(
            (pet, index) =>
              `<li><a href="${req.params.pet_type}/${index}">${pet.name}</a></li>`
          )
          .join("")}
    </ul>
  `)
);

app.get("/animals/:pet_type/:pet_id", (req, res) => {
  const petCategory = pets[req.params.pet_type];
  const pet = petCategory[req.params.pet_id];

  console.log(pet);
  res.send(`
          <h1>${pet.name}</h1>
          <img src="${pet.url}"/>
          <p>${pet.description}</p>
          <ul>
              <li>age: ${pet.age}</li>
              <li>breed: ${pet.breed}</li>
          </ul>
    `);
});

app.get("/pet/:pet_name", (req, res) => {
  const arrayOfArrays = Object.values(pets);
  const oneArrayOfPets = arrayOfArrays.flat(1);
  const pet = oneArrayOfPets.find((pet) => pet.name === req.params.pet_name);
  res.send(`
          <h1>${pet.name}</h1>
          <img src="${pet.url}"/>
          <p>${pet.description}</p>
          <ul>
              <li>age: ${pet.age}</li>
              <li>breed: ${pet.breed}</li>
          </ul>
    `);
});

app.listen(3000, () => console.log("started listening on port 3000"));

// dynamic object key access
// const key = "z";

// const obj = {
//   x: 10,
//   y: 20,
//   z: 30,
// };

// console.log(obj.x);

// console.log(obj[pet_type]);
