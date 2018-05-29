
import * as React from 'react';

const { Children } = React

export interface InlineItemsProps {
    rAlign?: boolean //is it right align?, default is false
    padding?: number, //the default padding
    children?: React.ReactNode
}

export const InlineItems: React.SFC<InlineItemsProps> = (props: InlineItemsProps ) => (
    <div style={{display: 'inline-block' }}>
        { Children.toArray(props.children || []).map( (child, idx) => {
            const spacerField = props.rAlign ? 'paddingLeft' : 'paddingRight';
            return <div key={idx} style={{ display: 'inline-block', [spacerField]: props.padding }}>{ child }</div>;
        })}
    </div>
);

InlineItems.defaultProps = {
    padding: 4,
    rAlign: false
};

