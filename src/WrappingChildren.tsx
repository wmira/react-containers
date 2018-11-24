
import * as React from 'react'

export interface IWrappingChildrenProp<W={}> {
    with: React.ComponentType<W>
    wrapperProps?: W
    children?: React.ReactChild | React.ReactChild[];
}

export const WrappingChildren: React.SFC<IWrappingChildrenProp> = props => {

    const { with: Wrapper, wrapperProps = {}} = this.props
    return (
        <>
            {
                React.Children.toArray( (child: React.ReactElement<any>) => {
                    return (
                        <Wrapper {...wrapperProps}>{ child }</Wrapper>
                    )
                })
            }
        </>
    )

}