import React from 'react'
import styled from 'styled-components'
import { mixinMargin, MarginSize, size, Size } from '../Size'

export type StackProps = React.PropsWithChildren<{
    direction?: 'column' | 'row'
    gap?: Size
    mt?: MarginSize
    mb?: MarginSize
}>

const StyledFlex = styled.div<StackProps>`
    display: flex;
    flex-direction: ${props => props.direction};
    gap: ${props => props.gap && size[props.gap]};
    align-items: flex-start;
    ${props => mixinMargin(props)}
`

export const Stack = ({ direction = 'column', gap, mt, mb, children }: StackProps) => 
    <StyledFlex direction={direction} gap={gap} mt={mt} mb={mb}>{children}</StyledFlex>