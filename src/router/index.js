import {createRouter, createWebHistory} from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import New from "@/views/app/new/New.vue";
import Setup from "@/views/app/new/Setup.vue";
import Recruit from "@/views/app/new/Recruit.vue";
import Survey from "@/views/app/new/Survey.vue";
import Screening from "@/views/app/new/Screening.vue";
import OptionalSettings from "@/views/app/new/OptionalSettings.vue";
import Launch from "@/views/app/new/Launch.vue";

const router = createRouter({
        history: createWebHistory(),
        routes:[
            {
                path: '/',
                component: () => Home
            },
            {
                path: '/about',
                component: () => About
            },
            {
             path:'/new',
                component: () => New,
                children: [
                    {
                        path:'setup',
                        component: () => Setup
                    },
                    {
                        path:'recruit',
                        component: () => Recruit
                    },
                    {
                        path:'survey',
                        component: () => Survey
                    },
                    {
                        path:'screening',
                        component: () => Screening
                    },
                    {
                        path:'settings',
                        component: () => OptionalSettings
                    },
                    {
                        path:'launch',
                        component: () => Launch
                    },

                ]
            }
        ]
    }
)

export default router