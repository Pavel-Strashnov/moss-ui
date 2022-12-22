import React  from "react";
// import './styles.sass';

export const Button = (props: React.PropsWithChildren<{}>) => {
    return <input type='button'>{props.children}</input>
}