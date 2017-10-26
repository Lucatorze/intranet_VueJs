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
            <user-card v-for="(user, i) in filteredUser" :key="i" :user="user" class="card horizontal col s5 offset-m1" @remove="removeUser"></user-card>
            <!--<div v-for="(user, i) in filteredUser" :key="i" class="card horizontal col s5 offset-m1">
                <div class="card-image col s3 " style="margin-top: 6%">
                    <img class="responsive-img" :src="user.photo">
                </div>
                <div class="card-stacked col s9">
                    <div class="card-content" >
                        <div class="name"><b>{{ fullname(user) }}</b></div>
                        <div class="col ">
                            <ul>
                                <li><i class="material-icons">email</i> {{ user.email }}</li>
                                <li><i class="material-icons">local_phone</i> {{ user.phone }}</li>
                                <li><i class="material-icons">perm_contact_calendar</i> {{ user.birthdate|getAge }}</li>
                                <li><i class="material-icons">location_on</i> {{ user.city }}, {{ user.country }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>-->
        </div>
    </div>
</template>

<script>
    import UserCard from "../components/user-card.vue";
    import users from '../json/users.json';
    export default {
        name: 'list-view',
        components: {UserCard},
        data () {
            return {
                users : users,
                search: '',
                searchBy: 'lastname'
            }
        },
        computed: {
            filteredUser:function()
            {
                var self=this;
                return this.users.filter(function(user){
                    if(self.searchBy === "lastname"){
                        return user.lastname.toLowerCase().includes(self.search.toLowerCase());
                    }else if(self.searchBy === "firstname"){
                        return user.firstname.toLowerCase().includes(self.search.toLowerCase());
                    }else if(self.searchBy === "country"){
                        return user.city.toLowerCase().includes(self.search.toLowerCase());
                    }else if(self.searchBy === "city"){
                        return user.city.toLowerCase().includes(self.search.toLowerCase());
                    }
                });
                return this.users;
            }
        }
    }
</script>
