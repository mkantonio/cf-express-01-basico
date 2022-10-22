"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("tasks", [
      {
        id: 1,
        description: "Continuar con el curso de express",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        description: "Iniciar el curso de AWS",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        description: "Continuar con el curso de angular",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("tasks", null, {});
  },
};
