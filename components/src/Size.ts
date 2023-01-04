import {css} from 'styled-components'

export const size = {
    '0': '0',
    '6': '6px',
    '8': '8px',
    '10': '10px',
    '12': '12px',
    '16': '16px',
    '24': '24px',
} as const

export type Size = keyof typeof size

export type MarginSize = Size | 'auto'

export type MarginProps = { 
    mt?: MarginSize
    mb?: MarginSize
    ml?: MarginSize
    mr?: MarginSize
    mv?: MarginSize
    mh?: MarginSize
    m?: MarginSize
}

const getMarginSize = (marginSize?: MarginSize) => {
    switch (marginSize) {
        case 'auto':
        case undefined:
            return marginSize
        default:
            return size[marginSize]
    }
}

export const mixinMargin = (props: MarginProps) => css`
    margin-top: ${getMarginSize(props.mt) || getMarginSize(props.mv) || getMarginSize(props.m)}};
    margin-bottom: ${getMarginSize(props.mb) || getMarginSize(props.mv) || getMarginSize(props.m)}};
    margin-left: ${getMarginSize(props.ml) || getMarginSize(props.mh) || getMarginSize(props.m)}};
    margin-right: ${getMarginSize(props.mr) || getMarginSize(props.mh) || getMarginSize(props.m)}};
`