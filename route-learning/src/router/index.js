import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import TeamsList from '../components/teams/TeamsList.vue';
import UsersList from '../components/users/UsersList.vue';
import TeamMembers from '../components/teams/TeamMembers.vue';
import NotFound from '../components/nav/NotFound.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/teams' },
  {
    name: 'teams',
    path: '/teams',
    component: TeamsList,
    children: [
      { name: 'team-members', path: ':teamId', component: TeamMembers, props: true } // /teams/t1
    ]
  }, // our-domain.com/teams => TeamsList
  { path: '/users', component: UsersList },

  { path: '/:notFound(.*)', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
