import { createWebHistory, createRouter } from "vue-router";
import Main from "@/components/Main";
import Card from "@/components/Card";
import AddCard from "@/components/AddCard";
import EditCard from "@/components/EditCard";

const routes = [
    { path: '/', name: 'home', component: Main },
    { path: '/card:id', name: 'card',  component: Card },
    { path: '/add', name: 'add', component: AddCard },
    { path: '/edit:id', name: 'edit', component: EditCard },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;



