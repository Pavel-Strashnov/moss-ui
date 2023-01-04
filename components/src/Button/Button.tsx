import React  from "react";
import ButtonUnstyled, {buttonUnstyledClasses} from '@mui/base/ButtonUnstyled'
import styled from 'styled-components'

import { Color } from '../Color'
import { Size } from "../Size";

const padding: Record<ButtonSize, string> = {
    'small': `${Size[6]} ${Size[12]}`,
    'medium': `${Size[10]} ${Size[16]}`,
    'large': `${Size[12]} ${Size[24]}`,
}

const StyledButton = styled(ButtonUnstyled)<{
    size: ButtonSize
}>`
    @font-face {
        font-family: 'aeonik_pro';
        src: url(https://assets.website-files.com/5fbe6e809f20545622827be2/5fbe6e809f2054cb05827c0f_AeonikPro-Medium.woff);
        font-weight: 400;
        font-style: normal;
    }

    background-color: ${Color["ui-moss-700"]};
    color: ${Color.white};
    padding: ${props => padding[props.size]};
    border: 0;
    border-radius: ${Size[8]};
    font-family: 'aeonik_pro';

    &:hover {
        background-color: ${Color["ui-moss-800"]};
    }

    &.${buttonUnstyledClasses.active} {
        background-color: ${Color["ui-moss-900"]};
    }

    &.${buttonUnstyledClasses.focusVisible} {
        outline: 4px solid ${Color["gray-150"]};
    }
`
type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonProps = React.PropsWithChildren<{
    size?: ButtonSize
}>

export const Button = ({size = 'medium', children}: ButtonProps) => {
    return <StyledButton type='button' size={size}>{children}</StyledButton>
}