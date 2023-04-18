import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Job extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public firstName: string
  
  @column()
  public lastName: string

  @column()
  public phoneNumber: string

  @column()
  public emailId: string

  @column()
  public address: string

  @column()
  public postCode: number

  @column()
  public state: string

  @column()
  public typeOfClothing: string

  @column()
  public description: string

  @column()
  public budget: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
