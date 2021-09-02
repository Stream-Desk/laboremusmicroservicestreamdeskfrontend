<template>
  <v-container grid-list-xs>
    <v-content>
      <form>
        <v-card width="300" class="mx-auto mt-9" id="card">
          <v-card-title primary-title class="login-html"
            >Stream|
            <span>Desk</span>
          </v-card-title>
          <v-divider inset></v-divider>
          <v-card-title primary-title class="register-html"
            >Register
          </v-card-title>
          <v-card-text class="login-wrap">
            <label for="user" class="label">Email</label>
            <input
              id="user"
              type="email"
              class="input"
              v-model="email"
              required
            />

            <label for="pass" class="label">Password</label>
            <input
              id="pass"
              type="password"
              class="input"
              data-type="password"
              required
              v-model="password"
            />
            <label for="pass" class="label">Username</label>
            <input
              id="pass"
              type="text"
              class="input"
              required
              v-model="username"
            />
          </v-card-text>
          <v-card-actions>
            <v-btn class="btn" @click="submit" type="submit" rounded="pill"
              >Sign In</v-btn
            >
          </v-card-actions>
          <v-divider inset></v-divider>
          <p>Already Member?</p>
        </v-card>
      </form>
    </v-content>
  </v-container>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {},
};
</script>

<style scoped>
body {
  margin: 0;
  font: 600 16px/18px "Open Sans", sans-serif;
}
*,
::after,
::before {
  box-sizing: border-box;
}
.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
  display: block;
}
.login-wrap {
  width: 100%;
  margin: auto;
  max-width: 500px;
  min-height: 200px;
  position: relative;
}
.login-html {
  padding-top: 25px;
  backface-visibility: hidden;
  /* transition: all 0.4s linear; */
  text-transform: uppercase;
  color: #f6fa1f;
  margin-left: 20%;
}
.login-html span {
  color: #fff;
}
.register-html {
  margin-inline-start: 10px;
  color: white;
  text-transform: uppercase;
  transition: all 0.4s linear;
}
.input [data-type="password"] {
  text-security: circle;
  -webkit-text-security: circle;
}
.btn {
  background: #f6fa1f;
  width: 80%;
  height: 38px;
  border-radius: 2px;
  position: relative;
  display: inline-block;
  color: rgb(0, 0, 0);
  margin-inline-start: 20px;
}
input {
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
  margin-bottom: 15px;
  width: 80%;
  height: 35px;
  display: block;
  border: none;
  padding: 15px 20px;
  border-radius: 25px;
  background: rgba(197, 220, 230, 0.1);
  margin-inline-start: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 2);
}
label {
  font-size: 14px;
  color: #aaa;
  text-transform: capitalize;
  margin-inline-start: 20px;
}
/* a {
  margin: 33%;
  color: inherit;
  text-decoration: none;
} */
#card {
  background: #404040;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 2);
  border: 1px solid #f6fa1f;
}
p {
  color: #fff;
  text-align: center;
}
</style>
