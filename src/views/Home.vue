<template>
    <div id="home-view">
        <h1>{{ welcomeMsg }}</h1>
        <h3>{{ description }}</h3>
        <hr>
        <br>
        <div class="title">Avez vous dit bonjour aujourd'hui à ...</div>
        <br>
        <div class="col s12 m8 offset-m2">
            <user-card :user="user" @remove="removeUser"></user-card>
            <a @click="randomUser" class="waves-effect waves-light btn"><i class="material-icons left">autorenew</i>Dire bonjour à quequ'un d'autre !</a>
        </div>
    </div>
</template>

<script>
    import users from '../json/users.json';
    import UserCard from "../components/user-card.vue";

    export default {
        name: 'home-view',
        components: {UserCard},
        data () {
            return {
                welcomeMsg: 'Bienvenue dans l\'intranet',
                description: 'La plate-forme social de l\'entreprise',
                user: users[0],
            }
        },

        methods:{
            randomUser: function () {
                this.user = users[Math.floor(Math.random() * (users.length - 0 + 0)) + 0]
            },
            removeUser: function (user) {
                users.splice(user)
            }
        }
    }
</script>
