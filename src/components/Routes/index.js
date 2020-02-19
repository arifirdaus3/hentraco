import Vue from 'vue';
import Router from 'vue-router';
import About from '../Page/About/About';
import Inquiry from '../Page/Inquiry/Inquiry';
import Location from '../Page/Location/Location';
import Machine from '../Page/Machine/Machine';
import Index from '../Page/index.vue';


Vue.use(Router)

export default new Router({
    base: '/~hentrac',
    routes: [
        {
            path: '',
            name: 'Index',
            component: Index,
            children:[
                {
                    path: 'about',
                    name: 'About',
                    component: About
                },
                {
                    path: 'inquiry',
                    name: 'Inquiry',
                    component: Inquiry
                },
                {
                    path: 'location',
                    name: 'Location',
                    component: Location
                },
                {
                    path: 'machine',
                    name: 'Machine',
                    component: Machine
                },
            ]
        },
        
        
        
    ]
})