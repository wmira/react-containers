'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LeftRightSection = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    return _react2.default.createElement(
        'div',
        { className: '' + (props.className || ''), style: _extends({}, props.style, { display: 'flex', justifyContent: 'space-between' }) },
        props.children[0],
        props.children[1]
    );
};

LeftRightSection.propTypes = {
    children: _react.PropTypes.array,
    style: _react.PropTypes.object,
    className: _react.PropTypes.string
};

exports.default = LeftRightSection;