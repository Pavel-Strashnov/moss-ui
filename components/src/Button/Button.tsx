import React  from "react";
import './styles.sass';
import ButtonUnstyled from '@mui/base/ButtonUnstyled'

export const Button = (props: React.PropsWithChildren<{}>) => {
    return <ButtonUnstyled type='button'>{props.children}</ButtonUnstyled>
}