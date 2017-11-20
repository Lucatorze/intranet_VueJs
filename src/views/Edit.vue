<template>
    <div id="edit-view">
        <h1>Modifier un collaborateur</h1>
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
  name: "edit-view",
  methods: {
    editUser: function(user) {
      UserService.fetchOne(user);
    }
  }
};
</script>
