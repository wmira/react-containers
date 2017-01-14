'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AutoSizer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _detectElementResize = require('../detectElementResize');

var _detectElementResize2 = _interopRequireDefault(_detectElementResize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 * Forked from https://github.com/bvaughn/react-virtualized/blob/master/source/AutoSizer/
 *
 * Remove should component update
 *
 */
var AutoSizer = exports.AutoSizer = function (_Component) {
    _inherits(AutoSizer, _Component);

    function AutoSizer(props) {
        _classCallCheck(this, AutoSizer);

        var _this = _possibleConstructorReturn(this, (AutoSizer.__proto__ || Object.getPrototypeOf(AutoSizer)).call(this, props));

        _this.state = {
            height: 0,
            width: 0
        };

        _this._onResize = _this._onResize.bind(_this);
        _this._setRef = _this._setRef.bind(_this);
        return _this;
    }

    _createClass(AutoSizer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // Delay access of parentNode until mount.
            // This handles edge-cases where the component has already been unmounted before its ref has been set,
            // As well as libraries like react-lite which have a slightly different lifecycle.
            this._parentNode = this._autoSizer.parentNode;

            // Defer requiring resize handler in order to support server-side rendering.
            // See issue #41
            this._detectElementResize = (0, _detectElementResize2.default)();
            this._detectElementResize.addResizeListener(this._parentNode, this._onResize);

            this._onResize();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this._detectElementResize) {
                this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                disableHeight = _props.disableHeight,
                disableWidth = _props.disableWidth;
            var _state = this.state,
                height = _state.height,
                width = _state.width;

            // Outer div should not force width/height since that may prevent containers from shrinking.
            // Inner component should overflow and use calculated width/height.
            // See issue #68 for more information.

            var outerStyle = { overflow: 'visible' };

            if (!disableHeight) {
                outerStyle.height = 0;
            }

            if (!disableWidth) {
                outerStyle.width = 0;
            }

            return _react2.default.createElement(
                'div',
                {
                    ref: this._setRef,
                    style: outerStyle
                },
                children({ height: height, width: width })
            );
        }
    }, {
        key: '_onResize',
        value: function _onResize() {
            var onResize = this.props.onResize;

            // Gaurd against AutoSizer component being removed from the DOM immediately after being added.
            // This can result in invalid style values which can result in NaN values if we don't handle them.
            // See issue #150 for more context.

            var boundingRect = this._parentNode.getBoundingClientRect();
            var height = boundingRect.height || 0;
            var width = boundingRect.width || 0;

            var style = window.getComputedStyle(this._parentNode) || {};
            var paddingLeft = parseInt(style.paddingLeft, 10) || 0;
            var paddingRight = parseInt(style.paddingRight, 10) || 0;
            var paddingTop = parseInt(style.paddingTop, 10) || 0;
            var paddingBottom = parseInt(style.paddingBottom, 10) || 0;

            this.setState({
                height: height - paddingTop - paddingBottom,
                width: width - paddingLeft - paddingRight
            });

            onResize({ height: height, width: width });
        }
    }, {
        key: '_setRef',
        value: function _setRef(autoSizer) {
            this._autoSizer = autoSizer;
        }
    }]);

    return AutoSizer;
}(_react.Component);

AutoSizer.propTypes = {
    /**
    * Function responsible for rendering children.
    * This function should implement the following signature:
    * ({ height, width }) => PropTypes.element
    */
    children: _react.PropTypes.func.isRequired,

    /** Disable dynamic :height property */
    disableHeight: _react.PropTypes.bool,

    /** Disable dynamic :width property */
    disableWidth: _react.PropTypes.bool,

    /** Callback to be invoked on-resize: ({ height, width }) */
    onResize: _react.PropTypes.func.isRequired
};
AutoSizer.defaultProps = {
    onResize: function onResize() {}
};
exports.default = AutoSizer;