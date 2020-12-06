<template>
    <div id="edit_user">
        <v-container my-5>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Edit User</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="updateUser">

                                <v-text-field type="text" v-model="editUserData.name" label="Name"></v-text-field>
                                <span v-if="errors.name" class="red--text">{{errors.name[0]}}</span>

                                <v-text-field type="email" v-model="editUserData.email" label="Email"></v-text-field>
                                <span v-if="errors.email" class="red--text">{{errors.email[0]}}</span>

                                <v-text-field type="password" v-model="editUserData.password" label="Password"></v-text-field>
                                <span v-if="errors.password" class="red--text">{{errors.password[0]}}</span>

                                <v-text-field type="password" v-model="editUserData.password_confirmation" label="Confirm Password"></v-text-field>
                                <span v-if="errors.password_confirmation" class="red--text">{{errors.password_confirmation[0]}}</span>


                                <v-select
                                        v-model="editUserRoles"
                                        :items="roles"
                                        label="Select"
                                        multiple
                                        chips
                                        hint="What are the target role"
                                        persistent-hint
                                ></v-select>
                                <span v-if="errors.roles" class="red--text">{{errors.roles[0]}}</span>

                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/dashboard/user">Back</v-btn>
                                    <v-btn text type="submit" class="success mr-2">Edit</v-btn>

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

    import {mapState, mapActions, mapGetters} from 'vuex';

    export default {
        name: "edit_user",
        title: 'Blog - Edit User',
        data(){
            return{
                errors: {}
            }
        },

        computed: {
            ...mapState({
                roles: state => state.users.roles,
                editUserData: state => state.users.user,
            }),

            ...mapGetters({
                editUserRoleData: 'users/editUserRoles'
            }),

            editUserRoles: {
                get(){
                    return this.editUserRoleData
                },

                set(value){
                    this.$store.commit('users/updateValueRole', value);
                }
            }

        },

        mounted(){
            this.getRoles();
            this.editUser(this.$route.params.id);
        },

        methods: {
            ...mapActions({
                getRoles: 'users/get_role',
                editUser: 'users/edit_user',
            }),

            updateUser: async function(){
                try {
                    let id = this.$route.params.id;
                    let formData = new FormData();
                    formData.append('name', this.editUserData.name);
                    formData.append('email', this.editUserData.email);
                    formData.append('password', this.editUserData.password);
                    formData.append('password_confirmation', this.editUserData.password_confirmation);
                     formData.append("roles", this.editUserRoles);

                    await this.$store.dispatch('users/update_user', {id:id, data:formData}).then(()=>{
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'User Updated Successful',
                            showConfirmButton: false,
                            timer: 1500
                        });

                        this.editUser(id);
                    });
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
        }
    }
</script>

<style scoped>

</style>