import {computed} from 'vue';

export default {
    name: 'InDev', // необходимо для ссылки на самого себя
    components: {},
    directives: {},
    emits: [],
    props: {
        head: {
            type: String,
            default: "En développement",
        }
    },
    setup(props, {attrs, slots, emit, expose}) {
    },
    template: `
      <h2>
        {{ head }}
      </h2>
      <div class="alert alert-info" role="alert">
        Page en construction.
      </div>
    `
}
