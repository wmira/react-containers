'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Center = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n'], ['\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n']);

var _react = require('react');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
var Center = exports.Center = _styledComponents2.default.div(_templateObject);

Center.propTypes = {
    children: _react.PropTypes.node
};

exports.default = Center;