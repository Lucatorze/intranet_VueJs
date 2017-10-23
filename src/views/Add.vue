<template>
    <div id="add-view">
        <h1>Ajouter un collaborateur</h1>
        <hr>
        <br>
        <form class="col s12">
            <div class="row">
                <div class="input-field col s6">
                    <input id="firstname" type="text" class="validate">
                    <label for="firstname">First Name</label>
                </div>
                <div class="input-field col s6">
                    <input id="lastname" type="text" class="validate">
                    <label for="lastname">Last Name</label>
                </div>
            </div>
            <div class="row">
                <p>
                    <input name="gender" type="radio" id="male" />
                    <label for="male">Homme</label>
                </p>
                <p>
                    <input name="gender" type="radio" id="female" />
                    <label for="female">Femme</label>
                </p>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="email" type="email" class="validate">
                    <label for="email">Email</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6">
                    <input id="phone" type="tel" class="validate">
                    <label for="phone">Telephone</label>
                </div>
                <div class="input-field col s6">
                    <input id="birthdate" type="date" class="datepicker">
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6">
                    <input id="city" type="text" class="validate">
                    <label for="city">Ville</label>
                </div>
                <div class="input-field col s6">
                    <input id="country" type="text" class="validate">
                    <label for="country">Pays</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="photo" type="text" class="validate">
                    <label for="photo">Photo</label>
                </div>
            </div>
            <button class="waves-effect waves-light btn" type="submit">Envoyer</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'add-view',
    }
</script>
