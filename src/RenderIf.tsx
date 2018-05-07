
import * as React from 'react';

export interface RenderIfProps {
    expr: () => boolean,
    children: () => React.ReactElement<any>
}

export const RenderIf = (props: RenderIfProps) => (
    props.expr ? props.children() : null
)
