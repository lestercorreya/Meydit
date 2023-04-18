import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'jobs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("first_name")
      table.string("last_name")
      table.string("phone_number")
      table.string("email_id")
      table.text("address")
      table.integer("post_code")
      table.string("state")
      table.string("type_of_clothing")
      table.text("description")
      table.integer("budget")
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
