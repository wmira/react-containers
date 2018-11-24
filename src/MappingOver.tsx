
import * as React from 'react'

interface IComponentMapperProp<E = {} , D = {}> {
    element: E,
    data?: D,
    index: number,
    collection: E[]
}
type MapPropType<E= {}, D = {}> = React.SFC<IComponentMapperProp<E,D>>
type MapAsArrayType<E={}, D = {}, CP ={}> = (element: E, index: number, collection: E[], data?: D) => React.ReactElement<CP>
type ChildrenType<E ={}, D = {}> = MapPropType<E, D> | MapAsArrayType<E>
export interface IMappingOverProp<E = {}, D = {}, CP = {}> {
    collection: E[]
    mapArgAsProp?: true
    children: ChildrenType
    data?: D
}

export class MappingOver<E = {}> extends React.PureComponent<IMappingOverProp<E>> {

    public dispatchMap = (element: E, index: number, collection: E[]): React.ReactElement<any> => {
        const { data, mapArgAsProp, children } = this.props
        if ( mapArgAsProp === true ) {
            const mapArgAsPropChild = children as MapPropType
            return React.createElement(mapArgAsPropChild, { key: index, collection, index, element, data })
        }
        const mapAsArray = children as MapAsArrayType
        return mapAsArray(element, index, collection, data)
    }

    public render() {

        const { collection } = this.props
        return (
            <>
                { collection.map( this.dispatchMap ) }
            </>
        )
    }
}