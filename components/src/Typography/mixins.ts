import {css} from 'styled-components'

const fontFaces = css`
    @font-face {
        font-family: 'aeonik_pro';
        src: url(https://assets.website-files.com/5fbe6e809f20545622827be2/5fbe6e809f2054cb05827c0f_AeonikPro-Regular.woff);
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'aeonik_pro';
        src: url(https://assets.website-files.com/5fbe6e809f20545622827be2/5fbe6e809f2054cb05827c0f_AeonikPro-Medium.woff);
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'aeonik_pro';
        src: url(https://assets.website-files.com/5fbe6e809f20545622827be2/5fbe6e809f2054cb05827c0f_AeonikPro-Bold.woff);
        font-weight: 700;
        font-style: normal;
    }

    font-family: 'aeonik_pro';
`

export const bodyM = css`
    ${fontFaces}
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.01em;
`

export const bodyMBold = css`
    ${bodyM}
    font-weight: 500;
    letter-spacing: 0;
`

export const bodyL = css`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
`

export const bodyLBold = css`
  ${bodyL}
  font-weight: 500;
  letter-spacing: -0.01em;
`