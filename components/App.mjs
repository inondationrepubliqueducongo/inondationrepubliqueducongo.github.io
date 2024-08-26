import Nav from "./Nav.mjs";
import ButtonMoveToTopPage from "./ButtonMoveToTopPage.mjs"

export default {
    name: 'App', // необходимо для ссылки на самого себя
    components: {
        Nav,
        ButtonMoveToTopPage,
    },
    directives: {},
    emits: [],
    props: {},
    setup(props, {attrs, slots, emit, expose}) {
    },
    template: `
      <RouterView/>
      <Teleport to="nav">
        <Nav/>
      </Teleport>
      <Teleport to="body">
        <ButtonMoveToTopPage/>
      </Teleport>
    `
}
