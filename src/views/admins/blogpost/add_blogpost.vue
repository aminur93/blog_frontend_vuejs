<template>
    <div id="add_blogpost">
        <h1 class="subtitle-1 grey--text">Add Blog Post</h1>

        <v-container my-5>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Add Blog Post</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="addBlogPost">

                                <v-row>
                                    <v-col cols="6" md="6">
                                        <v-select v-on:change='getSubCategory()' :items="categories" item-text="category_name" item-value="id" v-model="blogpostData.category_id" label="Chose Category"></v-select>
                                        <span v-if="errors.category_id" class="red--text">{{errors.category_id[0]}}</span>

                                        <v-select :items="tags" item-text="tag_name" item-value="id" v-model="blogpostData.tag_id" label="Chose tag"></v-select>
                                        <span v-if="errors.tag_id" class="red--text">{{errors.tag_id[0]}}</span>

                                        <v-text-field type="text" v-model="blogpostData.title" label="Title"></v-text-field>
                                        <span v-if="errors.title" class="red--text">{{errors.title[0]}}</span>

                                    </v-col>

                                    <v-col cols="6" md="6">
                                        <v-select v-if="blogsubcategories" :items="blogsubcategories" item-text="sub_cat_name" item-value="id" v-model="blogpostData.sub_cat_id" label="Chose Sub category"></v-select>
                                        <span v-if="errors.sub_cat_id" class="red--text">{{errors.sub_cat_id[0]}}</span>

                                        <v-text-field type="text" v-if="authenticated" :value="userInfo.name"  label="Author Name"></v-text-field>

                                        <v-menu>
                                            <template v-slot:activator="{ on }">
                                                <v-text-field v-on="on" :value="blogpostData.blog_date" label="Blog Date" prepend-icon="mdi-calendar-range"></v-text-field>
                                            </template>

                                            <v-date-picker v-model="blogpostData.blog_date"></v-date-picker>
                                        </v-menu>

                                    </v-col>

                                    <v-col cols="12">
                                        <v-textarea v-model="blogpostData.description" label="Description"></v-textarea>
                                        <span v-if="errors.description" class="red--text">{{errors.description[0]}}</span>
                                    </v-col>

                                    <v-col cols="6" md="6">
                                        <v-file-input label="Image Upload" v-on:change="onSelectdFiles"></v-file-input>
                                        <span v-if="errors.image" class="red--text">{{errors.image[0]}}</span>

                                        <!--<div v-if="blogpostData.image">-->
                                            <!--<img src="" ref="newBlogImageDisplay" class="w-150px">-->
                                        <!--</div>-->

                                        <!--<label for="image">Image :</label>-->
                                        <!--<input type="file" class="form-control" id="image" v-on:change="attachImage" ref="newBlogImage">-->
                                        <!--<div class="invalid-feedback" v-if="errors.image">{{ errors.image[0] }}</div>-->
                                        <!--<br>-->
                                        <!--<div v-if="blogpostData.image.name">-->
                                            <!--<img src="" ref="newBlogImageDisplay" class="w-150px" style="width: 100px">-->
                                        <!--</div>-->

                                    </v-col>

                                    <v-col cols="6" md="6">
                                        <v-checkbox class="float-right mx-5" v-model="blogpostData.status" label="status" color="success" hide-details></v-checkbox>

                                        <v-checkbox class="float-right mx-2" v-model="blogpostData.publish" label="Publish" color="success" hide-details></v-checkbox>

                                        <v-checkbox class="float-right mx-2" v-model="blogpostData.feature" label="Feature" color="success" hide-details></v-checkbox>
                                    </v-col>
                                </v-row>


                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/dashboard/blogpost">Back</v-btn>
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

    import {mapGetters, mapState, mapActions} from 'vuex';

    export default {
        name: "add_blogpost",
        data(){
            return{
                blogpostData: {
                    category_id: '',
                    sub_cat_id: '',
                    tag_id: '',
                    author_id: '',
                    title: '',
                    description: '',
                    image: null,
                    blog_date: '',
                    status: '',
                    publish: '',
                    feature: ''
                },

                errors: {},
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
                blogsubcategories: state =>state.blogpost.blogsubcategories
            })
        },

        mounted(){
            this.getCategory();
            this.get_subCategory();
            this.get_tag();
        },

        methods: {

            ...mapActions({
                getCategory: 'category/getCategory',
                get_subCategory: 'subcategories/get_subCategory',
                get_tag: 'tag/get_tag',
                blog_subcategories: 'blogpost/blog_subcategories'
            }),

            getSubCategory(){
                let category_id = this.blogpostData.category_id;
                this.blog_subcategories(category_id);
            },

            onSelectdFiles(event){
                this.blogpostData.image = event;
            },

            // attachImage: function(){
            //     this.blogpostData.image = this.$refs.newBlogImage.files[0];
            //     let reader = new FileReader();
            //     reader.addEventListener('load', function () {
            //         this.$refs.newBlogImageDisplay.src = reader.result;
            //     }.bind(this),false);
            //
            //     reader.readAsDataURL(this.blogpostData.image);
            // },

            addBlogPost: async function(){
                try {
                    let formData = new FormData();
                    formData.append('category_id', this.blogpostData.category_id);
                    formData.append('sub_cat_id', this.blogpostData.sub_cat_id);
                    formData.append('tag_id', this.blogpostData.tag_id);
                    formData.append('author_id', this.userInfo.id);
                    formData.append('title', this.blogpostData.title);
                    formData.append('description', this.blogpostData.description);
                    formData.append('image', this.blogpostData.image,this.blogpostData.image.name);
                    formData.append('blog_date', this.blogpostData.blog_date);
                    formData.append('status', this.blogpostData.status);
                    formData.append('publish', this.blogpostData.publish);
                    formData.append('feature', this.blogpostData.feature);

                    await this.$store.dispatch('blogpost/add_blogpost', formData).then(() => {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'Blog Post Added Successful',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });

                    this.blogpostData = {};
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

</style>