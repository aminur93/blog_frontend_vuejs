<template>
    <div id="add_role">

        <v-container my-5>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Add Role</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="addRole">

                                <v-text-field type="text" v-model="roleData.name" label="Role Name"></v-text-field>
                                <span v-if="errors.name" class="red--text">{{errors.name[0]}}</span>

                                <strong>Permission: </strong>

                                <v-row>
                                    <v-col cols="3" v-for="permission in permissions" :key="permission.id">
                                        <v-checkbox v-model="roleData.permission" color="green" :value="permission.id" :label="permission.name" hide-details></v-checkbox>
                                    </v-col>
                                </v-row>

                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/dashboard/role">Back</v-btn>
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
        name: "add_role",
        title: 'Blog - Add Role',
        data(){
            return{
                roleData: {
                    name: '',
                    permission: []
                },

                errors: {},
            }
        },

        computed: {
            ...mapState({
                permissions: state => state.permission.permissions
            }),
        },

        mounted(){
            this.getPermission();
        },

        methods: {
            ...mapActions({
                getPermission: 'permission/get_permission'
            }),

            addRole: async function (){
                try {
                    let formData = new FormData();
                    formData.append('name', this.roleData.name);
                    //formData.append('permission', JSON.stringify(this.roleData.permission));

                    this.roleData.permission.forEach((item) => formData.append("permission[]", item));


                    await this.$store.dispatch('role/add_role', formData).then(()=> {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'Role Added Successful',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });

                    this.roleData = {};
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