import React from 'react'
import styled from 'styled-components'
import { size, Size } from '../Size'

export type StackProps = React.PropsWithChildren<{
    direction?: 'column' | 'row'
    gap?: Size
}>

const StyledDiv = styled.div<StackProps>`
    display: flex;
    flex-direction: ${props => props.direction};
    gap: ${props => props.gap && size[props.gap]};
    align-items: flex-start;
`

export const Stack = ({ direction = 'column', gap, children }: StackProps) => 
    <StyledDiv direction={direction} gap={gap}>{children}</StyledDiv>