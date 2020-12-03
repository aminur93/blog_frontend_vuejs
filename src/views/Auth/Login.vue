<template>
    <div id="login">

        <v-container>

            <v-row wrap>
                <v-col cols="12" md="6"  offset-md="3">
                    <v-card>
                        <v-card-title class="justify-center">Login</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="Userlogin">
                                <v-text-field label="Email" v-model="login.email" prepend-icon="mdi-email"></v-text-field>

                                <v-text-field type="password" label="Password" v-model="login.password" prepend-icon="mdi-lock"></v-text-field>

                                <v-row>
                                    <v-col col="12" sm="6" md="8" class="mt-2">
                                        <router-link to="/forget-password" class="">forget Password</router-link>
                                    </v-col>

                                    <v-col col="4" md="4">
                                        <v-btn type="submit" text class="success float-right">Login</v-btn>
                                    </v-col>

                                </v-row>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>

    export default {
        name: "Login",
        title: 'Blogs - Login',
        data(){
            return{
                login: {
                    email: '',
                    password: ''
                }
            }
        },

        methods: {
            Userlogin: async function() {
                try {

                    let formData = new FormData();
                    formData.append('email', this.login.email);
                    formData.append('password', this.login.password);

                    await this.$store.dispatch('login', formData);

                    await this.$router.push({ path: '/dashboard' });


                    this.login.email = '';
                    this.login.password = '';

                }catch (error) {
                    console.log('failed');
                }

            },
        },
    }
</script>

<style scoped>
.container{
    margin-top: 100px;
}
</style>