import { render } from '@testing-library/react'
import React from 'react'
import { expect, test } from 'vitest'
import Main from '../../src/app/page'

test('Renders welcome message', () => {
  const { getByText } = render(<Main />)
  const welcomeMessage = getByText(/Hello World/i)
  expect(welcomeMessage).toBeDefined()
})
