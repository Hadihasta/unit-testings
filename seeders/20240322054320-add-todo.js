'use strict';

const fs = require("fs")

let data = fs.readFileSync("./todo.json","utf-8")

data = JSON.parse(data).map(element => { 
  return {
    tittle : element.title,
    day : element.day,
    place : element.place,
    createdAt: new Date(),
    updatedAt: new Date()
  }
})

console.log (data)



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    
    await queryInterface.bulkInsert("Todos",data, {})
    
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Todos",data,{})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
