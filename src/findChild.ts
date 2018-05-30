import * as React from 'react'
import { ReactElement, ReactNode, Children } from 'react'

/**
 * Find the given type unde the given props.
 * 
 * 
 * @param type 
 * @param props 
 * @returns undefined if none is found
 */
export const findChild = <TP, P extends { children?: ReactNode }>(type: React.SFC<TP>, props: P): ReactElement<TP> => {

    const { children } = props

    const el = Children.toArray(children).reduce( (found, node) => {
        const element = node as ReactElement<any>
        if ( found ) {
            return found
        } else if ( element && element.type === type ) {
            return node
        }
        return undefined
    }, undefined)

    return el as ReactElement<TP>
}