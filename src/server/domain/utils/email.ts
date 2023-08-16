import { InvalidEmailError } from '@/server/domain/errors'
import { Either, left, right } from '@/shared'

export class Email {
  public readonly value: string
  private constructor(email: string) {
    this.value = email
  }

  public static register(email: string): Either<InvalidEmailError, Email> {
    if (!Email.validator(email)) {
      return left(new InvalidEmailError(email))
    }
    return right(new Email(email))
  }

  public static validator(email: string): boolean {
    if (!email) return false
    if (email.trim().length < 2 || email.trim().length > 50) {
      return false
    }
    return true
  }
}
