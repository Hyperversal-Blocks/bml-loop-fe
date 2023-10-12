import {createRouter, createWebHistory} from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import New from "@/views/new/New.vue";
import Setup from "@/views/new/Setup.vue";
import Recruit from "@/views/new/Recruit.vue";
import Survey from "@/views/new/Survey.vue";
import Screening from "@/views/new/Screening.vue";
import OptionalSettings from "@/views/new/OptionalSettings.vue";
import Launch from "@/views/new/Launch.vue";

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