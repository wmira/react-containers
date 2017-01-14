'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Center = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Center horizontally and vertically
 *
 * <Center>
 *     <div>This</div>
 *     <div>Will Be Centered</div>
 * </Center>
 *
 *
 */
var Center = exports.Center = function Center(props) {
    return _react2.default.createElement(
        'div',
        { style: { display: 'flex', justifyContent: 'center', alignItems: 'center' } },
        props.children
    );
};

Center.propTypes = {
    children: _react.PropTypes.node
};