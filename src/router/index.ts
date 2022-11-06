import { createRouter, createWebHashHistory } from 'vue-router';
// createWebHistory 为HTML5模式
// createWebHashHistory 为Hash模式路由

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue'),
            children: [
                {
                    path: '/index',
                    component: () => import('@/views/Home/DefaultView.vue'),
                },
                {
                    path: 'posts',
                    component: () => import('@/views/Home/PostsView.vue'),
                },
                {
                    path: 'setting',
                    component: () => import('@/views/Home/SettingView.vue'),
                },
                {
                    path: 'publish',
                    component: () => import('@/views/Home/PublishView.vue'),
                },
                {
                    path: 'code',
                    component: () => import('@/views/Home/CodeView.vue'),
                },
                {
                    path: 'profile',
                    component: () => import('@/views/Home/ProfileView.vue'),
                },
            ],
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
