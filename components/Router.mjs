import {createRouter, createWebHashHistory} from 'vue-router'

import MainPage from '../pages/MainPage.mjs'
import MapPage from '../pages/MapPage.mjs'

const routes = [
    {path: '/', component: MainPage},
    {path: '/maps/flood/:territory?', name: 'MapFlood', component: MapPage, props: true},
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})