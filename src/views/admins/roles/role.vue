<template>
    <div id="role">

        <v-container class="my-5">
            <v-row>
                <v-col cols="12">
                    <v-card>

                        <v-row>
                            <v-col col="6">
                                <v-card-title>Role List</v-card-title>
                            </v-col>

                            <v-col cols="6">
                                <v-card-actions class="justify-end">
                                    <v-btn text color="success" router to="/dashboard/add_role">
                                        <v-icon small left>mdi-plus</v-icon>
                                        <span>Add New</span>
                                    </v-btn>
                                </v-card-actions>
                            </v-col>
                        </v-row>

                        <v-divider></v-divider>

                        <v-card-text>

                            <v-card-title>
                                All Role List
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

                            <v-data-table :headers="headers" :items="roles" :search="search"  class="elevation-1">

                                <template v-slot:item.permission_name="{item}">
                                    <span v-if="item.permission_name">
                                        <v-chip medium color="green" text-color="white">
                                            {{ item.permission_name }}
                                        </v-chip>
                                    </span>
                                </template>

                                <template v-slot:item.actions="{ item }">

                                    <v-tooltip top>
                                        <template v-slot:activator="{ on }">
                                            <v-btn small text color="grey" v-on="on" router :to="`/dashboard/edit_role/${item.id}`">
                                                <v-icon left small>mdi-pencil</v-icon>
                                                <span right class="caption text-lowercase">Edit</span>
                                            </v-btn>
                                        </template>
                                        <span>Edit</span>
                                    </v-tooltip>

                                    <v-tooltip top>
                                        <template v-slot:activator="{ on }">
                                            <v-btn small text color="grey" v-on="on" @click="deleteRole(item.id)">
                                                <v-icon left small>mdi-delete</v-icon>
                                                <span right class="caption text-lowercase">Delete</span>
                                            </v-btn>
                                        </template>
                                        <span>Delete</span>
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
        name: "role",
        title: 'Blog - Title',
        data(){
            return{
                search: '',
            }
        },

        computed: {
            headers(){
                return[
                    {text: '#Sl', value:'id',  align: 'start', sortable: false},
                    {text: 'Role Name', value:'role_name'},
                    {text: 'Permission Name', value:'permission_name'},
                    {text: 'Actions', value: 'actions', align: 'center', sortable: false },
                ]
            },

            ...mapState({
                roles: state => state.role.roles
            })
        },

        mounted(){
            this.getRoles();
        },

        methods: {
            ...mapActions({
                getRoles: 'role/get_role'
            }),
        },
    }
</script>

<style scoped>

</style>