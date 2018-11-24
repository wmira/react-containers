
import * as React from 'react';

export interface IRenderIfProps<P = {}> {
    expr: (() => boolean) | boolean;
    children: (() => React.ReactElement<P>) | React.ReactElement<P>
}

export const RenderIf = (props: IRenderIfProps) => {
    const shouldRender = typeof props.expr === "function" ? props.expr() : props.expr

    if ( shouldRender ) {
        const theElement = typeof props.children === "function" ? props.children() :props.children
        return theElement || null
    }
    return null
}
