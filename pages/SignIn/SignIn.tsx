import React from 'react'
import { css } from 'styled-components'
import Const from 'const'

const { Size, Color } = Const

const SignIn = () => {
  return (
    <div
      css={css` 
        color: ${Color.BRAND.PRIMARY};
        font-size: ${Size.FONT.LARGE};
      `}
    >
      SignIn
    </div>
  )
}

export default SignIn
