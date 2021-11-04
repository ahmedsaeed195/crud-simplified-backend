import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Token from './Token'

export default class LoginType extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasMany(() => Token)
  public token: HasMany<typeof Token>

  @column()
  public type: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
