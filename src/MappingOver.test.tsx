import { mount } from "enzyme";
import * as React from 'react'
import { MappingOver } from "./MappingOver";

describe('<MappingOver />', () => {
  const MyEl: React.SFC<{element: string, index: number}> = (props) => (
    <div>{ `${props.element} ${props.index}` }</div>
  )
  it(`
    maps over a collection and
    calls standard mapper
  `,  () => {

    const mapper = (e: any, index: number) => {
      return <MyEl key={index} element={e} index={index} />
    }
    const collection = ['a', 'b', 'c']
    const wrapper = mount(
      <MappingOver collection={collection}>
        { mapper }
      </MappingOver>
    );

    expect(wrapper.find(MyEl)).toHaveLength(3)
  })

  it(`
    maps over a collection and
    calls an SFC
    when mapArgAsProp is true
  `,  () => {

    const collection = ['a', 'b', 'c']
    const wrapper = mount(
      <MappingOver
        mapArgAsProp={true}
        collection={collection}>
        { MyEl }
      </MappingOver>
    );

    expect(wrapper.find(MyEl)).toHaveLength(3)
  })
})