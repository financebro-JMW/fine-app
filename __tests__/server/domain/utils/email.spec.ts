import { expect, it } from 'vitest'
import { Email } from '../../../../src/server/domain/utils'

it('Should bu return true', () => {
  const email_valid = Email.register('email@example.com')
  expect(email_valid.isRight()).toBe(true)
})