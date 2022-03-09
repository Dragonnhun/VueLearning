<template>
  <div class="hold-transition login-page">
    <div class="login-box">
      <!-- /.login-logo -->
      <div class="card card-outline card-primary">
        <div class="card-header text-center">
          <v-link to="/"><b>{{bannerText}}</b></v-link>
        </div>
        <div class="card-body">
          <p class="login-box-msg">Sign in to start your session</p>

          <form ref="form" @submit.prevent="submit" :class="{ error:responseStatus, loading }">
            <div class="input-group mb-3">
              <v-input id="userName" v-model="userName" label="Email" class="form-control"
                       placeholder="Email" :responseStatus="responseStatus" help="Email you signed up with"/>
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <v-input type="password" id="password" v-model="password" placeholder="Password" :responseStatus="responseStatus"
                       label="Password"  help="6 characters or more" />
            </div>
            <div class="row">
              <div class="col-8">
                <div class="icheck-primary">
                  <v-checkbox id="rememberMe" v-model="rememberMe" :responseStatus="responseStatus">
                    <b>Remember Me</b>
                  </v-checkbox>

                </div>
              </div>
              <!-- /.col -->
              <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">Sign In</button>
              </div>
              <!-- /.col -->
            </div>
          </form>

          <p class="mb-1">
            <v-link to="/forgot-password" class="text-center">I forgot my password</v-link>
          </p>
          <p class="mb-0">
            <v-link to="/signup" class="text-center">Register a new membership</v-link>
          </p>

        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { auth } from '@/shared/gateway';
import { Authenticate } from '../shared/dtos';

export default {

  data: () => ({
    userName: '',
    password: '',
    rememberMe: true,
    loading: false,
    responseStatus: null
  }),

  computed: {
    ...mapGetters(["nav", "userAttributes", "userSession", "bannerText"])
  },

  mounted() {
    if (this.userSession != null) {
      this.$router.push(this.$route.query.redirect || Routes.Home);
    }
  },

  methods: {

    async submit() {
      try {
        this.loading = true;
        this.responseStatus = null;

        const response = await auth(new Authenticate({
          provider: 'credentials',
          userName: this.userName,
          password: this.password,
          rememberMe: this.rememberMe,
        }));

        await this.$store.dispatch('signin', response);

        await this.$router.push(this.$route.query.redirect || Routes.Home);

      } catch (e) {
        this.responseStatus = e.responseStatus || e;
      } finally {
        this.loading = false;
      }
    },

    switchUser(email) {
      this.userName = email;
      this.password = 'p@55wOrd';
    }
  }
}
</script>

<style scoped>

</style>
