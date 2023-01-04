import React from 'react'
import styled from 'styled-components'
import { MarginSize, size, Size } from '../Size'

export type StackProps = React.PropsWithChildren<{
    direction?: 'column' | 'row'
    gap?: Size
    mt?: MarginSize
}>

const getMarginSize = (marginSize?: MarginSize) => {
    switch (marginSize) {
        case 'auto':
        case undefined:
            return marginSize
        default:
            return size[marginSize]
    }
}

const StyledDiv = styled.div<StackProps>`
    display: flex;
    flex-direction: ${props => props.direction};
    gap: ${props => props.gap && size[props.gap]};
    align-items: flex-start;
    margin-top: ${props => getMarginSize(props.mt)};
    
`

export const Stack = ({ direction = 'column', gap, mt, children }: StackProps) => 
    <StyledDiv direction={direction} gap={gap} mt={mt}>{children}</StyledDiv>