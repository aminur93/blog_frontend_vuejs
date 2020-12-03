<template>
    <div id="blog_home">

        <v-container class="my-5">
            <v-row>

                <!--Start Search-->
                <v-col cols="7">
                    <v-text-field type="text" v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>

                    <template v-if="search !== ''">
                        <v-card class="mt-2" v-show="seen">
                            <v-list>
                                <v-list-item v-for="search in searchBlog.slice(0,10)" :key="search.id">
                                    <v-list-item-content>
                                        <v-list-item-title v-on:click="getSearchValue(search.title)" style="cursor: pointer;">{{ search.title }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </template>

                </v-col>

                <v-btn small cols="2" style="margin-top: 35px" v-on:click.prevent="searchAllBlog()">Search</v-btn>

                <!--End Search-->

                <!--Start Main Content-->
                <v-col cols="8">

                    <MainContent :mainblog="mainblog" />

                    <div class="text-center">
                        <v-container>
                            <v-row justify="center">
                                <v-col cols="8">
                                    <v-container class="max-width">
                                        <v-pagination
                                                v-model="pagination.current_page"
                                                class="my-4"
                                                :length="pagination.last_page"
                                                @input="onPageChange"
                                                v-if="this.pagination.last_page > 1"
                                        ></v-pagination>
                                    </v-container>
                                </v-col>
                            </v-row>
                        </v-container>
                    </div>

                </v-col>
                <!--End main Content-->

                <!--Start Sidebar-->
                <v-col cols="4" md="4" sm="4">

                    <Sidebar
                            :allCategories="allCategories"
                            :allSubCategories="allSubCategories"
                            :allTags="allTags"
                            :recentBlog="recentBlog"
                            :popularBlog="popularBlog"
                    />

                </v-col>
                <!--End Sidebar-->
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import {mapGetters, mapActions, mapState} from 'vuex';
    import Sidebar from '../../components/blog/sidebar.vue';
    import MainContent from '../../components/blog/MainContent.vue';

    export default {
        components: {
            Sidebar,
            MainContent
        },
        name: "BlogHome",
        title: 'Blogs - Home',
        data () {
            return {
                search: '',
                seen: true,
            }
        },

        watch: {
            search:function (newQ) {
                if (newQ === '')
                {
                    this.seen = true;
                    this.getBlog();
                }else {
                    this.getsearchlistblogs();
                }
            },
        },

        computed: {
            ...mapGetters({
                allCategories: 'allCategories',
                allSubCategories: 'AllSubCategories',
                allTags: 'AllTags',
                recentBlog: 'RecentBlog',
                popularBlog: 'PopularBlog',
                searchBlog: 'searchBlog',
            }),

            ...mapState({
                mainblog: 'mainBlog',
                pagination: 'pagination'
            })
        },

        mounted(){
            this.getBlog();
            this.getCategories();
            this.getSubCategories();
            this.getTag();
            this.getRecentsBlog();
            this.getPopularsBlog();
        },

        methods: {
            ...mapActions({
                getCategories: 'getAllCategories',
                getSubCategories: 'getAllSubCategories',
                getTag: 'getAllTags',
                getRecentsBlog: 'getRecentBlog',
                getPopularsBlog: 'getPopularBlog',
                getBlog: 'getMainBlog',
                getsearchlistblog: 'searchBlogList',
            }),

            getsearchlistblogs(){
                this.getsearchlistblog(this.search);
            },

            onPageChange() {
                this.getBlog();
            },

            viewUpdate: async function(id, view_count){
                try {
                    await this.$store.dispatch('view_update', {id:id, view_count:view_count});
                }catch (e) {
                    console.log(e);
                }

            },

            getSearchValue: function(title){
                this.search = title;
                this.seen = false;
            },

            searchAllBlog: async function(){
                try {
                    await this.$store.dispatch('searchAllBlogList', this.search);
                    this.seen = false;
                }catch (e) {
                    console.log(e);
                }
            },
        },

    }
</script>

<style scoped>

</style>