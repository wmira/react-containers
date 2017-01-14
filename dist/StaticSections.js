'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StaticSections = exports.ComputedSection = exports.StaticSection = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StaticSection = exports.StaticSection = function StaticSection() {};

var ComputedSection = exports.ComputedSection = function ComputedSection() {};

/**
 * StaticSections that measure available space.
 *
 */

var StaticSections = exports.StaticSections = function (_Component) {
    _inherits(StaticSections, _Component);

    function StaticSections() {
        _classCallCheck(this, StaticSections);

        return _possibleConstructorReturn(this, (StaticSections.__proto__ || Object.getPrototypeOf(StaticSections)).apply(this, arguments));
    }

    _createClass(StaticSections, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                userStyle = _props.style,
                width = _props.width,
                height = _props.height,
                children = _props.children;

            var style = _extends({}, userStyle, { width: width, height: height, position: 'relative', boxSizing: 'border-box' });

            return _react2.default.createElement('div', { style: style });
        }
    }]);

    return StaticSections;
}(_react.Component);

StaticSections.propTypes = {
    width: _react.PropTypes.number.isRequired,
    height: _react.PropTypes.number.isRequired,
    orientation: _react.PropTypes.oneOf(['vertical', 'horizontal']),
    style: _react.PropTypes.object
};