<template>
    <div id="single_blog">

        <v-container class="my-5">
            <v-row>
                <v-col cols="12">

                    <v-card>

                        <v-img v-if="singleBlogs.image"
                                :src="detailsImage(singleBlogs.image)"
                                height="400px"
                        ></v-img>

                        <v-card-title>
                            {{ singleBlogs.title }}
                        </v-card-title>

                        <v-card-subtitle>
                            <p v-html="singleBlogs.description"></p>
                        </v-card-subtitle>

                        <v-card-actions>

                            <span class="indigo--text font-weight-light mr-5" style="font-size: 15px;"><v-icon small>mdi-account</v-icon>  {{ singleBlogs.name }}</span>
                            <span class="orange--text font-weight-light mr-5" style="font-size: 15px;"><v-icon small>mdi-clipboard-list</v-icon> {{ singleBlogs.category_name }}</span>
                            <span class="blue-grey--text font-weight-light mr-5" style="font-size: 15px;"><v-icon small>mdi-tag</v-icon> {{ singleBlogs.tag_name }}</span>
                            <span class="green--text font-weight-light mr-5" style="font-size: 15px;"><v-icon small>mdi-eye</v-icon> {{ singleBlogs.view_count }}</span>
                        </v-card-actions>

                    </v-card>

                </v-col>

                <v-col cols="6">

                    <v-card>
                        <v-card-title>Comments Show</v-card-title>
                        <v-divider></v-divider>

                        <v-card-text v-if="commentslist">
                            <v-row v-for="comment in commentslist" :key="comment.id">

                                <v-col cols="2" md="2" sm="2">
                                    <img src="/default-image.jpg" alt="" width="50px">
                                </v-col>

                                <v-card-subtitle class="grey--text" style="margin-top: -5px;margin-left: -30px;">
                                    {{ comment.message}}

                                    <p class="grey--text" style="font-size: 10px">
                                        {{ comment.name }} - {{ comment.created_at | formatDate}}
                                    </p>
                                </v-card-subtitle>

                            </v-row>
                        </v-card-text>

                        <v-card-subtitle v-else class="justify-center">NO comments Found This Blog</v-card-subtitle>
                    </v-card>

                </v-col>

                <v-col cols="6">
                    <v-card>

                        <v-card-title>Comments Post</v-card-title>
                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="comments">
                                <v-row>

                                    <v-col cols="6">
                                        <v-text-field type="text" v-model="comment.name" label="Name"></v-text-field>
                                    </v-col>

                                    <v-col cols="6">
                                        <v-text-field type="text" v-model="comment.email" label="Email"></v-text-field>
                                    </v-col>

                                    <v-col cols="12">
                                        <v-textarea v-model="comment.message" label="Message"></v-textarea>
                                    </v-col>

                                </v-row>

                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/">Back</v-btn>
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
        name: "single_blog",
        title: 'Blogs - Details',

        data(){
            return{
                comment: {
                    name: '',
                    email: '',
                    message: ''
                },
            }
        },

        computed: {
            ...mapState({
                singleBlogs: state => state.singleBlog,
                commentslist: state => state.blogcomments
            })
        },

        mounted(){
            this.getBlogDetails();
            this.getCommentsList(this.$route.params.id);
        },

        methods: {
            ...mapActions({
                getSingleBlog: 'SingleBlog',
                getCommentsList: 'CommentsList'
            }),

            getBlogDetails(){
                let id = this.$route.params.id;
                this.getSingleBlog(id);
            },

            detailsImage(img){
                let server_path = this.$store.state.serverPath;

                return server_path + "/assets/uploads/original_image/" + img
            },

            comments: async function(){
                try {
                    let id = this.$route.params.id;
                    let formData = new FormData();
                    formData.append('name', this.comment.name);
                    formData.append('email', this.comment.email);
                    formData.append('message', this.comment.message);

                    await this.$store.dispatch('blog_comments', {id:id, data:formData}).then(() => {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'This Article Comments Added Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });

                    this.comment = {};
                    this.getCommentsList(id);
                }catch (e) {
                    console.log(e);
                }
            },
        },
    }
</script>

<style scoped>

</style>