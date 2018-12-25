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

    return findChildren(type, props)[0]
}

export const findChildren = <TP, P extends { children?: ReactNode }>(
    type: React.ComponentType<TP>,
    props: P
): Array<ReactElement<TP & { children?: ReactNode }>> => {

    const { children } = props
    const filtered = Children
                        .toArray(children)
                        .filter(
                            filterChildrenWithType(type)
                        ) as Array<ReactElement<TP & { children?: ReactNode }>>
    return filtered
}

/**
 *
 * @param type
 */
export const filterChildrenWithType = <TP>(type: React.ComponentType<TP>) => ( child: React.ReactElement<TP> ): boolean => {

    if ( child && child.type === type ) {
        return true
    }
    // checks for Hot Loader
    if ( child
            && child.type
            && (child.type as any).name === "ProxyFacade"
            && (child.type as any).__reactstandin__getCurrent ) {
        const standInEl = (child.type as any).__reactstandin__getCurrent()
        return standInEl === type

    }

    return false
}