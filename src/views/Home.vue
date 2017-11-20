<template>
    <div id="home-view">
        <h1>{{ welcomeMsg }}</h1>
        <h3>{{ description }}</h3>
        <hr>
        <br>
        <div class="title">Avez vous dit bonjour aujourd'hui à ...</div>
        <br>
        <div class="col s12 m8 offset-m3">
            <user-card v-if="user" :user="user" @remove="removeUser" class="card horizontal col s10"></user-card>
        </div>
        <a @click="randomUser" class="waves-effect waves-light btn"><i class="material-icons left">autorenew</i>Dire bonjour à quequ'un d'autre !</a>
    </div>
</template>

<script>
import UserCard from "../components/user-card.vue";
import UserService from "../services/UserService.js";

export default {
  name: "home-view",
  components: { UserCard },
  data() {
    return {
      welcomeMsg: "Bienvenue dans l'intranet",
      description: "La plate-forme social de l'entreprise",
      users: [],
      user: null
    };
  },

  methods: {
    randomUser: function() {
      this.user = this.users[
        Math.floor(Math.random() * (this.users.length - 0 + 0)) + 0
      ];
    },
    removeUser: function(user) {
      UserService.removeUser(user).then(response => {
          this.users = this.users.filter(u => {return response.deleted._id != u._id})
          this.randomUser()
      });
    }
  },

  created() {
    UserService.fetchAll().then(users => {
      this.users = users;
      this.randomUser();
    });
  }
};
</script>
