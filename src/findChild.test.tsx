
import { mount } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'
import { findChild } from "./findChild";

describe('findChild', () => {
  const ToFind: React.SFC<{name: string}> = () => {
    return <div>Ola</div>
  }

  it('finds react element under a given react element', () => {

    const renderedTree = mount(<div>
      <ToFind name="toFind" >Ok</ToFind>
    </div>)
    const foundEl = findChild(ToFind, renderedTree.props() )
    expect(foundEl).toBeDefined()
    expect(foundEl.props.name).toEqual("toFind")
    expect(foundEl.props.children).toBeDefined()
  })

  it('renders undefined if none is found', () => {
    const renderedTree = mount(<div>
      <div>Ok</div>
    </div>)
    const foundEl = findChild(ToFind, renderedTree.props() )

    expect(foundEl).toEqual(undefined)
  })

})