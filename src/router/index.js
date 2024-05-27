import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import AboutComponent from "../public/pages/about.component.vue";
import MusicianManagementComponent from "../profiles/pages/musician-management.component.vue";
import subscriptionManagementComponent from "../subscription/pages/subscription-management.component.vue";
import Musician from "../musician/pages/musician.component.vue";
import ContractViewComponent from "../contract/pages/contract-view.component.vue";
import paymentGatewayComponent from "../subscription/pages/payment-gateway.component.vue";
import ContractPanelComponent from "../contract/pages/contract-panel.component.vue";
import ContractCreationComponent from "../contract/pages/contract-creation.component.vue";
import RegisterViewComponent from "../profiles/pages/register-view.component.vue";
import LoginViewComponent from "../profiles/pages/login-view.component.vue";
import PageNotFoundComponent from "../public/pages/page-not-found.component.vue";
import CostumerEditProfileComponent from "../profiles/pages/costumer-edit-profile.component.vue";
import MusicEditProfileComponent from "../profiles/pages/music-edit-profile.component.vue";
import EnterpriseEditProfileComponent from "../profiles/pages/enterprise-edit-profile.component.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/home",    component: HomeComponent, meta: { title: "Home"}},
        { path: "/about",   component: AboutComponent, meta: { title: "About us"}},
        { path: '/management', component: MusicianManagementComponent, meta: { title: 'Management' } },
        { path: "/",        redirect: "/home"},
        { path: '/subscription', component: subscriptionManagementComponent, meta: { title: 'Subscription' } },
        { path: '/contract-panel', component: ContractPanelComponent, meta: { title: 'Contract Panel' } },
        { path: '/costumer-edit', name: 'costumer-edit-profile', component: CostumerEditProfileComponent, meta: { title: 'Costumer Edit Profile' } },
        { path: '/music-edit', name: 'music-edit-profile', component: MusicEditProfileComponent, meta: { title: 'Music Edit Profile' } },
        { path: '/enterprise-edit', name: 'enterprise-edit-profile', component: EnterpriseEditProfileComponent, meta: { title: 'Enterprise Edit Profile' } },

        //Path con boton no es de toolbar
        { path: '/musician/:id', component: Musician, meta: { title: 'Musician' }, props: true },
        { path: '/contract/:id', component: ContractCreationComponent, meta: { title: 'Contract' }, props: true },
        { path: '/payment', component: paymentGatewayComponent, meta: { title: 'Payment' }  },
        { path: '/contract-view/:id', component: ContractViewComponent, meta: { title: 'Contract View' }  },
        { path: '/register', component: RegisterViewComponent, meta: { title: 'Register' }  },
        { path: '/login', component: LoginViewComponent, meta: { title: 'Login' }  },


        //Path page not found
        {path: '/:pathMatch(.*)*', name: 'not-found', component: PageNotFoundComponent }



    ]
});

export default router;
