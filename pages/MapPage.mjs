import {computed} from 'vue';
import NextGisMap from '../components/NextGisMap.mjs';

const mapParams = {
    congo: {
        user: "patrick1mab",
        resource: 172,
        lon: 14.926,
        lat: -0.663,
        angle: 0,
        zoom: 6,
        styles: 165,
    },
    brazzaville: {
        user: "patrick1mab",
        resource: 174,
        lon: 15.258,
        lat: -4.239,
        angle: 0,
        zoom: 12,
        styles: 163,
    }
};
const headers = {
    congo: "Congo inondation",
    brazzaville: "Brazzaville inondation",
};

export default {
    name: 'MapPage', // необходимо для ссылки на самого себя
    components: {
        NextGisMap
    },
    directives: {},
    emits: [],
    props: {
        territory: {
            type: String,
            default: "congo",
        }
    },
    setup(props, {attrs, slots, emit, expose}) {
        const mapParam = computed(() =>
            mapParams[props.territory.toLowerCase() || 'congo']
        );
        const header = computed(() =>
            headers[props.territory.toLowerCase() || 'congo']
        );
        return {
            mapParam,
            header
        }
    },
    template: `
      <template v-if="mapParam">
        <h2>
          {{ header }}
        </h2>
        <NextGisMap v-bind="mapParam"/>
      </template>
      <template v-else>
        <div class="alert alert-warning" role="alert">
          Carte introuvable.
        </div>
      </template>
    `
}
