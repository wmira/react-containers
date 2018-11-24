
import {
  Center,
  findChild,
  InlineItems,
  LeftRightSection,
  MappingOver,
  Render
} from './index'

describe('index', () => {

  it('exports required module', () => {
    expect(Center).toBeDefined()
    expect(findChild).toBeDefined()
    expect(InlineItems).toBeDefined()
    expect(LeftRightSection).toBeDefined()
    expect(MappingOver).toBeDefined()
    expect(Render).toBeDefined()
  })

})