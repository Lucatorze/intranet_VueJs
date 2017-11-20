<template>
    <div id="add-view">
        <h1>Ajouter un collaborateur</h1>
        <hr>
        <br>
        <user-form @send="addUser"></user-form>
    </div>
</template>

<script>
import UserForm from "../components/user-form.vue";
import UserService from "../services/UserService.js";

export default {
  components: { UserForm },
  name: "add-view",
  methods: {
    addUser: function(user) {
      UserService.addUser(user);
    }
  }
};
</script>
