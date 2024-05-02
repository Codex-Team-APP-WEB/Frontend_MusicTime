import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import AboutComponent from "../public/pages/about.component.vue";
import MusicianManagementComponent from "../profiles/pages/musician-management.component.vue";
import subscriptionManagementComponent from "../subscription/pages/subscription-management.component.vue";
import MusicianViewComponent from "../profiles/pages/musician-view.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/home",    component: HomeComponent, meta: { title: "Home"}},
        { path: "/about",   component: AboutComponent, meta: { title: "About us"}},
        { path: '/Management', component: MusicianManagementComponent, meta: { title: 'Management' } },
        { path: '/Musician', component: MusicianViewComponent, meta: { title: 'Musician' } },
        { path: "/",        redirect: "/home"},
        { path: '/Subscription', component: subscriptionManagementComponent, meta: { title: 'Subscription' } }
    ]
});

export default router;
