<template>
    <div id="edit_permission">

        <v-container my-5>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Edit Permission</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="updatePermission">
                                <v-text-field type="text" v-model="permissionEditData.name" label="Permission Name"></v-text-field>
                                <span v-if="errors.name" class="red--text">{{errors.name[0]}}</span>

                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/dashboard/permission">Back</v-btn>
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
    import {mapState} from 'vuex';

    export default {
        name: "edit_permission",
        title: 'Blog - Edit Permission',
        data(){
            return{
                errors: {}
            }
        },

        computed: {
            ...mapState({
                permissionEditData: state => state.permission.permission
            }),
        },

        mounted(){
            this.editPermission();
        },

        methods: {
            editPermission: async function(){
                try {
                    let id = this.$route.params.id;

                    await this.$store.dispatch('permission/edit_permission', id);
                }catch (e) {
                    console.log(e);
                }
            },

            updatePermission: async function(){
                try {
                    let id = this.$route.params.id;
                    let formData = new FormData();
                    formData.append('name', this.permissionEditData.name);

                    await this.$store.dispatch('permission/update_permission', {id:id, data:formData}).then(()=>{
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'Permission Updated Successful',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        this.editPermission();
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
        },
    }
</script>

<style scoped>

</style>