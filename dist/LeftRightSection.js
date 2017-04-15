'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LeftRightSection = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: space-between;\n'], ['\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: space-between;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LeftRightContainer = _styledComponents2.default.div(_templateObject);
var Empty = function Empty() {
    return _react2.default.createElement('div', null);
};

/**
 *
 * This container needs to have exactly 2 children
 *
 * <LeftRightSection>
 *      <div>Left</div>
 *      <div>Right</div>
 * </LeftRightSection>
 *
 * If left section is empty for example then, leave out an empty div
 *
 * <LeftRightSection>
 *      <div></div>
 *      <RightComponent />
 * </LeftRightSection>
 *
 */
var LeftRightSection = exports.LeftRightSection = function LeftRightSection(props) {
    var children = _react.Children.toArray(props.children);
    return _react2.default.createElement(
        LeftRightContainer,
        null,
        children[0] ? children[0] : _react2.default.createElement(Empty, null),
        children[1] ? children[1] : _react2.default.createElement(Empty, null)
    );
};

LeftRightSection.propTypes = {
    children: _propTypes2.default.array,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string
};

exports.default = LeftRightSection;