<template>
    <div id="edit_sub_category">
        <h1 class="subtitle-1 grey--text">Edit Sub Category</h1>

        <v-container my-5>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Edit Category</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="updateSubCategory">

                                <v-select :items="categories"  item-text="category_name" item-value="id" v-model="EditsubCategoryData.category_id" label="Select Category"></v-select>

                                <v-text-field type="text" v-model="EditsubCategoryData.sub_cat_name" label="Sub Category"></v-text-field>
                                <span v-if="errors.sub_cat_name" class="red--text">{{errors.sub_cat_name[0]}}</span>

                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/dashboard/subCategory">Back</v-btn>
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
    import {mapState, mapActions} from 'vuex';

    export default {
        name: "Edit_SubCategory",
        data(){
            return{
                errors: {}
            }
        },

        computed: {
            ...mapState({
                EditsubCategoryData: state => state.subcategories.subcategory,
                categories: state => state.category.categories
            })
        },

        mounted(){
            this.showsubcategory();
            this.getCategory();
        },

        methods: {

            ...mapActions('category', ['getCategory']),

            showsubcategory: async function(){
                try {
                    let id = this.$route.params.id;

                    await this.$store.dispatch('subcategories/ShowSubCategory', id);
                }catch (e) {
                    console.log(e);
                }
            },

            updateSubCategory: async function(){
                try {
                    let id = this.$route.params.id;
                    let formData = new FormData();
                    formData.append('category_id', this.EditsubCategoryData.category_id);
                    formData.append('sub_cat_name', this.EditsubCategoryData.sub_cat_name);

                    await this.$store.dispatch('subcategories/updateSubCategory', {id:id, data:formData})
                        .then(() => {
                            this.$swal.fire({
                                toast: true,
                                position: 'top-end',
                                icon: 'success',
                                title: 'Sub Category Updated Successful',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        });
                }catch (e) {
                    console.log(e);
                }
            }
        }
    }
</script>

<style scoped>

</style>