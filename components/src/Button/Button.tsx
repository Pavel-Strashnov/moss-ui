import React  from "react";
import ButtonUnstyled, {buttonUnstyledClasses, ButtonUnstyledOwnProps} from '@mui/base/ButtonUnstyled'
import styled from 'styled-components'
import { css } from 'styled-components'

import { Color } from '../Color'
import { Size } from "../Size";
import { bodyLBold, bodyM, bodyMBold } from "../Typography/mixins";

const sizeRules: Record<ButtonSize, ReturnType<typeof css>> = {
    'small': css`
        padding: ${Size[6]} ${Size[12]};
        ${bodyMBold}
    `,

    'medium': css`
        padding: ${Size[10]} ${Size[16]};
        ${bodyMBold}
    `,

    'large': css`
        padding: ${Size[12]} ${Size[24]};
        ${bodyLBold}
    `,
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

    border: 0;
    border-radius: ${Size[8]};
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