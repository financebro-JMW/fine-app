import { User } from '@/server/domain/core'
import { Email } from '@/server/domain/utils'
import { Either, left, right } from '@/shared'
import { InvalidEmailError } from '../errors/email'

export class UserEntity {
  private constructor(public email: Email) {}

  public static register(
    user_data: User,
  ): Either<InvalidEmailError, UserEntity> {
    const email_or_error = Email.register(user_data.email)
    if (email_or_error.isLeft()) return left(email_or_error.value)
    const email: Email = email_or_error.value as Email
    return right(new UserEntity(email))
  }
}
