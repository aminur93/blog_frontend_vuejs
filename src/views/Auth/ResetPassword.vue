<template>
    <div id="reset-password">

        <v-container>

            <v-row wrap>
                <v-col cols="12" md="6"  offset-md="3">
                    <v-card>
                        <v-card-title class="justify-center">Password Reset</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>

                            <v-form v-on:submit.prevent="resetPassword">
                                <v-text-field label="Email" v-model="reset_password.email" prepend-icon="mdi-email"></v-text-field>
                                <span v-if="errors.email" class="red--text">{{errors.email[0]}}</span>

                                <v-text-field type="password" label="Password" v-model="reset_password.password" prepend-icon="mdi-lock"></v-text-field>
                                <span v-if="errors.password" class="red--text">{{errors.password[0]}}</span>

                                <v-text-field type="password" label="Confirm Password" v-model="reset_password.password_confirmation" prepend-icon="mdi-lock"></v-text-field>
                                <span v-if="errors.password" class="red--text">{{errors.password[0]}}</span>

                                <v-row class="justify-end">

                                        <v-btn type="submit" text class="success mr-2">Reset</v-btn>

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
        name: "ResetPassword",
        data(){
            return{
                reset_password:{
                    email: '',
                    password: '',
                    password_confirmation: '',
                    resetToken: null
                },
                errors: {}
            }
        },

        methods: {
            resetPassword: async function(){
                try {
                    this.reset_password.resetToken = this.$route.query.token;

                    let formData = new FormData();
                    formData.append('email', this.reset_password.email);
                    formData.append('password', this.reset_password.password);
                    formData.append('password_confirmation', this.reset_password.password_confirmation);
                    formData.append('resetToken', this.reset_password.resetToken);

                    await this.$store.dispatch('change_password', formData).then(()=>{
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: this.$store.state.userinfo.message,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        this.$router.push('/login');
                    });

                    this.reset_password={};

                }catch (error) {
                    switch (error.response.status)
                    {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;

                        default:
                            this.$swal.fire({
                                icon: 'error',
                                text: 'Oops',
                                title: error.response.data.message,
                            });
                            break;
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .container{
        margin-top: 100px;
    }
</style>