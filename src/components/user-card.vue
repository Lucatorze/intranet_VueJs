<template>
    <div id="user-card" class="card horizontal">
        <div class="card-image col offset-m1" style="margin-top: 6%">
            <img width="200px" height="150px" :src="user.photo">
        </div>
        <div class="card-stacked">
            <div class="card-content">
                <div class="name"><b>{{ fullname }}</b></div>
                <div class="col offset-m1">
                    <ul>
                        <li><i class="material-icons">email</i> {{ user.email }}</li>
                        <li><i class="material-icons">local_phone</i> {{ user.phone }}</li>
                        <li><i class="material-icons">perm_contact_calendar</i> {{ user.birthdate|getAge }}</li>
                        <li><i class="material-icons">location_on</i> {{ user.city }}, {{ user.country }}</li>
                    </ul>
                    <router-link :to="'/udpate/'+user._id">
                        <button class="waves-effect waves-light btn"><i class="material-icons">edit</i></button>
                    </router-link>
                    <button class="waves-effect waves-light btn" @click="remove(user)"><i class="material-icons">delete_forever</i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "user-card",

  props: {
    user: { type: Object, required: true }
  },

  computed: {
    fullname() {
      return this.user.firstname + " " + this.user.lastname;
    }
  },
  filters: {
    getAge(birthdate) {
      let [year, month, day] = birthdate.split("-");
      let dateBirth = new Date(year, month, day).getTime();
      return (
        birthdate +
        " (" +
        Math.floor((Date.now() - dateBirth) / (365.25 * 24 * 60 * 60 * 1000)) +
        ") ans"
      );
    }
  },
  methods: {
    remove: function(user) {
      this.$emit("remove", user);
    },
    update: function(user) {
      this.$emit("update", user);
    }
  }
};
</script>
