

import React, { PropTypes } from 'react';

/**
 *
 * This container needs to have exactly 2 children
 *
 * <LeftRightSection>
 *      <div>Left</div>
 *      <div>Right</div>
 * </LeftRightSection>
 *
 * If left section is empty for example then, leave out an empty div
 *
 * <LeftRightSection>
 *      <div></div>
 *      <RightComponent />
 * </LeftRightSection>
 *
 */
export const LeftRightSection = (props) => (
    <div className={`${props.className || ''}`} style={{ ...props.style, ...{ display: 'flex', justifyContent: 'space-between' } }}>
        <div>{ props.children[0] || null }</div>
        <div>{ props.children[1] || null }</div>
    </div>
);

LeftRightSection.propTypes = {
    children: PropTypes.array,
    style: PropTypes.object,
    className: PropTypes.string
};

export default LeftRightSection;