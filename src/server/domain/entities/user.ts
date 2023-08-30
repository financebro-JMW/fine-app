import { User } from '@/server/domain/core'
import { Email } from '@/server/domain/utils'
import { Either, left, right } from '@/shared'

import { InvalidEmailError } from '../errors/email'

export class UserEntity {
  private constructor(public name: Name, public email: Email, public uri: Uri) { }

  public static register(
    userData: User,
  ): Either<InvalidEmailError, UserEntity> {
    const nameOrError = Name.register(userData.name)
    const emailOrError = Email.register(userData.email)
    const uriOrError = Uri.register(userData.uri)
    const accessTokenOrError = AccessToken.register(userData.accessToken)
    const refreshTokenOrError = RefreshToken.register(userData.refreshToken)
    const profileOrError = Profile.register(userData.profile)
    const messageOrError = Message.register(userData.message)
    const readedOrError = Readed.register(userData.readed)
    const timestampOrError = Timestamp.register(userData.timestamp)
    const notificationOrError = Notification.register(userData.notification)
    if (nameOrError.isLeft()) return left(nameOrError.value)
    if (emailOrError.isLeft()) return left(emailOrError.value)
    if (uriOrError.isLeft()) return left(uriOrError.value)
    if (accessTokenOrError.isLeft()) return left(accessTokenOrError.value)
    if (refreshTokenOrError.isLeft()) return left(refreshTokenOrError.value)
    if (profileOrError.isLeft()) return left(profileOrError.value)
    if (messageOrError.isLeft()) return left(messageOrError.value)
    if (readedOrError.isLeft()) return left(readedOrError.value)
    if (timestamp.isLeft()) return left(timestamp.value)
    if (notificationOrError.isLeft()) return left(notificationOrError.value)
    const name: Name = nameOrError.value as Name
    const email: Email = emailOrError.value as Email
    const uri: Uri = uriOrError.value as Uri
    const accessToken: AccessToken = accessTokenOrError.value as AccessToken
    const refreshToken: RefreshToken = refreshTokenOrError.value as RefreshToken
    const profile: Profile = profileOrError.value as Profile
    const message: Message = messageOrError.value as Message
    const readed: Readed = readedOrError.value as Readed
    const timestamp: Timestamp = timestampOrError.value as Timestamp
    const notification: Notification = notificationOrError.value as Notification        
    return right(new UserEntity(name, email, uri, accessToken, refreshToken, profile, message, readed, timestamp, notification))
  }
}

