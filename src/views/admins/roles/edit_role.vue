<template>
    <div id="edit_role">

        <v-container my-5>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Edit Role</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="updateRole">

                                <v-text-field type="text" v-model="editRoleData.name" label="Role Name"></v-text-field>
                                <span v-if="errors.name" class="red--text">{{errors.name[0]}}</span>

                                <strong>Permission: </strong>

                                <v-row>
                                    <v-col cols="3" v-for="permission in permissions" :key="permission.id">
                                        <v-checkbox v-model="rolePermissions" color="green" :value="permission.id" :label="permission.name" hide-details></v-checkbox>
                                    </v-col>
                                </v-row>

                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/dashboard/role">Back</v-btn>
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
        name: "edit_role",
        title: 'Blog - Edit Role',

        data(){
            return{
                errors: {},
                permission: [],
            }
        },

        computed: {
            ...mapState({
                permissions: state => state.permission.permissions,
                editRoleData: state => state.role.role,
            }),

            ...mapGetters({
                editRolePermissionData: 'role/rolePermissions'
            }),

            rolePermissions: {
                get(){
                    return this.editRolePermissionData
                },

                set(value){

                    this.$store.commit('role/updateValue', value)
                }
            }
        },

        mounted(){
            this.getPermission();
            this.getRole(this.$route.params.id);
        },

        methods: {
            ...mapActions({
                getPermission: 'permission/get_permission',
                getRole: 'role/edit_role',
            }),

            updateRole: async function(){
                try {
                    let id = this.$route.params.id;
                    let formData = new FormData();
                    formData.append('name', this.editRoleData.name);
                    this.rolePermissions.forEach((item) => formData.append("permission[]", item));
                    //console.log(this.rolePermissions);

                    await this.$store.dispatch('role/update_role', {id:id, data:formData}).then(()=>{
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'Role Updated Successful',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        this.getRole(id);
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