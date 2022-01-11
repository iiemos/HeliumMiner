import Vue from 'vue'
import {
  Row,
  Col,
  Dialog,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

const components = [
  Row,
  Col,
  Dialog,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
];

const Element = {
  install (Vue) {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }
}

Vue.use(Element, { locale })
