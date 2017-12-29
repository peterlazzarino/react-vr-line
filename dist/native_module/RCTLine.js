'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _reactVrWeb = require('react-vr-web');

var ReactVR = _interopRequireWildcard(_reactVrWeb);

var _ovrui = require('ovrui');

var OVRUI = _interopRequireWildcard(_ovrui);

var _three = require('three');

var THREE = _interopRequireWildcard(_three);

var _merge = require('react-vr-web/js/Utils/merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RCTLine = function (_ReactVR$RCTBaseView) {
    _inherits(RCTLine, _ReactVR$RCTBaseView);

    function RCTLine(guiSys) {
        _classCallCheck(this, RCTLine);

        var _this = _possibleConstructorReturn(this, (RCTLine.__proto__ || Object.getPrototypeOf(RCTLine)).call(this));

        var material = new THREE.LineBasicMaterial({ linewidth: 1 });
        var geometry = new THREE.Geometry();
        var line = new THREE.Line(geometry, material);
        _this.view = new OVRUI.UIView(guiSys);

        Object.defineProperty(_this.props, 'vertices', {
            set: function set(value) {
                value.map(function (vertex, id) {
                    line.geometry.vertices[id] = new THREE.Vector3(value[id][0], value[id][1], value[id][2]);
                });
            }
        });

        Object.defineProperty(_this.props, 'color', {
            set: function set(value) {
                line.material.color = new THREE.Color(value);
                line.material.needsUpdate = true;
            }
        });

        _this.view.add(line);
        return _this;
    }

    _createClass(RCTLine, null, [{
        key: 'describe',
        value: function describe() {
            return (0, _merge2.default)(_get(RCTLine.__proto__ || Object.getPrototypeOf(RCTLine), 'describe', this).call(this), {
                // declare the native props sent from react to runtime
                NativeProps: {
                    vertices: 'array',
                    color: 'string'
                }
            });
        }
    }]);

    return RCTLine;
}(ReactVR.RCTBaseView);

exports.default = RCTLine;