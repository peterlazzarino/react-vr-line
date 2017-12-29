"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require("create-react-class");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _NativeMethodsMixin = require("NativeMethodsMixin");

var _NativeMethodsMixin2 = _interopRequireDefault(_NativeMethodsMixin);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _StyleSheetPropType = require("StyleSheetPropType");

var _StyleSheetPropType2 = _interopRequireDefault(_StyleSheetPropType);

var _LayoutAndTransformPropTypes = require("LayoutAndTransformPropTypes");

var _LayoutAndTransformPropTypes2 = _interopRequireDefault(_LayoutAndTransformPropTypes);

var _ReactNativeViewAttributes = require("ReactNativeViewAttributes");

var _ReactNativeViewAttributes2 = _interopRequireDefault(_ReactNativeViewAttributes);

var _reactNative = require("react-native");

var _reactVr = require("react-vr");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VRLineComponent = (0, _createReactClass2.default)({
    displayName: "VRLineComponent",

    /* 
        Using createClass syntax for mixin support. 
        This is the recommended way to create native modules in react-vr currently
    */
    mixins: [_NativeMethodsMixin2.default],
    propTypes: _extends({}, _reactVr.View.propTypes, {
        style: (0, _StyleSheetPropType2.default)(_LayoutAndTransformPropTypes2.default),
        vertices: _propTypes2.default.array,
        color: _propTypes2.default.string
    }),
    viewConfig: {
        uiViewClassName: "Line",
        validAttributes: _extends({}, _ReactNativeViewAttributes2.default.RCTView, {
            vertices: true,
            color: true
        })
    },
    getDefaultProps: function getDefaultProps() {
        return {};
    },
    render: function render() {
        return _react2.default.createElement(VRLine, this.props);
    }
});

var VRLine = (0, _reactNative.requireNativeComponent)('VRLine', VRLineComponent, {
    nativeOnly: {}
});

exports.default = VRLineComponent;