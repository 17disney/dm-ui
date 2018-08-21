import Card from './Card'
import Container from './Container'
import Content from './Content'
import Header from './Header'
import Main from './Main'
// import Menu from './Menu'
import Scroll from './Scroll'
import SelectDate from './SelectDate'

function install(Vue) {
  if (install.installed) {
    return
  }
  install.installed = true

  const components = [
    Card,
    Container,
    Content,
    Header,
    Main,
    // Menu,
    Scroll,
    SelectDate
  ]

  components.forEach(Component => {
    Component.install(Vue)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default {
  install
}
