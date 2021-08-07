import { mount } from '@vue/test-utils'
import {axe, toHaveNoViolations} from 'jest-axe'
import VisuallyHidden from './VisuallyHidden.vue';
import App from '../App.vue';
expect.extend(toHaveNoViolations)

describe('check VisuallyHidden Class', () => {
  test('check Default Class', () => {
    const wrapper = mount(VisuallyHidden)
    expect(wrapper.classes()).toContain('visually-hidden')
  })

  test('check Focusable Class', () => {
    const wrapper = mount(VisuallyHidden,  {
      props: {
        isFocusable: true
      }
    })
    expect(wrapper.classes()).not.toContain('visually-hidden')
    expect(wrapper.classes()).toContain('visually-hidden-focusable')
  })
})

describe('check Focusable Element', () => {
  test('focus HTMLAnchorElement', () => {
    const wrapper = mount(VisuallyHidden, {
      slots: {
        default: '<a href="http://exapmle.com">exapmle.com</a>'
      },
      props: {
        isFocusable: true
      }
    })
    const elAnchor = wrapper.find('a').element
    elAnchor.focus()
  })
})

describe("<VisuallyHidden /> with axe", () => {
  it('should not have ARIA violations', async () => {
    const wrapper = mount(App, {
      attachTo: document.body
    })
    const results = await axe(wrapper.element)
    expect(results).toHaveNoViolations()
  })
})
