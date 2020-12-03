<template>
    <div id="edit_category">
        <h1 class="subtitle-1 grey--text">Edit category</h1>

        <v-container my-5>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Edit Category</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="updateCategory">
                                <v-text-field type="text" v-model="editCategoriesData.category_name" label="Edit Category"></v-text-field>
                                <span v-if="errors.category_name" class="red--text">{{errors.category_name[0]}}</span>

                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/dashboard/category">Back</v-btn>
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
        name: "EditCategory",
        data(){
            return{
                errors: {}
            }
        },

        computed: {
            ...mapState({
                editCategoriesData: state => state.category.category
            })
        },

        mounted(){
            this.loadCategory();
        },

        methods: {
            loadCategory: async function(){
                let id = this.$route.params.id;

                await this.$store.dispatch('category/showCategory', id);
            },

            updateCategory: async function(){
                try {

                    let id = this.$route.params.id;

                    let formData = new FormData();

                    formData.append('category_name', this.editCategoriesData.category_name);

                    await this.$store.dispatch('category/update_category', {id:id,data:formData}).then(()=> {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'Category Updated Successful',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });

                    this.loadCategory();

                }catch (e) {
                    console.log(e);
                }
                
            },
        },
    }
</script>

<style scoped>

</style>