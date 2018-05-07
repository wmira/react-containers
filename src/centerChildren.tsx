
import * as React from 'react';

import { Center } from './Center';

/**
 * HoC that will center children
 * @param Component
 */
export function centerChildren(Component: React.ComponentType) {
    
    const CenteredComponent = (props: { children: any }) => (
        <Component {...props} >
            <Center>{ props.children }</Center>
        </Component>
    )

    return CenteredComponent
}

