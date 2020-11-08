import Vue from 'vue'
import {
    Form, FormItem, Input, Button, Message, Container, Header, Aside, Main,
    Menu, MenuItem, MenuItemGroup, Submenu
} from 'element-ui'

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.component(Message.name, Message)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)

Vue.prototype.$message = Message