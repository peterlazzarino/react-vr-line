import React from "react";
import createReactClass from "create-react-class";
import NativeMethodsMixin from 'react-native/Libraries/Renderer/shims/NativeMethodsMixin';
import PropTypes from 'prop-types';
import ReactNativeViewAttributes from 'react-native/Libraries/Components/View/ReactNativeViewAttributes';
import { requireNativeComponent } from 'react-native'; 
import {
    View
} from 'react-vr';

const VRLineComponent = createReactClass({
    /* 
        Using createClass syntax for mixin support. 
        This is the recommended way to create native modules in react-vr currently
    */
    mixins: [NativeMethodsMixin],
    propTypes: {
      ...View.propTypes,
      vertices: PropTypes.array,
      color: PropTypes.string
    },
    viewConfig: {
        uiViewClassName: "Line",
        validAttributes: {
            ...ReactNativeViewAttributes.RCTView,
            vertices: true,
            color: true
        }
    },
    getDefaultProps: function() {
        return {};
    },
    render: function() {
      return (
        <VRLine
          {...this.props}>
        </VRLine>
      );
    },
});


const VRLine = requireNativeComponent('VRLine', VRLineComponent, {
    nativeOnly: {},
});

export default VRLineComponent;