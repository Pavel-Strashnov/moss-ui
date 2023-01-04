import React  from "react";
import ButtonUnstyled, {buttonUnstyledClasses, ButtonUnstyledOwnProps} from '@mui/base/ButtonUnstyled'
import styled from 'styled-components'
import { css } from 'styled-components'

import { Color } from '../Color'
import { Size } from "../Size";

const sizeRules: Record<ButtonSize, ReturnType<typeof css>> = {
    'small': css`
        padding: ${Size[6]} ${Size[12]};`,

    'medium': css`
        padding: ${Size[10]} ${Size[16]};`,

    'large': css`
        padding: ${Size[12]} ${Size[24]};`,
}

const variantRules: Record<ButtonVariant, ReturnType<typeof css>> = {
    'primary': css`
        background-color: ${Color["ui-moss-700"]};
        color: ${Color.white};

        &:hover {
            background-color: ${Color["ui-moss-800"]};
        }
    
        &.${buttonUnstyledClasses.active} {
            background-color: ${Color["ui-moss-900"]};
        }
    `,

    'secondary': css`
        background-color: ${Color.white};
        color: ${Color["gray-700"]};

        &:hover {
            background-color: ${Color["gray-150"]};
        }

        &.${buttonUnstyledClasses.active} {
            background-color: ${Color["gray-135"]};
        }
    `,
}

const StyledButton = styled(ButtonUnstyled)<{
    size: ButtonSize
    variant: ButtonVariant
}>`
    @font-face {
        font-family: 'aeonik_pro';
        src: url(https://assets.website-files.com/5fbe6e809f20545622827be2/5fbe6e809f2054cb05827c0f_AeonikPro-Medium.woff);
        font-weight: 400;
        font-style: normal;
    }

    border: 0;
    border-radius: ${Size[8]};
    font-family: 'aeonik_pro';
    cursor: pointer;
    ${props => sizeRules[props.size]}
    ${props => variantRules[props.variant]}

    &.${buttonUnstyledClasses.focusVisible} {
        outline: 4px solid ${Color["gray-150"]};
    }
`
type ButtonSize = 'small' | 'medium' | 'large'
type ButtonVariant = 'primary' | 'secondary'

export type ButtonProps = React.PropsWithChildren<{
    variant?: ButtonVariant
    size?: ButtonSize
    onClick?: React.ComponentPropsWithoutRef<typeof ButtonUnstyled>['onClick']
}>

export const Button = ({size = 'medium', variant='primary', children, onClick}: ButtonProps) => {
    return <StyledButton type='button' variant={variant} size={size} onClick={onClick}>{children}</StyledButton>
}