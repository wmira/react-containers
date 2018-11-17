
import * as React from 'react'

export interface IMappingOverProp<E = {}, CP = {}> {
    collection: E[]
    children: (elemenent: E, index: number) => React.ReactElement<CP>
}

export class MappingOver<E> extends React.PureComponent<IMappingOverProp<E>> {


    public render() {

        const { collection } = this.props
        return (
            <>
                { collection.map( this.props.children ) } 
            </>
        )
    }
}