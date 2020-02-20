import Vue from 'vue';
import Router from 'vue-router';
import About from '../Page/About/About';
import Inquiry from '../Page/Inquiry/Inquiry';
import Location from '../Page/Location/Location';
import Machine from '../Page/Machine/Machine';
import MachineDetail from '../Page/Machine/Machine_detail';
import Index from '../Page/index.vue';


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '',
            name: 'Index',
            component: Index,

        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/inquiry',
            name: 'Inquiry',
            component: Inquiry
        },
        {
            path: '/location',
            name: 'Location',
            component: Location
        },
        {
            path: '/machine',
            name: 'Machine',
            component: Machine
        },
        {
            path: '/machinedetail',
            name: 'MachineDetail',
            component: MachineDetail
        },



    ]
})