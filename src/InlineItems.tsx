
import * as React from 'react';

const { Children } = React

export interface InlineItemsProps {
    rAlign: boolean
    space: number,
    children?: React.ReactNode
}

export const InlineItems: React.SFC<InlineItemsProps> = (props: InlineItemsProps ) => (
    <div style={{display: 'inline-block' }}>
        { Children.toArray(props.children || []).map( (child, idx) => {
            const spacerField = props.rAlign ? 'paddingLeft' : 'paddingRight';
            return <div key={idx} style={{ display: 'inline-block', [spacerField]: props.space }}>{ child }</div>;
        })}
    </div>
);

InlineItems.defaultProps = {
    space: 4,
    rAlign: false
};

