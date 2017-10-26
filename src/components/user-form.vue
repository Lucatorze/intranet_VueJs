<template>
    <div id="user-form">
        <form class="col s12" @submit.prevent>
            <div class="row">
                <div class="input-field col s6">
                    <input id="firstname" type="text" class="validate" v-model="user.firstname">
                    <label for="firstname">First Name</label>
                </div>
                <div class="input-field col s6">
                    <input id="lastname" type="text" class="validate" v-model="user.lastname">
                    <label for="lastname">Last Name</label>
                </div>
            </div>
            <div class="row">
                <p>
                    <input name="gender" type="radio" id="male" value="male" v-model="user.gender">
                    <label for="male">Homme</label>
                </p>
                <p>
                    <input name="gender" type="radio" id="female" value="female" v-model="user.gender">
                    <label for="female">Femme</label>
                </p>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="email" type="email" class="validate" v-model="user.email">
                    <label for="email">Email</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6">
                    <input id="phone" type="tel" class="validate" v-model="user.phone">
                    <label for="phone">Telephone</label>
                </div>
                <div class="input-field col s6">
                    <input id="birthdate" type="date" class="datepicker" v-model="user.birthdate">
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6">
                    <input id="city" type="text" class="validate" v-model="user.city">
                    <label for="city">Ville</label>
                </div>
                <div class="input-field col s6">
                    <input id="country" type="text" class="validate" v-model="user.country">
                    <label for="country">Pays</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="photo" type="text" class="validate" v-model="user.photo">
                    <label for="photo">Photo</label>
                </div>
            </div>
            <button class="waves-effect waves-light btn" type="submit">Envoyer</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'user-form',
        data() {
            return {
                user : {}
            }
        }
    }
</script>
