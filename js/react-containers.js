(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["Containers"] = factory();
	else
		root["Containers"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	/*globals require,module */
	'use strict';

	var StyleMixin = {
	    
	    getDefaultStyle : function() {
	        var style=  this.props.style || {};
	        style['display'] = 'flex';
	        return style;
	    }    
	};

	var Container = React.createClass({displayName: "Container",

	    mixins: [StyleMixin],
	    
	    /**
	     * Default container
	     *  
	     * @returns {XML}
	     */
	    render : function() {
	        var style = this.getDefaultStyle();
	        
	        return (
	            React.createElement("div", React.__spread({},  this.props, {style: style}), 
	                this.props.children
	            )
	        );
	        
	    }
	    
	});

	var CContainer = React.createClass({displayName: "CContainer",

	    mixins: [StyleMixin],

	    /**
	     * Default container
	     *
	     * @returns {XML}
	     */
	    render : function() {
	        var style = this.getDefaultStyle();
	        style['justify-content'] = 'center';
	        style['margin'] = 'auto';
	        return (
	            React.createElement("div", React.__spread({},  this.props, {style: style}), 
	                this.props.children
	            )
	        );

	    }

	});

	var Column = React.createClass({displayName: "Column",

	    mixins: [StyleMixin],
	    
	    render : function() {
	        var style = this.getDefaultStyle();
	        style['flex-direction'] = 'column';
	        style['flex'] =  this.props.width ? ('0 0 ' + ( this.props.width) ) :  '1 1 auto';
	        return (
	            React.createElement("div", {style: style}, 
	                this.props.children
	            )
	        );

	    }

	});

	var Row = React.createClass({displayName: "Row",
	    mixins: [StyleMixin],
	    render : function() {
	        var style = this.getDefaultStyle();
	        style['flex-direction'] = 'row';
	        style['flex'] =  this.props.height ? ('0 0 ' + ( this.props.height) ) :  '1 1 auto';

	        return (
	            React.createElement("div", {style: style}, 
	                this.props.children
	            )
	        );

	    }
	    
	});

	var Left = React.createClass({displayName: "Left",

	    /**
	     *  
	     */
	    render : function() {
	        var style = this.props.style || {};

	        return (
	          React.createElement("div", {style: style}, 
	            this.props.children
	          )      
	        );
	    }
	    
	});

	/**
	 * FloatRight
	 *
	 */
	var Right = React.createClass({displayName: "Right",

	    render : function() {
	        var style = this.props.style || {};
	        style['marginLeft'] = 'auto';
	        return (
	            React.createElement("div", {style: style}, 
	            this.props.children
	            )
	        );
	    }

	});

	module.exports =  {
	    Container : Container,
	    CContainer : CContainer,
	    Left : Left,
	    Right: Right,
	    Column: Column,
	    Row: Row
	};

/***/ }
/******/ ])
});
