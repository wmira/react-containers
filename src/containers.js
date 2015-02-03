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

var Container = React.createClass({

    mixins: [StyleMixin],
    
    /**
     * Default container
     *  
     * @returns {XML}
     */
    render : function() {
        var style = this.getDefaultStyle();
        
        return (
            <div {...this.props} style={style} >
                {this.props.children}
            </div>
        );
        
    }
    
});

var CContainer = React.createClass({

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
            <div {...this.props} style={style} >
                {this.props.children}
            </div>
        );

    }

});

var Column = React.createClass({

    mixins: [StyleMixin],
    
    render : function() {
        var style = this.getDefaultStyle();
        style['flex-direction'] = 'column';
        style['flex'] =  this.props.width ? ('0 0 ' + ( this.props.width) ) :  '1 1 auto';
        return (
            <div style={style} >
                {this.props.children}
            </div>
        );

    }

});

var Row = React.createClass({
    mixins: [StyleMixin],
    render : function() {
        var style = this.getDefaultStyle();
        style['flex-direction'] = 'row';
        style['flex'] =  this.props.height ? ('0 0 ' + ( this.props.height) ) :  '1 1 auto';

        return (
            <div style={style} >
                {this.props.children}
            </div>
        );

    }
    
});

var Left = React.createClass({

    /**
     *  
     */
    render : function() {
        var style = this.props.style || {};

        return (
          <div style={style}>
            {this.props.children}
          </div>      
        );
    }
    
});

/**
 * FloatRight
 *
 */
var Right = React.createClass({

    render : function() {
        var style = this.props.style || {};
        style['marginLeft'] = 'auto';
        return (
            <div style={style}>
            {this.props.children}
            </div>
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