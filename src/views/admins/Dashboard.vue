<template>
    <div id="dashboard">
        <h1 class="subtitle-1 grey--text">Welcome DashBoard</h1>

        <v-container class="my-5">
            <v-row>
                <v-col cols="3" sm="3" md="3">
                    <v-card class="success">
                        <v-card-title>
                            Category

                            <v-row class="justify-end">
                                <v-icon large>mdi-clipboard-list</v-icon>
                            </v-row>

                        </v-card-title>

                        <v-card-text>
                            <h1 class="headline">{{ countcategory }}</h1>

                            <v-divider></v-divider>

                            <v-row class="justify-center">
                                <v-btn small class="mt-5 success" route to="/dashboard/category"><v-icon> mdi-forwardburger</v-icon> G0</v-btn>
                            </v-row>

                        </v-card-text>

                    </v-card>
                </v-col>

                <v-col cols="3" sm="3" md="3">
                    <v-card class="primary">
                        <v-card-title>
                            Sub Category

                            <v-row class="justify-end">
                                <v-icon large>mdi-view-list</v-icon>
                            </v-row>
                        </v-card-title>

                        <v-card-text>
                            <h1 class="headline">{{ countsubcategory }}</h1>

                            <v-divider></v-divider>

                            <v-row class="justify-center">
                                <v-btn small class="mt-5 primary" route to="/dashboard/subCategory"><v-icon> mdi-forwardburger</v-icon> G0</v-btn>
                            </v-row>

                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="3" sm="3" md="3">
                    <v-card class="info">
                        <v-card-title>
                            Tag

                            <v-row class="justify-end">
                                <v-icon large>mdi-tag</v-icon>
                            </v-row>
                        </v-card-title>

                        <v-card-text>
                            <h1 class="headline">{{counttag}}</h1>

                            <v-divider></v-divider>

                            <v-row class="justify-center">
                                <v-btn small class="mt-5 info" route to="/dashboard/tag"><v-icon> mdi-forwardburger</v-icon> G0</v-btn>
                            </v-row>

                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="3" sm="3" md="3">
                    <v-card class="error">
                        <v-card-title>
                            Blog

                            <v-row class="justify-end">
                                <v-icon large>mdi-blogger</v-icon>
                            </v-row>
                        </v-card-title>

                        <v-card-text>
                            <h1 class="headline">{{ countblog}}</h1>

                            <v-divider></v-divider>

                            <v-row class="justify-center">
                                <v-btn small class="mt-5 error" route to="/dashboard/blogpost"><v-icon> mdi-forwardburger</v-icon> G0</v-btn>
                            </v-row>

                        </v-card-text>
                    </v-card>
                </v-col>

                <!--Recent list for all section start-->

                <v-col cols="6" md="6">
                    <v-card>
                        <v-card-title>Category List</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-simple-table>
                                <template v-slot:default>
                                    <thead>
                                    <tr>
                                        <th class="text-left">#Sl</th>
                                        <th class="text-left">Category Name</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(item,index) in categorylist" :key="item.id">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ item.category_name }}</td>
                                    </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="6" md="6">
                    <v-card>
                        <v-card-title>Tag List</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-simple-table>
                                <template v-slot:default>
                                    <thead>
                                    <tr>
                                        <th class="text-left">#Sl</th>
                                        <th class="text-left">Tag Name</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(item,index) in taglist" :key="item.id">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ item.tag_name }}</td>
                                    </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="12">
                    <v-card>
                        <v-card-title>Blog List</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-simple-table>
                                <template v-slot:default>
                                    <thead>
                                    <tr>
                                        <th class="text-left">#Sl</th>
                                        <th class="text-left">Title</th>
                                        <th class="text-left">Views</th>
                                        <th class="text-left">Status</th>
                                        <th class="text-left">Publish</th>
                                        <th class="text-left">Feature</th>
                                        <th class="text-center">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(item,index) in bloglist" :key="item.id">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ item.title }}</td>
                                        <td>{{ item.view_count }}</td>
                                        <td>
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
                                        </td>

                                        <td>
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
                                        </td>

                                        <td>
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
                                        </td>

                                        <td class="text-center">

                                            <v-tooltip top v-if="item.status === 0">
                                                <template v-slot:activator="{ on }">
                                                    <v-btn class="text-center" small text color="grey" v-on="on" @click="approve(item.id)">
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
                                                    <v-btn class="text-center" small text color="grey" v-on="on" @click="Blogpublish(item.id)">
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
                                                    <v-btn class="text-center" small text color="grey" v-on="on" @click="Blogfeature(item.id)">
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

                                        </td>
                                    </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="6" md="6">
                    <v-card>
                        <v-card-title>User List</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-simple-table>
                                <template v-slot:default>
                                    <thead>
                                    <tr>
                                        <th class="text-left">#Sl</th>
                                        <th class="text-left">Name</th>
                                        <th class="text-left">Email</th>
                                        <th class="text-left">Role</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(item,index) in userlist" :key="item.id">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ item.name }}</td>
                                        <td>{{ item.email }}</td>
                                        <td>{{ item.role }}</td>
                                    </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="6" md="6">
                    <v-card>
                        <v-card-title>Chart For Blog</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <canvas id="myChart" width="400" height="400"></canvas>
                        </v-card-text>
                    </v-card>
                </v-col>

                <!--Recent list for all section end-->

            </v-row>
        </v-container>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    import Chart from 'chart.js';
    import planetChartData from '../../chart-data.js';
    export default {
        name: "Dashboard",
        title: 'Blog - Dashboard',

        data(){
            return{
                planetChartData: planetChartData,
            }
        },

        computed: {
            ...mapState({
                countcategory: state => state.category_count,
                countsubcategory: state => state.sub_category_count,
                counttag: state => state.tag_count,
                countblog: state => state.blog_count,
                categorylist: state => state.categoryList,
                taglist: state => state.tagList,
                bloglist: state => state.blogList,
                userlist: state => state.user_list,
            }),

        },

        mounted(){
            this.countCategory();
            this.countSubCategory();
            this.countTag();
            this.countBlog();
            this.categoryList();
            this.tagList();
            this.blogList();
            this.userList();
            this.createChart('myChart', this.planetChartData);
        },

        methods: {

            ...mapActions({
                blog_approve: 'blogpost/blog_approve',
                blog_unapprove: 'blogpost/blog_unapprove',
                blog_publish: 'blogpost/blog_publish',
                blog_unpublish: 'blogpost/blog_unpublish',
                blog_feature: 'blogpost/blog_feature',
                blog_unfeature: 'blogpost/blog_unfeature',
            }),

            createChart(chartId, chartData) {
                const ctx = document.getElementById(chartId);
                 new Chart(ctx, {
                    type: chartData.type,
                    data: chartData.data,
                    options: chartData.options,
                });
            },

            approve(id){
                this.blog_approve(id).then(() => {
                    this.$swal.fire({
                        toast: true,
                        position: 'top-end',
                        icon: 'success',
                        title: 'Blog Approve Successful',
                        showConfirmButton: false,
                        timer: 1500
                    });
                });
                this.blogList();
            },

            unapprove(id){
                this.blog_unapprove(id).then(() => {
                    this.$swal.fire({
                        toast: true,
                        position: 'top-end',
                        icon: 'success',
                        title: 'Blog Approve Remove Successful',
                        showConfirmButton: false,
                        timer: 1500
                    });
                });
                this.blogList();
            },

            Blogpublish(id){
                this.blog_publish(id).then(() => {
                    this.$swal.fire({
                        toast: true,
                        position: 'top-end',
                        icon: 'success',
                        title: 'Blog Publish Successful',
                        showConfirmButton: false,
                        timer: 1500
                    });
                });
                this.blogList();
            },

            Blogunpublish(id){
                this.blog_unpublish(id).then(() => {
                    this.$swal.fire({
                        toast: true,
                        position: 'top-end',
                        icon: 'success',
                        title: 'Blog Publish Remove Successful',
                        showConfirmButton: false,
                        timer: 1500
                    });
                });

                this.blogList();
            },

            Blogfeature(id){
                this.blog_feature(id).then(() => {
                    this.$swal.fire({
                        toast: true,
                        position: 'top-end',
                        icon: 'success',
                        title: 'Blog Feature Successful',
                        showConfirmButton: false,
                        timer: 1500
                    });
                });
                this.blogList();
            },

            Blogunfeature(id){
                this.blog_unfeature(id).then(() => {
                    this.$swal.fire({
                        toast: true,
                        position: 'top-end',
                        icon: 'success',
                        title: 'Blog Feature Remove Successful',
                        showConfirmButton: false,
                        timer: 1500
                    });
                });
                this.blogList();
            },

            countCategory: async function(){
                try {
                    await this.$store.dispatch('Category_Count');
                }catch (e) {
                    console.log(e);
                }
            },

            countSubCategory: async function(){
                try {
                    await this.$store.dispatch('Sub_Category_Count');
                }catch (e) {
                    console.log(e);
                }
            },

            countTag: async function(){
                try {
                    await this.$store.dispatch('Tag_Count');
                }catch (e) {
                    console.log(e);
                }
            },

            countBlog: async function(){
                try {
                    await this.$store.dispatch('Blog_Count');
                }catch (e) {
                    console.log(e);
                }
            },

            categoryList: async function(){
                try {
                    await this.$store.dispatch('getCategoryList');
                }catch (e) {
                    console.log(e);
                }
            },

            tagList: async function(){
                try {
                    await this.$store.dispatch('getTagList');
                }catch (e) {
                    console.log(e);
                }
            },

            blogList: async function(){
                try {
                    await this.$store.dispatch('getBlogList');
                }catch (e) {
                    console.log(e);
                }
            },

            userList: async function(){
                try {
                    await this.$store.dispatch('getUserList');
                }catch (e) {
                    console.log(e);
                }
            }
        }
    }
</script>

<style scoped>

</style>