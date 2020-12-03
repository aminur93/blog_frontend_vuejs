<template>
    <div id="add_permission">

        <v-container my-5>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Add Permission</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="addPermission">
                                <v-text-field type="text" v-model="permissionData.name" label="Permission Name"></v-text-field>
                                <span v-if="errors.name" class="red--text">{{errors.name[0]}}</span>

                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/dashboard/permission">Back</v-btn>
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
        name: "add_permission",
        title: 'Blog - Add permission',
        data(){
            return{
                permissionData: {
                    name: ''
                },

                errors: {}
            }
        },

        methods: {
            addPermission: async function(){
                try {
                    let formData = new FormData();
                    formData.append('name', this.permissionData.name);

                    await this.$store.dispatch('permission/add_permission', formData).then(()=>{
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'Permission Added Successful',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });

                    this.permissionData = {};
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