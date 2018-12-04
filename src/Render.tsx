
import * as React from 'react';

export interface IRenderIfProps<P = {}, D = {}> {
    data?: D
    ifTrue: (() => boolean) | boolean;
    children: ((data?: D) => React.ReactElement<P>) | React.ReactElement<P>
}

export const Render = (props: IRenderIfProps) => {
    const shouldRender = typeof props.ifTrue === "function" ? props.ifTrue() : props.ifTrue

    if ( shouldRender ) {
        const theElement = typeof props.children === "function"
            ? ( props.data ? props.children(props.data) : props.children() )
            : props.children
        return theElement !== undefined ? theElement : null
    }
    return null
}
