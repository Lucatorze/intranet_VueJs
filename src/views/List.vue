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
            <select class="browser-default">
                <option value="name">Nom</option>
                <option value="age">Age</option>
                <option value="city">Ville</option>
            </select>
        </div>

        <br>
        <div class="col s12">
            <div v-for="(user, i) in filteredUser" :key="i" class="card horizontal col s5 offset-m1">
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
            </div>
        </div>
    </div>
</template>

<script>

    import users from '../json/users.json';
    export default {
        name: 'list-view',

        data () {
            return {
                users : users,
                search: ''
            }
        },
        computed: {
            filteredUser:function()
            {
                var self=this;
                return this.users.filter(function(user){
                    return user.lastname.toLowerCase().includes(self.search.toLowerCase())
                        || user.firstname.toLowerCase().includes(self.search.toLowerCase())
                        || user.country.toLowerCase().includes(self.search.toLowerCase())
                        || user.city.toLowerCase().includes(self.search.toLowerCase());
                });
                return this.users;
            }
        },
        methods:{
            fullname(user){
                return user.firstname + ' ' + user.lastname;
            }
        },
        filters:{
            getAge(birthdate){
                let [day, month, year] = birthdate.split("/");
                let dateBirth = new Date(year, month, day).getTime();
                return birthdate + ' (' + Math.floor((Date.now() - dateBirth) / (365.25 * 24 * 60 * 60 * 1000))+ ') ans';
            }
        },
    }
</script>
