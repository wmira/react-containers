
import React, { PropTypes } from 'react';

/**
 * Center horizontally and vertically
 *
 * <Center>
 *     <div>This</div>
 *     <div>Will Be Centered</div>
 * </Center>
 *
 *
 */
export const Center = (props) => (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        { props.children }
    </div>
);

Center.propTypes = {
    children: PropTypes.node
};