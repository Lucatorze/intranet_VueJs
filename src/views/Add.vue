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
    export default {
        components: {UserForm},
        name: 'add-view',
        methods:{
            addUser: function (user) {
                console.log(user)
            },
        }
    }
</script>
