'use strict'

const Schema = use('Schema')

class ArtistsSchema extends Schema {
  up () {
    this.create('artists', (table) => {
      table.increments()
      table.string('name', 200).defaultTo('No name provided').notNullable()
      table.string('city', 200).defaultTo('No city provided').notNullable()
      table.string('genre', 200).defaultTo('No genre provided').notNullable()
      table.integer('albums').defaultTo(0).unsigned().notNullable()
      table.boolean('is_alive').defaultTo(true).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('artists')
  }
}

module.exports = ArtistsSchema
