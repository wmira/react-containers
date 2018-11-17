
import * as React from 'react'

export interface IMappingOverProp<E = {}, CP = {}> {
    collection: E[]
    children: (elemenent: E, index: number) => React.ReactElement<CP>
}

export class MappingOver extends React.PureComponent<IMappingOverProp> {


    public render() {

        const { collection } = this.props
        return (
            <>
                { collection.map( this.props.children ) } 
            </>
        )
    }
}