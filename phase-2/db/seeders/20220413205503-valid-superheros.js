'use strict';

const { Superhero } = require('../models');

// DON'T SPEND ALL YOUR TIME MAKING REAL SEED DATA!!!
// Try to just spend only 5 minutes to create the seed data for testing
// You do not need to put in real superhero data as values! The data values
  // just need to make sense based from the migration and model files.

const validSuperheros = [
  // Your code here
  {
    name:"HELLO",
    alias:"aloha",
    affiliation:"Avengers",
    heightCm:141,
    isMutant:true,
    race:'human',
    universe:"Marvel",
    releaseYear:1939,
  },
  {
    name:"HELLOO",
    alias:"alohaa",
    affiliation:"Avengers",
    heightCm:141,
    isMutant:true,
    race:'human',
    universe:"Marvel",
    releaseYear:1940,
  },
  {
    name:"HELLOOO",
    alias:"alohaaa",
    affiliation:"Avengers",
    heightCm:141,
    isMutant:true,
    race:'human',
    universe:"Marvel",
    releaseYear:1941,
  },
  {
    name:"HELLOOOO",
    alias:"alohaaaa",
    affiliation:"Avengers",
    heightCm:141,
    isMutant:true,
    race:'human',
    universe:"Marvel",
    releaseYear:1942,
  },
  {
    name:"HELLOOOOO",
    alias:"alohaaaaa",
    affiliation:"Avengers",
    heightCm:141,
    isMutant:true,
    race:'human',
    universe:"Marvel",
    releaseYear:1943,
  },
];

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await Superhero.bulkCreate(validSuperheros, {
        validate: true,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    for (let superheroInfo of validSuperheros) {
      try {
        await Superhero.destroy({
          where: superheroInfo
        });
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  },
  // DO NOT MODIFY BELOW (for testing purposes):
  validSuperheros,
};
