<template>
    <div id="permission">

        <v-container class="my-5">
            <v-row>
                <v-col cols="12">
                    <v-card>

                        <v-row>
                            <v-col col="6">
                                <v-card-title>Permission List</v-card-title>
                            </v-col>

                            <v-col cols="6">
                                <v-card-actions class="justify-end">
                                    <v-btn text color="success" router to="/dashboard/add_permission">
                                        <v-icon small left>mdi-plus</v-icon>
                                        <span>Add New</span>
                                    </v-btn>
                                </v-card-actions>
                            </v-col>
                        </v-row>

                        <v-divider></v-divider>

                        <v-card-text>

                            <v-card-title>
                                All Permission List
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

                            <v-data-table :headers="headers" :items="permissions" :search="search"  class="elevation-1">

                                <template v-slot:item.actions="{ item }">

                                    <v-tooltip top>
                                        <template v-slot:activator="{ on }">
                                            <v-btn small text color="grey" v-on="on" router :to="`/dashboard/edit_permission/${item.id}`">
                                                <v-icon left small>mdi-pencil</v-icon>
                                                <span right class="caption text-lowercase">Edit</span>
                                            </v-btn>
                                        </template>
                                        <span>Edit</span>
                                    </v-tooltip>

                                    <v-tooltip top>
                                        <template v-slot:activator="{ on }">
                                            <v-btn small text color="grey" v-on="on" @click="deletePermission(item.id)">
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
        name: "permission",
        title: 'Blogs - Permission',

        data(){
            return{
                search: '',
            }
        },

        computed: {
            headers(){
                return[
                    {text: '#Sl', value:'id',  align: 'start', sortable: false},
                    {text: 'Permission Name', value:'name'},
                    { text: 'Actions', value: 'actions', align: 'center', sortable: false },
                ]
            },

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

            deletePermission: async function(id){
                try {
                    await this.$store.dispatch('permission/delete_permission',id).then(()=>{
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'Permission Deleted Successful',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        this.getPermission();
                    })
                }catch (e) {
                    console.log(e);
                }
            },
        },
    }
</script>

<style scoped>

</style>