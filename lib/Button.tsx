import React  from "react";
import './styles.sass';

export const Button = (props: React.PropsWithChildren<{}>) => {
    return <button type='button'>{props.children}</button>
}