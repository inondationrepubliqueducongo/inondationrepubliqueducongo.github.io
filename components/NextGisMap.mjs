import {computed} from 'vue'

export default {
    name: "NextGisMap", // необходимо для ссылки на самого себя
    components: {},
    directives: {},
    emits: [],
    props: {
        user: {
            type: String,
            default: "patrick1mab",
        },
        resource: {
            type: Number,
            required: true,
        },
        lon: {
            type: Number,
            default: 0,
        },
        lat: {
            type: Number,
            default: 0,
        },
        angle: {
            type: Number,
            default: 0,
        },
        zoom: {
            type: Number,
            required: true,
        },
        styles: {
            type: Number,
            required: true,
        },
    },
    setup(props, {attrs, slots, emit, expose}) {
        const path = computed(() =>
            `https://${props.user}.nextgis.com/resource/${props.resource}/display/tiny?base=osm-mapnik&lon=${props.lon}&lat=${props.lat}&angle=${props.angle}&zoom=${props.zoom}&styles=${props.styles}&linkMainMap=true&events=false&panel=none&controls=id%2Cma%2Cmd%2Ctv%2Csl%2Cie%2Cml%2Czo%2Czi%2Cis&panels=layers%2Csearch%2Cbookmark`
        )
        return {
            path,
        }
    },
    template: `
      <iframe v-bind:src="path" style="overflow:hidden"></iframe>
    `
}
