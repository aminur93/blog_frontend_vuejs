<template>
    <div id="add_sub_category">
        <h1 class="subtitle-1 grey--text">Add Sub Category</h1>

        <v-container my-5>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Add Category</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="addSubCategory">

                                <v-select :items="categories"  item-text="category_name" item-value="id" v-model="subCategoryData.category_id" label="Select Category"></v-select>

                                <v-text-field type="text" v-model="subCategoryData.sub_cat_name" label="Sub Category"></v-text-field>
                                <span v-if="errors.sub_cat_name" class="red--text">{{errors.sub_cat_name[0]}}</span>

                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/dashboard/subCategory">Back</v-btn>
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
        name: "Add_SubCategory",
        data(){
            return{
                subCategoryData: {
                    category_id: '',
                    sub_cat_name: ''
                },

                errors: {},
            }
        },

        computed: {
            ...mapState({
                categories: state => state.category.categories
            })
        },

        mounted(){
            this.getCategory();
        },

        methods: {

            ...mapActions('category', ['getCategory']),

            addSubCategory: async function(){
                try {

                    let formData = new FormData();
                    formData.append('category_id', this.subCategoryData.category_id);
                    formData.append('sub_cat_name', this.subCategoryData.sub_cat_name);

                    await this.$store.dispatch('subcategories/add_subcategory', formData)
                        .then(() => {
                            this.$swal.fire({
                                toast: true,
                                position: 'top-end',
                                icon: 'success',
                                title: 'Sub Category Added Successful',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        });

                    this.subCategoryData.category_id = '';
                    this.subCategoryData.sub_cat_name= '';
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
    .v-menu__content.menuable__content__active{
        top: 259px !important;
    }
</style>