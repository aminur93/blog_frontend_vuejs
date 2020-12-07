<template>
    <div id="change_password">

        <v-container my-5>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Change Password</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="changePassword">

                                <v-text-field type="password" v-model="changePassData.password" label="New Password"></v-text-field>
                                <span v-if="errors.password" class="red--text">{{errors.password[0]}}</span>

                                <v-text-field type="password" v-model="changePassData.password_confirmation" label="New Password Confirmation"></v-text-field>
                                <span v-if="errors.password_confirmation" class="red--text">{{errors.password_confirmation[0]}}</span>

                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/dashboard/user">Back</v-btn>
                                    <v-btn text type="submit" class="success mr-2">Submit</v-btn>

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
        name: "change_password",
        title: 'Blog - Change Password',
        data(){
            return{
                changePassData: {
                    password: '',
                    password_confirmation: '',
                },

                errors: {},
            }
        },

        methods: {
            changePassword: async function(){
                try {

                    let id = this.$route.params.id;
                    let formData = new FormData();
                    formData.append('password', this.changePassData.password);
                    formData.append('password_confirmation', this.changePassData.password_confirmation);

                    await this.$store.dispatch('users/change_password', {id:id, data:formData}).then(()=>{
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'Password Updated Successful',
                            showConfirmButton: false,
                            timer: 2500
                        });
                    });

                    this.changePassData={};

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
            },
        },
    }
</script>

<style scoped>

</style>