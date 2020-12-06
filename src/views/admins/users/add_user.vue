<template>
    <div id="add_user">

        <v-container my-5>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Add User</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="addUser">

                                <v-text-field type="text" v-model="userData.name" label="Name"></v-text-field>
                                <span v-if="errors.name" class="red--text">{{errors.name[0]}}</span>

                                <v-text-field type="email" v-model="userData.email" label="Email"></v-text-field>
                                <span v-if="errors.email" class="red--text">{{errors.email[0]}}</span>

                                <v-text-field type="password" v-model="userData.password" label="Password"></v-text-field>
                                <span v-if="errors.password" class="red--text">{{errors.password[0]}}</span>

                                <v-text-field type="password" v-model="userData.password_confirmation" label="Confirm Password"></v-text-field>
                                <span v-if="errors.password_confirmation" class="red--text">{{errors.password_confirmation[0]}}</span>


                                    <v-select
                                            v-model="userData.roles"
                                            :items="roles"
                                            label="Select"
                                            multiple
                                            chips
                                            hint="What are the target regions"
                                            persistent-hint
                                    ></v-select>
                                <span v-if="errors.roles" class="red--text">{{errors.roles[0]}}</span>

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

    import {mapState, mapActions} from 'vuex';

    export default {
        name: "add_user",
        title: 'Blog - Add user',
        data(){
            return{
                userData: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                    roles: []
                },

                errors: {},
            }
        },

        computed: {
            ...mapState({
                roles: state => state.users.roles
            }),
        },

        mounted(){
            this.getRoles();
        },

        methods: {
            ...mapActions({
                getRoles: 'users/get_role'
            }),

            addUser: async function(){
                try {
                    let formData = new FormData();
                    formData.append('name', this.userData.name);
                    formData.append('email', this.userData.email);
                    formData.append('password', this.userData.password);
                    formData.append('password_confirmation', this.userData.password_confirmation);

                    this.userData.roles.forEach((item) => formData.append("roles[]", item));
                    console.log(this.userData.roles);

                    await this.$store.dispatch('users/add_user', formData).then(()=>{
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'User Added Successful',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });

                    this.userData = {};
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