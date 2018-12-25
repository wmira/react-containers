
import { O_TRUNC } from 'constants';
import { mount } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'
import { filterChildrenWithType, findChild, findChildren } from "./findChild";

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

  it('returns true with child is shaped as hot loaded', () => {
    const El = () => (<div/>)
    const standin = jest.fn(() => El)
    const child = {
      type: {
        name: 'ProxyFacade',
        '__reactstandin__getCurrent': standin
      }
    }
    const typeFound = filterChildrenWithType(El)(child as any)
    expect(typeFound).toBe(true)
    expect(standin).toHaveBeenCalled()

  })
  it('returns an array of all matching elements', () => {
    const renderedTree = mount(<div>
      <ToFind name="toFind" >Ok</ToFind>
      <ToFind name="toFind2" >Ok</ToFind>
    </div>)
    const foundEl = findChildren(ToFind, renderedTree.props() )
    expect(foundEl).toHaveLength(2)

    // just to be sure
    expect(foundEl[0].props.name).toEqual("toFind")
    expect(foundEl[1].props.name).toEqual("toFind2")
  })
})