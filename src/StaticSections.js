

import React, { Component, PropTypes } from 'react';

export const StaticSection = () => {};

export const ComputedSection = () => {};

/**
 * StaticSections that measure available space.
 *
 */
export class StaticSections extends Component {

    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        orientation: PropTypes.oneOf(['vertical', 'horizontal']),
        style: PropTypes.object
    }

    render() {
        const { style: userStyle, width, height, children } = this.props;
        const style = { ...userStyle, width, height, position: 'relative', boxSizing: 'border-box' };

        return (
            <div style={style}>

            </div>
        );

    }
}