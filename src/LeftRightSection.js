

import React, { Children } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const LeftRightContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`
const Empty = () => <div></div>;

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
export const LeftRightSection = (props) => {
    const children = Children.toArray(props.children);    
    return (
        <LeftRightContainer>
            { children[0] ? children[0] : <Empty /> }
            { children[1] ? children[1] : <Empty /> }
        </LeftRightContainer>
    );
}

LeftRightSection.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string
};

export default LeftRightSection;