import {createRouter, createWebHashHistory} from 'vue-router'

import MainPage from '../pages/MainPage.mjs'
import MapPage from '../pages/MapPage.mjs'
import InDev from "../pages/InDev.mjs";

const routes = [
    {path: '/', component: MainPage},
    {path: '/atlas/flood/:territory?', name: 'MapFlood', component: MapPage, props: true},
    {path: '/maps/:territory?', name: 'Maps', component: InDev, props: {head: "Cartes"}},
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})