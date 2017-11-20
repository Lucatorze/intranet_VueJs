<template>
    <div id="list-view">
        <h1>Liste des collaborateurs</h1>
        <hr>
        <br>
        <div class="col s4 offset-s1">
            <input placeholder="Rechercher ..." id="search" v-model="search" type="text" class="validate">
        </div>
        <div class="col s2">
        Filtrer par :
        </div>
        <div class="col s4">
            <select class="browser-default" v-model="searchBy">
                <option value="lastname" selected>Nom</option>
                <option value="firstname">Prenom</option>
                <option value="country">Pays</option>
                <option value="city">Ville</option>
            </select>
        </div>

        <br>
        <div class="col s12">
            <user-card v-for="(user, i) in filteredUser" :key="i" :user="user" @remove="removeUser" class="card horizontal col s6 "></user-card>
        </div>
    </div>
</template>

<script>
import UserCard from "../components/user-card.vue";
import UserService from "../services/UserService.js";

export default {
  name: "list-view",
  components: { UserCard },
  data() {
    return {
      users: [],
      search: "",
      searchBy: "lastname"
    };
  },
  computed: {
    filteredUser: function() {
      var self = this;
      return this.users.filter(function(user) {
        if (self.searchBy === "lastname") {
          return user.lastname
            .toLowerCase()
            .includes(self.search.toLowerCase());
        } else if (self.searchBy === "firstname") {
          return user.firstname
            .toLowerCase()
            .includes(self.search.toLowerCase());
        } else if (self.searchBy === "country") {
          return user.country.toLowerCase().includes(self.search.toLowerCase());
        } else if (self.searchBy === "city") {
          return user.city.toLowerCase().includes(self.search.toLowerCase());
        }
      });
      return this.users;
    }
  },
  methods: {
    removeUser: function(user) {
      UserService.removeUser(user).then(response => {
          this.users = this.users.filter(u => {return response.deleted._id != u._id})
      });
    }
  },

  created() {
    UserService.fetchAll().then(users => {
      this.users = users;
    });
  }
};
</script>
