
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import("../views/product.vue")
    },
    {
        path: "/cart",
        component: () => import("../views/cart.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router