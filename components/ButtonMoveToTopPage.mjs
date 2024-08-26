import {onMounted, onUnmounted, ref} from 'vue'

export default {
    name: "ButtonMoveToTopPage", // необходимо для ссылки на самого себя
    components: {},
    directives: {},
    emits: [],
    props: {},
    setup(props, {attrs, slots, emit, expose}) {
        const visible = ref(false);

        onMounted(() => {
            document.addEventListener("scroll", CalcVisible);
        })
        onUnmounted(() => {
            document.removeEventListener("scroll", CalcVisible);
        })

        function moveToTopPage(event) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }

        function CalcVisible() {
            visible.value = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
        }

        return {
            moveToTopPage,
            visible,
        }
    },
    template: `
      <button id="topBtn" @click="moveToTopPage" v-show="visible"><i class="fa-solid fa-angles-up"></i></button>
    `
}
