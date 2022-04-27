import { createWebHistory, createRouter } from "vue-router";
import Todos from "./component/Todos.vue";

const routes = [
    {
        path: "/",
        name: "Todos",
        component: Todos,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("./views/NotFound.vue"),
    },
    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: () => import("./views/ContactEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path:"/addcontacts",
        name:"contact.add",
        component: () => import("./views/ContactAdd.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;