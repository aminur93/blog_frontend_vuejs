<template>
    <div id="category_blog">

        <v-container class="my-5">
            <v-row>

                <!--Start Search-->
                <v-col cols="7">
                    <v-text-field append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
                </v-col>

                <v-btn small cols="2" style="margin-top: 35px">Search</v-btn>
                <!--End Search-->

                <!--Start Main Content-->
                <v-col cols="8">

                    <v-alert
                            border="bottom"
                            color="pink darken-1"
                            dark
                            v-if="!mainblog.length"
                    >
                        No Data Found On This Category
                    </v-alert>

                    <MainContent v-else :mainblog="mainblog" />

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
                <v-col cols="4">

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
        name: "CategoryBlog",
        title: 'Blogs - Category Blog',
        data () {
            return {
                current_page: 1,
            }
        },

        watch: {
            $route() {
                this.getCategoryBlog(this.$route.params.category_id);
            }
        },

        computed: {
            ...mapGetters({
                allCategories: 'allCategories',
                allSubCategories: 'AllSubCategories',
                allTags: 'AllTags',
                recentBlog: 'RecentBlog',
                popularBlog: 'PopularBlog',
            }),

            ...mapState({
                mainblog: 'mainBlog',
                pagination: 'pagination',
            })
        },

        mounted(){
            this.getCategories();
            this.getSubCategories();
            this.getTag();
            this.getRecentsBlog();
            this.getPopularsBlog();
            this.getCategoryBlog(this.$route.params.category_id);
        },

        methods: {
            ...mapActions({
                getCategories: 'getAllCategories',
                getSubCategories: 'getAllSubCategories',
                getTag: 'getAllTags',
                getRecentsBlog: 'getRecentBlog',
                getPopularsBlog: 'getPopularBlog',
                getCategoryBlog: 'CategoryBlog',
            }),

            onPageChange() {
                this.getCategoryBlog();
            },

            viewUpdate: async function(id, view_count){
                try {
                    await this.$store.dispatch('view_update', {id:id, view_count:view_count});
                }catch (e) {
                    console.log(e);
                }

            },
        },
    }
</script>

<style scoped>

</style>