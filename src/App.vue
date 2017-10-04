<template>
  <div id="app" class="row">
    <nav>
      <div class="nav-wrapper">
        <ul class="left hide-on-med-and-down">
          <li><a href="#!" class="active">Accueil</a></li>
          <li><a href="#!">Liste des collaborateurs</a></li>
        </ul>
        <ul class="right hide-on-med-and-down">
          <li>
            <a href="#!">Ajouter un collaborateur</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="col s8 offset-s2">
      <h1>{{ welcomeMsg }}</h1>
      <h3>{{ description }}</h3>
      <hr>
      <br>
      <div class="title">Avez vous dit bonjour aujourd'hui à ...</div>
      <br>
      <div class="col s12 m8 offset-m2">
        <div class="card horizontal">
          <div class="card-image col offset-m1" style="margin-top: 6%">
            <img class="responsive-img" :src="user.photo">
          </div>
          <div class="card-stacked">
            <div class="card-content" >
              <div class="name"><b>{{ fullname }}</b></div>
              <div class="col offset-m3">
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
        <a @click="randomUser" class="waves-effect waves-light btn"><i class="material-icons left">autorenew</i>Dire bonjour à quequ'un d'autre !</a>
      </div>
    </div>
  </div>
</template>

<script>
    import users from './json/users.json';
    export default {
        name: 'app',
        data () {
            return {
                welcomeMsg: 'Bienvenue dans l\'intranet',
                description: 'La plate-forme social de l\'entreprise',
                user: users[0],
            }
        },
        computed:{
          fullname(){
              return this.user.firstname + ' ' + this.user.lastname;
          }
        },
        filters:{
            getAge(birthdate){
              let [day, month, year] = birthdate.split("/");
              let dateBirth = new Date(year, month, day).getTime();
              return birthdate + ' (' + Math.floor((Date.now() - dateBirth) / (365.25 * 24 * 60 * 60 * 1000))+ ') ans';
          }
        },
        methods:{
            randomUser: function () {
                this.user = users[Math.floor(Math.random() * (users.length - 0 + 0)) + 0]
            },
        }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1{
    font-size: 50px;
  }

  h3{
    font-size: 20px;
  }

  .title{
    font-size: 30px;
  }

  a {
    color: #42b983;
  }

  li{
    text-align: left;
  }

</style>
