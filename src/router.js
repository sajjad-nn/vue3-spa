import { createRouter, createWebHistory } from 'vue-router';
import MyHome from './components/Home.vue';
import MyUser from './components/User.vue';
import Show from './components/show.vue';
import showPost from './components/showpost.vue';
import createPost from './components/createPost.vue';
import editPost from './components/editPost.vue';
import tamplateUser from './components/tamplateUser.vue';
import tamplatePost from './components/tamplateUser.vue';
import MyPost from './components/Post.vue';
import notFound from './components/notFound.vue';

const routes = [
    { path: '/', name: "home", component: MyHome },
    {
        path: '/users', name: "tamplateUser", component: tamplateUser, children: [
            { path: '', name: "users", component: MyUser },
            { path: ':id2', name: "Show", component: Show },
        ],


    },
    {
        path: '/posts', name: "tamplatePost", component: tamplatePost, children: [
            { path: '', name: "myposts", component: MyPost },
            { path: ':id', name: "showpost", component: showPost },
            { path: 'create', name: "createPost", component: createPost },
            { path: 'edit/:id', name: "editPost", component: editPost },
        ],
    },
    { path: '/:pathMatch(.*)*', name: 'notFound', component: notFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

//router.beforeEach((to,from,next)=>{
//console.log(to,from);
//if(to.name==='users'){
//next(false)
// }else{
// next()
//}
//});
export default router;