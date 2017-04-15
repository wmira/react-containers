'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LeftRightPlayground = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    width: 620px;\n    border: 1px solid;\n    background: #262626;\n    height: 62px;\n    color: #FFF;\n    padding: 6px;\n'], ['\n    width: 620px;\n    border: 1px solid;\n    background: #262626;\n    height: 62px;\n    color: #FFF;\n    padding: 6px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    font-weight: bold;\n    font-size: 16px;\n    color: #00d8ff;\n'], ['\n    font-weight: bold;\n    font-size: 16px;\n    color: #00d8ff;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    font-size: 14;\n    padding: 10px;\n'], ['\n    font-size: 14;\n    padding: 10px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

var Menus = function Menus() {
    return _react2.default.createElement(
        _index.InlineItems,
        { space: 8 },
        _react2.default.createElement(
            'span',
            null,
            'Menu1'
        ),
        _react2.default.createElement(
            'span',
            null,
            'Menu2'
        ),
        _react2.default.createElement(
            'span',
            null,
            'Menu3'
        )
    );
};

var ProductTitle = _styledComponents2.default.div(_templateObject2);

var Title = _styledComponents2.default.div(_templateObject3);

var LeftRightPlayground = exports.LeftRightPlayground = function (_React$Component) {
    _inherits(LeftRightPlayground, _React$Component);

    function LeftRightPlayground() {
        _classCallCheck(this, LeftRightPlayground);

        return _possibleConstructorReturn(this, (LeftRightPlayground.__proto__ || Object.getPrototypeOf(LeftRightPlayground)).apply(this, arguments));
    }

    _createClass(LeftRightPlayground, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    Title,
                    null,
                    ' Left and Right section '
                ),
                _react2.default.createElement(
                    Container,
                    null,
                    _react2.default.createElement(
                        _index.LeftRightSection,
                        null,
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                _index.Center,
                                null,
                                _react2.default.createElement(
                                    ProductTitle,
                                    null,
                                    'Cool Product'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                _index.Center,
                                null,
                                _react2.default.createElement(Menus, null)
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    Title,
                    null,
                    ' Left Side Only '
                ),
                _react2.default.createElement(
                    Container,
                    null,
                    _react2.default.createElement(
                        _index.LeftRightSection,
                        null,
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                _index.Center,
                                null,
                                _react2.default.createElement(
                                    ProductTitle,
                                    null,
                                    'Cool Product'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    Title,
                    null,
                    ' Right Side Only '
                ),
                _react2.default.createElement(
                    Container,
                    null,
                    _react2.default.createElement(
                        _index.LeftRightSection,
                        null,
                        _react2.default.createElement('div', null),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                _index.Center,
                                null,
                                _react2.default.createElement(Menus, null)
                            )
                        )
                    )
                )
            );
        }
    }]);

    return LeftRightPlayground;
}(_react2.default.Component);

exports.default = LeftRightPlayground;