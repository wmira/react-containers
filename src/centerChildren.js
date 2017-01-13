
import React, { PropTypes } from 'react';
import { Center } from './Center';

/**
 * A higher order component that centers its children
 *
 * import BaseComponent from 'somepackage';
 *
 * const SomeComponent = centerChildren(BaseComponent);
 *
 * <SomeComponent>
 *      <div>THis will be centered</div>
 *      <div>This as well</div>
 * </SomeComponent>
 *
 */
export const centerChildren = (Component) => {
    const CenteredComponent = (props) => (
        <Component {...props} >
            <Center>{ props.children }</Center>
        </Component>
    );
    CenteredComponent.propTypes = {
        children: PropTypes.node
    };

    return CenteredComponent;
};

