import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import AboutComponent from "../public/pages/about.component.vue";
import MusicianManagementComponent from "../profiles/pages/musician-management.component.vue";
import subscriptionManagementComponent from "../subscription/pages/subscription-management.component.vue";
import Musician from "../musician/pages/musician.component.vue";
import ContractViewComponent from "../contract/pages/contract-view.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/home",    component: HomeComponent, meta: { title: "Home"}},
        { path: "/about",   component: AboutComponent, meta: { title: "About us"}},
        { path: '/management', component: MusicianManagementComponent, meta: { title: 'Management' } },
        { path: "/",        redirect: "/home"},
        { path: '/subscription', component: subscriptionManagementComponent, meta: { title: 'Subscription' } },

        //Path con boton no es de toolbar
        { path: '/musician/:id', component: Musician, meta: { title: 'Musician' }, props: true },
        { path: '/contract/:id', component: ContractViewComponent, meta: { title: 'Contract' }, props: true }
    ]
});

export default router;
