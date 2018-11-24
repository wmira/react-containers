
import { mount } from 'enzyme'
import 'jest-styled-components'
import * as React from 'react'
import { Center } from './Center'


describe("<Center />", () => {
    it('renders using flex and centers items', () => {
      const underTest = mount(<Center><div>Hello</div></Center>);

      expect(underTest).toHaveStyleRule('display', 'flex')
      expect(underTest).toHaveStyleRule('justify-content', 'center')
      expect(underTest).toHaveStyleRule('align-items', 'center')
      expect(underTest).toHaveStyleRule('height', '100%')
      expect(underTest).toHaveStyleRule('width', '100%')
    })
})