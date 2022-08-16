'use strict'

// Have Empty Tables Before Running

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const bandSaved = await queryInterface.bulkInsert('bands', [{
      name: 'The Useful Books',
      genre: 'Rock',
      available_start_time: "1999-01-17T04:33:12.000Z",
      end_time: "3999-01-17T04:33:12.000Z"
    }])

    const eventSaved = await queryInterface.bulkInsert('events', [{
      name: "Lolla",
      date: "2022-01-17T04:33:12.000Z",
      start_time: "2022-01-17T01:33:12.000Z",
      end_time: "2022-01-17T20:33:12.000Z"
    }])

    const meetGreetSaved = await queryInterface.bulkInsert('meet_greets', [{
      event_id: 1,
      band_id: 1,
      meet_start_time: "2022-01-17T05:33:12.000Z",
      meet_end_time: "2022-01-17T06:33:12.000Z"
    }])

    const stageSaved = await queryInterface.bulkInsert('stages', [{
      stage_name: "Main Stage"
    }])

    const setTimeSaved = await queryInterface.bulkInsert('set_times', [{
      event_id: 1,
      stage_id: 1,
      band_id: 1,
      start_time: "2022-01-17T15:33:12.000Z",
      end_time: "2022-01-17T16:33:12.000Z"
    }])

    const stageEventSaved = await queryInterface.bulkInsert('stage_events', [{
      stage_id: 1,
      event_id: 1
    }])
    

  },
  
  down: async (queryInterface, Sequelize) => {
    // note that this deletes ALL data from the bands table
    await queryInterface.bulkDelete('bands', null, {})
  }
}
