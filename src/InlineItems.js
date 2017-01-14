
import React, { PropTypes, Children } from 'react';

/**
 * <InlineItems rAlign>
 *
 * </InlineItems>
 *
 */
export const InlineItems = (props) => (
    <div style={{display: 'inline-block' }}>
        { Children.toArray(props.children).map( (child, idx) => {
            const spacerField = props.rAlign ? 'paddingLeft' : 'paddingRight';
            return <div key={idx} style={{ display: 'inline-block', [spacerField]: props.space }}>{ child }</div>;
        })}
    </div>
);

InlineItems.defaultProps = {
    space: 4
};

InlineItems.propTypes = {
    children: PropTypes.node,
    space: PropTypes.number
};

