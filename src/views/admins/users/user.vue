<template>
    <div id="user">

        <v-container class="my-5">
            <v-row>
                <v-col cols="12">
                    <v-card>

                        <v-row>
                            <v-col col="6">
                                <v-card-title>User List</v-card-title>
                            </v-col>

                            <v-col cols="6">
                                <v-card-actions class="justify-end">
                                    <v-btn text color="success" router to="/dashboard/add_user">
                                        <v-icon small left>mdi-plus</v-icon>
                                        <span>Add New</span>
                                    </v-btn>
                                </v-card-actions>
                            </v-col>
                        </v-row>

                        <v-divider></v-divider>

                        <v-card-text>

                            <v-card-title>
                                All User List
                                <v-spacer></v-spacer>
                                <v-text-field
                                        v-model="search"
                                        append-icon="mdi-magnify"
                                        label="Search"
                                        single-line
                                        hide-details
                                        class="mb-5"
                                ></v-text-field>
                            </v-card-title>

                            <v-data-table :headers="headers" :items="users" :search="search"  class="elevation-1">

                                <template v-slot:item.role_name="{ item }">
                                    <v-chip class="mx-1" v-for="roleitem in item.roles" :key="roleitem.id" small color="green" text-color="white">
                                        <span style="display: inline-block;">{{ roleitem.name }}</span>
                                    </v-chip>
                                </template>

                                <template v-slot:item.actions="{ item }">

                                    <v-tooltip top>
                                        <template v-slot:activator="{ on }">
                                            <v-btn small text color="grey" v-on="on" router :to="`/dashboard/edit_user/${item.id}`">
                                                <v-icon left small>mdi-pencil</v-icon>
                                                <span right class="caption text-lowercase">Edit</span>
                                            </v-btn>
                                        </template>
                                        <span>Edit</span>
                                    </v-tooltip>

                                    <v-tooltip top>
                                        <template v-slot:activator="{ on }">
                                            <v-btn small text color="grey" v-on="on" @click="deleteUser(item.id)">
                                                <v-icon left small>mdi-delete</v-icon>
                                                <span right class="caption text-lowercase">Delete</span>
                                            </v-btn>
                                        </template>
                                        <span>Delete</span>
                                    </v-tooltip>

                                    <v-tooltip top>
                                        <template v-slot:activator="{ on }">
                                            <v-btn small text color="grey" v-on="on" router :to="`/dashboard/change_password/${item.id}`">
                                                <v-icon left small>mdi-form-textbox-password</v-icon>
                                                <span right class="caption text-lowercase">Change Password</span>
                                            </v-btn>
                                        </template>
                                        <span>Change Password</span>
                                    </v-tooltip>

                                </template>

                            </v-data-table>
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
        name: "user",
        title: 'Blog - User',
        data(){
            return{
                search: '',
            }
        },

        computed: {
            headers(){
                return[
                    {text: '#Sl', value:'id',  align: 'start', sortable: false},
                    {text: 'User Name', value:'name'},
                    {text: 'Email', value:'email'},
                    {text: 'Role Name', value:'role_name'},
                    {text: 'Actions', value: 'actions', align: 'center', sortable: false },
                ]
            },

            ...mapState({
                users: state => state.users.users
            }),
        },

        mounted(){
            this.getUsers();
        },

        methods: {
            ...mapActions({
                getUsers: 'users/get_user'
            }),

            deleteUser: async function(id){
                try {
                    await this.$store.dispatch('users/delete_user', id).then(()=>{
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'User Deleted Successful',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        this.getUsers();
                    });
                }catch (e) {
                    console.log(e);
                }
            },
        }
    }
</script>

<style scoped>

</style>