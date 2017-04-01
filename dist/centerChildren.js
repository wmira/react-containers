'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.centerChildren = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Center = require('./Center');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var centerChildren = exports.centerChildren = function centerChildren(Component) {
    var CenteredComponent = function CenteredComponent(props) {
        return _react2.default.createElement(
            Component,
            props,
            _react2.default.createElement(
                _Center.Center,
                null,
                props.children
            )
        );
    };
    CenteredComponent.propTypes = {
        children: _react.PropTypes.node
    };

    return CenteredComponent;
};