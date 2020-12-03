<template>
    <div id="sidebar">
        <v-card class="mb-5">

            <v-card-title class="subtitle-1">Category</v-card-title>
            <v-divider></v-divider>

            <v-card-text>
                <v-list v-if="allCategories">
                    <v-list-item v-for="category in allCategories" :key="category.id" route :to="`/category_blog/${category.id}`">

                        <v-list-item-icon>
                            <v-icon color="indigo"> mdi-arrow-right-thick</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title class="grey--text">{{ category.category_name }}</v-list-item-title>
                        </v-list-item-content>

                    </v-list-item>
                </v-list>

                <span v-else>Not category Found</span>
            </v-card-text>


        </v-card>

        <v-card class="mb-5">
            <v-card-title class="subtitle-1">Sub Category</v-card-title>
            <v-divider></v-divider>

            <v-card-text>
                <v-list>
                    <v-list-item v-for="subcategory in allSubCategories" :key="subcategory.id" route :to="`/sub_category_blog/${subcategory.id}`">

                        <v-list-item-icon>
                            <v-icon color="orange"> mdi-arrow-right-thick</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title class="grey--text">{{ subcategory.sub_cat_name }}</v-list-item-title>
                        </v-list-item-content>

                    </v-list-item>
                </v-list>
            </v-card-text>
        </v-card>

        <v-card class="mb-5">
            <v-card-title class="subtitle-1">Tag</v-card-title>
            <v-divider></v-divider>

            <v-card-text>
                <v-list>
                    <v-list-item v-for="tag in allTags" :key="tag.id" route :to="`/tag_blog/${tag.id}`">

                        <v-list-item-icon>
                            <v-icon color="blue-grey"> mdi-arrow-right-thick</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title class="grey--text">{{ tag.tag_name }}</v-list-item-title>
                        </v-list-item-content>

                    </v-list-item>
                </v-list>
            </v-card-text>
        </v-card>

        <v-card class="mb-5">
            <v-card-title class="subtitle-1">Recent Blog</v-card-title>
            <v-divider></v-divider>

            <v-card-text>
                <v-row v-for="rblog in recentBlog" :key="rblog.id">
                    <v-col cols="2" md="2" sm="2">
                        <img :src="shoeImage(rblog.image)" alt="" width="50px">
                    </v-col>

                    <v-card-subtitle class="grey--text" style="margin-top: -10px" v-on:click="viewUpdate(rblog.id,rblog.view_count)">
                        <router-link class="grey--text" :to="`/details/${rblog.id}`" style="text-decoration: none">{{ rblog.title }}</router-link>

                        <p class="grey--text" style="font-size: 10px">
                            {{ rblog.blog_date | formatDate }}
                        </p>
                    </v-card-subtitle>
                </v-row>
            </v-card-text>
        </v-card>

        <v-card class="mb-5">
            <v-card-title class="subtitle-1">Popular Blog</v-card-title>
            <v-divider></v-divider>

            <v-card-text>
                <v-row v-for="pblog in popularBlog" :key="pblog.id">

                    <v-col cols="2" md="2" sm="2">
                        <img :src="shoeImage(pblog.image)" alt="" width="50px">
                    </v-col>

                    <v-card-subtitle class="grey--text" style="margin-top: -10px" v-on:click="viewUpdate(pblog.id,pblog.view_count)">
                        <router-link class="grey--text" :to="`/details/${pblog.id}`" style="text-decoration: none">{{ pblog.title }}</router-link>

                        <p class="grey--text" style="font-size: 10px">
                            {{ pblog.blog_date | formatDate }}
                        </p>
                    </v-card-subtitle>

                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "sidebar",
        props: ['allCategories', 'allSubCategories', 'allTags','recentBlog','popularBlog'],

        methods: {
            shoeImage(img){
                let server_path = this.$store.state.serverPath;
                return server_path+"/assets/uploads/original_image/"+img
            },

            viewUpdate(id, view_count){
                 this.$parent.viewUpdate(id, view_count);
            }
        },
    }
</script>

<style scoped>

</style>