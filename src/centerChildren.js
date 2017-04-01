
import React, { PropTypes } from 'react';
import { Center } from './Center';


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

