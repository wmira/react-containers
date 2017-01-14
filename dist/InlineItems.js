'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InlineItems = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * <InlineItems rAlign>
 *
 * </InlineItems>
 *
 */
var InlineItems = exports.InlineItems = function InlineItems(props) {
    return _react2.default.createElement(
        'div',
        { style: { display: 'inline-block' } },
        _react.Children.toArray(props.children).map(function (child, idx) {
            var spacerField = props.rAlign ? 'paddingLeft' : 'paddingRight';
            return _react2.default.createElement(
                'div',
                { key: idx, style: _defineProperty({ display: 'inline-block' }, spacerField, props.space) },
                child
            );
        })
    );
};

InlineItems.defaultProps = {
    space: 4
};

InlineItems.propTypes = {
    children: _react.PropTypes.node,
    space: _react.PropTypes.number
};