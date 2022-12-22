import React  from "react";

export const Button = (props: React.PropsWithChildren<{}>) => {
    return <input type='button'>{props.children}</input>
}