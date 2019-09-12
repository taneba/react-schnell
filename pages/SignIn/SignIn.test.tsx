import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import SignIn from './SignIn'

describe('SignIn', () => {
  it('Do something', () => {
    const { getByText } = render(<SignIn />)
    expect(getByText('SignIn')).toBeInTheDocument()
  })
})