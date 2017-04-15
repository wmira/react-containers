'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InlineItems = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Inlines all the items with a spacer. Useful if you want to display different components inline
 * 
 * @param {*} props 
 */
var InlineItems = exports.InlineItems = function InlineItems(props) {
    return _react2.default.createElement(
        'div',
        { style: { display: 'inline-block' } },
        _react.Children.toArray(props.children).map(function (child, idx) {
            var spacerField = Boolean(props.rAlign) ? 'paddingLeft' : 'paddingRight';
            return _react2.default.createElement(
                'div',
                { key: idx, style: _defineProperty({ display: 'inline-block' }, spacerField, props.space) },
                child
            );
        })
    );
};

InlineItems.defaultProps = {
    space: 4,
    rAlign: false
};

InlineItems.propTypes = {
    children: _propTypes2.default.node,
    space: _propTypes2.default.number,
    rAlign: _propTypes2.default.bool
};