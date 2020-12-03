<template>
    <div id="edit_blogpost">
        <h1 class="subtitle-1 grey--text">Edit Blog Post</h1>

        <v-container my-5>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Edit Blog Post</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="updateBlogPost">

                                <v-row>
                                    <v-col cols="6" md="6">
                                        <v-select v-on:change='getSubCategory()' :items="categories" item-text="category_name" item-value="id" v-model="blogpost.category_id" label="Chose Category"></v-select>
                                        <span v-if="errors.category_id" class="red--text">{{errors.category_id[0]}}</span>

                                        <v-select :items="tags" item-text="tag_name" item-value="id" v-model="blogpost.tag_id" label="Chose tag"></v-select>
                                        <span v-if="errors.tag_id" class="red--text">{{errors.tag_id[0]}}</span>

                                        <v-text-field type="text" v-model="blogpost.title" label="Title"></v-text-field>
                                        <span v-if="errors.title" class="red--text">{{errors.title[0]}}</span>

                                    </v-col>

                                    <v-col cols="6" md="6">
                                        <v-select :items="blogpost.category_id == blogpost.sub_category_id ? subcategories : blogsubcategories" item-text="sub_cat_name" item-value="id" v-model="blogpost.sub_cat_id" label="Chose Sub category"></v-select>
                                        <span v-if="errors.sub_cat_id" class="red--text">{{errors.sub_cat_id[0]}}</span>

                                        <v-text-field type="text" v-if="authenticated" :value="userInfo.name"  label="Author Name"></v-text-field>

                                        <v-menu>
                                            <template v-slot:activator="{ on }">
                                                <v-text-field v-on="on" :value="blogpost.blog_date" label="Blog Date" prepend-icon="mdi-calendar-range"></v-text-field>
                                            </template>

                                            <v-date-picker v-model="blogpost.blog_date"></v-date-picker>
                                        </v-menu>

                                    </v-col>

                                    <v-col cols="12">
                                        <v-textarea v-model="blogpost.description" label="Description"></v-textarea>
                                        <span v-if="errors.description" class="red--text">{{errors.description[0]}}</span>
                                    </v-col>

                                    <v-col cols="6" md="6">
                                        <v-file-input label="Image Upload" v-on:change="onSelectdFiles"></v-file-input>
                                        <span v-if="errors.image" class="red--text">{{errors.image[0]}}</span>

                                        <span v-if="blogpost.image" class="ml-2">

                                            <img :src="editImage(blogpost.image)" alt="" width="150px">

                                            <v-btn small class="error ml-2" style="margin-top: -22px" v-on:click="deleteImage()">
                                                <v-icon>mdi-alpha-x-box</v-icon>
                                            </v-btn>

                                        </span>


                                    </v-col>

                                    <v-col cols="6" md="6">
                                        <v-checkbox class="float-right mx-5" v-model="blogpost.status " :input-value="blogpost.status === false ? 0 : 1" label="status" color="success" hide-details></v-checkbox>

                                        <v-checkbox class="float-right mx-2" v-model="blogpost.publish" :input-value="blogpost.publish === false ? 0 : 1" label="Publish" color="success" hide-details></v-checkbox>

                                        <v-checkbox class="float-right mx-2" v-model="blogpost.feature" :input-value="blogpost.feature === false ? 0 : 1" label="Feature" color="success" hide-details></v-checkbox>
                                    </v-col>
                                </v-row>


                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/dashboard/blogpost">Back</v-btn>
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
    import {mapGetters, mapState, mapActions} from 'vuex';
    export default {
        name: "edit_blogpost",
        data(){
            return{
                files: null,
                errors: {}
            }
        },

        computed: {
            ...mapGetters({
                authenticated: 'authenticated',
                userInfo: 'userInfo',
            }),

            ...mapState({
                categories: state => state.category.categories,
                subcategories: state => state.subcategories.subcategories,
                tags: state => state.tag.tags,
                blogsubcategories: state =>state.blogpost.blogsubcategories,
                blogpost: state =>state.blogpost.blog,
            })
        },

        mounted(){
            this.getCategory();
            this.get_subCategory();
            this.get_tag();
            this.showBlogPost();
        },
         methods: {
             ...mapActions({
                 getCategory: 'category/getCategory',
                 get_subCategory: 'subcategories/get_subCategory',
                 get_tag: 'tag/get_tag',
                 blog_subcategories: 'blogpost/blog_subcategories'
             }),

             getSubCategory(){
                 let category_id = this.blogpost.category_id;
                 this.blog_subcategories(category_id);
             },

             showBlogPost: async function(){
                 try {
                     let id = this.$route.params.id;

                     await this.$store.dispatch('blogpost/show_blogpost',id);
                 }catch (e) {
                     console.log(e);
                 }
             },

             onSelectdFiles(event){
                 this.files = event;
             },

             editImage(img){
                 let server_path = this.$store.state.serverPath;

                 return server_path+"/assets/uploads/original_image/"+img;

             },

             deleteImage: async function(){
                 try {
                     let id = this.$route.params.id;

                     await this.$store.dispatch('blogpost/delete_image', id).then(() => {
                         this.$swal.fire({
                             toast: true,
                             position: 'top-end',
                             icon: 'success',
                             title: 'Blog Image Deleted Successful',
                             showConfirmButton: false,
                             timer: 1500
                         });
                     });
                     this.showBlogPost();
                 }catch (e) {
                     console.log(e);
                 }
             },

             updateBlogPost: async function(){
                 try {
                     let id = this.$route.params.id;

                     let formData = new FormData();
                     formData.append('category_id', this.blogpost.category_id);
                     formData.append('sub_cat_id', this.blogpost.sub_cat_id);
                     formData.append('tag_id', this.blogpost.tag_id);
                     formData.append('author_id', this.blogpost.author_id);
                     formData.append('title', this.blogpost.title);
                     formData.append('description', this.blogpost.description);

                     if (this.files)
                     {
                         formData.append('image', this.files, this.files.name);
                     }

                     formData.append('current_image', this.blogpost.image);
                     formData.append('blog_date', this.blogpost.blog_date);
                     formData.append('status', this.blogpost.status);
                     formData.append('publish', this.blogpost.publish);
                     formData.append('feature', this.blogpost.feature);

                     await this.$store.dispatch('blogpost/update_blog', {id:id, data:formData}).then(()=>{
                         this.$swal.fire({
                             toast: true,
                             position: 'top-end',
                             icon: 'success',
                             title: 'Blog Post Updated Successful',
                             showConfirmButton: false,
                             timer: 1500
                         });
                     });

                     this.showBlogPost();
                 }catch (e) {
                     console.log(e);
                 }
             },
         },
    }
</script>

<style scoped>

</style>