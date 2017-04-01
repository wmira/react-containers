'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RenderIf = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Calls the function child
 * 
 * <RenderIf expr={true|false}>
 *   { (props) => <MyComponent {...props} /> };
 * </RenderIf>
 * 
 * @param {*} props 
 */
var RenderIf = exports.RenderIf = function RenderIf(props) {
    return Boolean(props.expr) ? props.children(props) : null;
};
RenderIf.propTypes = {
    expr: _react.PropTypes.bool,
    children: _react.PropTypes.func
};