
import { mount } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'
import { findChild } from "./findChild";

describe('findChild', () => {
  it('finds react element under a given react element', () => {
    const ToFind: React.SFC<{name: string}> = () => {
      return <div>Ola</div>
    }
    const renderedTree = mount(<div>
      <ToFind name="toFind" >Ok</ToFind>
    </div>)
    const foundEl = findChild(ToFind, renderedTree.props() )
    expect(foundEl).toBeDefined()
    expect(foundEl.props.name).toEqual("toFind")
    expect(foundEl.props.children).toBeDefined()
  })

})