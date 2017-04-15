
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Calls the function child
 * 
 * <RenderIf expr={true|false}>
 *   { (props) => <MyComponent {...props} /> };
 * </RenderIf>
 * 
 * @param {*} props 
 */
export const RenderIf = props => (
    Boolean(props.expr) ? props.children(props) : null
)
RenderIf.propTypes = {
    expr: PropTypes.bool,
    children: PropTypes.func
}