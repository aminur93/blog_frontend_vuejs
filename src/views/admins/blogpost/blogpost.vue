<template>
    <div id="blogpost">
        <h1 class="subtitle-1 grey--text">Blog Post</h1>

        <v-container class="my-5">
            <v-row>
                <v-col cols="12">
                    <v-card>

                        <v-row>
                            <v-col col="6">
                                <v-card-title>Blog Post List</v-card-title>
                            </v-col>

                            <v-col cols="6">
                                <v-card-actions class="justify-end">
                                    <v-btn text color="success" router to="/dashboard/add_blogpost">
                                        <v-icon small left>mdi-plus</v-icon>
                                        <span>Add New</span>
                                    </v-btn>
                                </v-card-actions>
                            </v-col>
                        </v-row>

                        <v-divider></v-divider>

                        <v-card-text>

                            <v-card-title>
                                All Blog Post List
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

                            <v-data-table :headers="headers" :items="blogposts" :search="search"  class="elevation-1">

                                <template v-slot:item.image="{item}">
                                    <span v-if="item.image != null">
                                        <img :src="showImage(item.image)" alt="" width="100px">
                                    </span>

                                    <span v-else>
                                        <p>No Image</p>
                                    </span>
                                </template>

                                <template v-slot:item.status="{item}">
                                    <span v-if="item.status === 0">
                                        <v-chip small color="red" text-color="white">
                                            <v-icon>mdi-alpha-x</v-icon>
                                        </v-chip>
                                    </span>

                                    <span v-else>
                                        <v-chip color="green" text-color="white">
                                            <v-icon small>mdi-check</v-icon>
                                        </v-chip>
                                    </span>
                                </template>

                                <template v-slot:item.publish="{item}">
                                    <span v-if="item.publish === 0">
                                        <v-chip small color="red" text-color="white">
                                            <v-icon>mdi-alpha-x</v-icon>
                                        </v-chip>
                                    </span>

                                    <span v-else>
                                        <v-chip color="green" text-color="white">
                                            <v-icon small>mdi-check</v-icon>
                                        </v-chip>
                                    </span>
                                </template>

                                <template v-slot:item.feature="{item}">
                                    <span v-if="item.feature === 0">
                                        <v-chip small color="red" text-color="white">
                                            <v-icon>mdi-alpha-x</v-icon>
                                        </v-chip>
                                    </span>

                                    <span v-else>
                                        <v-chip color="green" text-color="white">
                                            <v-icon>mdi-check</v-icon>
                                        </v-chip>
                                    </span>
                                </template>

                                <template v-slot:item.actions="{ item }">

                                    <v-tooltip top>
                                        <template v-slot:activator="{ on }">
                                            <v-btn small text color="grey" v-on="on" router :to="`/dashboard/edit_blogpost/${item.id}`">
                                                <v-icon left small>mdi-pencil</v-icon>
                                                <span right class="caption text-lowercase">Edit</span>
                                            </v-btn>
                                        </template>
                                        <span>Edit</span>
                                    </v-tooltip>

                                    <v-tooltip top v-if="item.status === 0">
                                        <template v-slot:activator="{ on }">
                                            <v-btn small text color="grey" v-on="on" @click="approve(item.id)">
                                                <v-icon left small>mdi-check</v-icon>
                                                <span right class="caption text-lowercase">Approve</span>
                                            </v-btn>
                                        </template>
                                        <span>Approve</span>
                                    </v-tooltip>

                                    <v-tooltip top v-if="item.status === 1">
                                        <template v-slot:activator="{ on }">
                                            <v-btn small text color="grey" v-on="on" @click="unapprove(item.id)">
                                                <v-icon left small>mdi-alpha-x</v-icon>
                                                <span right class="caption text-lowercase">Remove</span>
                                            </v-btn>
                                        </template>
                                        <span>Remove Approve</span>
                                    </v-tooltip>

                                    <v-tooltip top v-if="item.publish === 0">
                                        <template v-slot:activator="{ on }">
                                            <v-btn small text color="grey" v-on="on" @click="Blogpublish(item.id)">
                                                <v-icon left small> mdi-publish</v-icon>
                                                <span right class="caption text-lowercase">Publish</span>
                                            </v-btn>
                                        </template>
                                        <span>Publish</span>
                                    </v-tooltip>

                                    <v-tooltip top v-if="item.publish === 1">
                                        <template v-slot:activator="{ on }">
                                            <v-btn small text color="grey" v-on="on" @click="Blogunpublish(item.id)">
                                                <v-icon left small> mdi-download</v-icon>
                                                <span right class="caption text-lowercase">Remove</span>
                                            </v-btn>
                                        </template>
                                        <span>Remove Publish</span>
                                    </v-tooltip>

                                    <v-tooltip top v-if="item.feature === 0">
                                        <template v-slot:activator="{ on }">
                                            <v-btn small text color="grey" v-on="on" @click="Blogfeature(item.id)">
                                                <v-icon left small> mdi-cogs</v-icon>
                                                <span right class="caption text-lowercase">Feature</span>
                                            </v-btn>
                                        </template>
                                        <span>Feature</span>
                                    </v-tooltip>

                                    <v-tooltip top v-if="item.feature === 1">
                                        <template v-slot:activator="{ on }">
                                            <v-btn small text color="grey" v-on="on" @click="Blogunfeature(item.id)">
                                                <v-icon left small> mdi-text-box-remove-outline </v-icon>
                                                <span right class="caption text-lowercase">Remove</span>
                                            </v-btn>
                                        </template>
                                        <span>Remove Feature</span>
                                    </v-tooltip>

                                    <v-tooltip top>
                                        <template v-slot:activator="{ on }">
                                            <v-btn small text color="grey" v-on="on" @click="deleteBlogPost(item.id)">
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
    import {mapState} from 'vuex';
    export default {
        name: "blogpost",
        title: 'Blog - BlogPost',
        data(){
            return{
                search: ''
            }
        },

        computed: {
            headers(){
                return[
                    {text: '#Sl', value:'id',  align: 'start', sortable: false},
                    {text: 'Image', value: 'image', sortable: false },
                    {text: 'Title', value:'title'},
                    {text: 'Status', value:'status'},
                    {text: 'Publish', value:'publish'},
                    {text: 'Feature', value:'feature'},
                    { text: 'Actions', value: 'actions', align: 'center', sortable: false },
                ]
            },

            ...mapState({
                blogposts: state => state.blogpost.blogs
            })
        },

        mounted(){
            this.getBlogPost();
        },

        methods: {
            getBlogPost: async function(){
                try {
                    await this.$store.dispatch('blogpost/get_Blog_Post');
                }catch (e) {
                    console.log(e);
                }
            },

            showImage(img){
                let server_Path = this.$store.state.serverPath;
                return server_Path + "/assets/uploads/original_image/"+img;
            },

            deleteBlogPost: async function(id){
                try {
                    await this.$store.dispatch('blogpost/delete_blogpost',id).then(()=>{
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'Blog Deleted Successful',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });
                    this.getBlogPost();
                }catch (e) {
                    console.log(e);
                }
            },

            approve: async function(id){
                try {
                    await this.$store.dispatch('blogpost/blog_approve', id).then(() => {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'Blog Approve Successful',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });
                    this.getBlogPost();
                }catch (e) {
                    console.log(e);
                }
            },

            unapprove: async function(id){
                try {
                    await this.$store.dispatch('blogpost/blog_unapprove', id).then(() => {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'Blog Approve Remove Successful',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });
                    this.getBlogPost();
                }catch (e) {
                    console.log(e);
                }
            },

            Blogpublish: async function(id){
                try {
                    await this.$store.dispatch('blogpost/blog_publish', id).then(() => {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'Blog Publish Successful',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });
                    this.getBlogPost();
                }catch (e) {
                    console.log(e);
                }
            },

            Blogunpublish: async function(id){
                try {
                    await this.$store.dispatch('blogpost/blog_unpublish', id).then(() => {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'Blog Publish Remove Successful',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });
                    this.getBlogPost();
                }catch (e) {
                    console.log(e);
                }
            },

            Blogfeature: async function(id){
                try {
                    await this.$store.dispatch('blogpost/blog_feature', id).then(() => {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'Blog Feature Successful',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });
                    this.getBlogPost();
                }catch (e) {
                    console.log(e);
                }
            },

            Blogunfeature: async function(id){
                try {
                    await this.$store.dispatch('blogpost/blog_unfeature', id).then(() => {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'Blog Feature Remove Successful',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });
                    this.getBlogPost();
                }catch (e) {
                    console.log(e);
                }
            },
        },
    }
</script>

<style scoped>

</style>