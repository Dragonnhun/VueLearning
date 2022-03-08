<template>
  <div class="hold-transition login-page">
    <div class="login-box">
      <!-- /.login-logo -->
      <div class="card card-outline card-primary">
        <div class="card-header text-center">
          <NuxtLink to="/"><b>{{bannerText}}</b></NuxtLink>
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
              <input type="password" class="form-control" placeholder="Password">
              <v-input class="form-control" type="password" id="password" v-model="password" placeholder="Password" :responseStatus="responseStatus"
                       label="Password"  help="6 characters or more" />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
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

          <div class="social-auth-links text-center mt-2 mb-3">
            <a href="#" class="btn btn-block btn-primary">
              <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
            </a>
            <a href="#" class="btn btn-block btn-danger">
              <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
            </a>
          </div>
          <!-- /.social-auth-links -->

          <p class="mb-1">
            <a href="forgot-password.html">I forgot my password</a>
          </p>
          <p class="mb-0">
            <a href="register.html" class="text-center">Register a new membership</a>
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
import { Routes, requiresAuth } from '@/shared';
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

        this.$store.dispatch('signin', response);

        this.$router.push(this.$route.query.redirect || Routes.Home);

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
