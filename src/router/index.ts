import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/AboutView.vue'),
        },
        {
            path: '/charts',
            name: 'charts',
            component: () => import('@/views/EChartsView.vue'),
        },
        {
            path: '/loginAndRegister',
            name: 'LoginAndRegister',
            component: () => import('@/views/LoginAndRegister.vue'),
        },
        {
            path: '/:pathMatch(.*)',
            name: '404NotFound',
            component: () => import('@/views/404NotFound.vue'),
        },
    ],
});

export default router;
