
import * as React from 'react';

export interface IRenderIfProps<P = {}> {
    ifTrue: (() => boolean) | boolean;
    children: (() => React.ReactElement<P>) | React.ReactElement<P>
}

export const Render = (props: IRenderIfProps) => {
    const shouldRender = typeof props.ifTrue === "function" ? props.ifTrue() : props.ifTrue

    if ( shouldRender ) {
        const theElement = typeof props.children === "function" ? props.children() :props.children
        return theElement !== undefined ? theElement : null
    }
    return null
}
