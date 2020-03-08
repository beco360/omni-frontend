import Signup from '../views/auth/Signup.vue';
import Login from '../views/auth/Login.vue';
export default [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    }
]