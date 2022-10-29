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
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/views/AboutView.vue'),
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
