import * as React from 'react'
import { Children, ReactElement, ReactNode } from 'react'

/**
 * Find immediate child of an element
 *
 * @param type
 * @param props
 */
export const findChild = <TP, P extends { children?: ReactNode }>(
    type: React.ComponentType<TP>,
    props: P
): ReactElement<TP & { children?: ReactNode }> => {

    const { children } = props
    const childrenArr = Children.toArray(children)

    for ( const child of childrenArr ) {
        const childEl = child as React.ReactElement<TP>
        if ( childEl && childEl.type === type ) {
            return childEl;
        }
    }
    return undefined;
}