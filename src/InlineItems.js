
import React, { PropTypes, Children } from 'react';

/**
 * Inlines all the items with a spacer. Useful if you want to display different components inline
 * 
 * @param {*} props 
 */
export const InlineItems = (props) => (
    <div style={{display: 'inline-block' }}>
        { Children.toArray(props.children).map( (child, idx) => {
            const spacerField = Boolean(props.rAlign) ? 'paddingLeft' : 'paddingRight';
            return <div key={idx} style={{ display: 'inline-block', [spacerField]: props.space }}>{ child }</div>;
        })}
    </div>
);

InlineItems.defaultProps = {
    space: 4,
    rAlign: false
};

InlineItems.propTypes = {
    children: PropTypes.node,
    space: PropTypes.number,
    rAlign: PropTypes.bool
};

