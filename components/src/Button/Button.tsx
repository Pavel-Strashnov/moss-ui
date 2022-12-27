import React  from "react";
import './styles.sass';
import ButtonUnstyled from '@mui/base/ButtonUnstyled'
import { styled } from '@mui/system'

const StyledButton = styled(ButtonUnstyled)`
    background-color: red;
    color: white;
`

export const Button = (props: React.PropsWithChildren<{}>) => {
    return <StyledButton type='button'>{props.children}</StyledButton>
}