<template>
    <div id="main-content">
        <v-card class="mb-5" v-for="mblog in mainblog" :key="mblog.id">

            <v-img
                    :src="blogimage(mblog.image)"
                    height="200px"
            ></v-img>

            <v-card-title v-on:click="viewUpdate(mblog.id, mblog.view_count)">
                <router-link :to="`/details/${mblog.id}`" class="black--text lighten-6" style="text-decoration: none">{{ mblog.title }}</router-link>
            </v-card-title>

            <v-card-subtitle>
                <span v-html="$options.filters.textFormat(mblog.description)"></span>
            </v-card-subtitle>

            <v-card-actions>
                <v-btn color="orange lighten-2" text route :to="`/details/${mblog.id}`">
                    Explore
                </v-btn>

                <v-spacer></v-spacer>

                <span class="indigo--text font-weight-light mr-5" style="font-size: 12px;"><v-icon small>mdi-account</v-icon>  {{ mblog.name }}</span>
                <span class="orange--text font-weight-light mr-5" style="font-size: 12px;"><v-icon small>mdi-clipboard-list</v-icon> {{ mblog.category_name }}</span>
                <span class="blue-grey--text font-weight-light mr-5" style="font-size: 12px;"><v-icon small>mdi-tag</v-icon> {{ mblog.tag_name }}</span>
                <span class="green--text font-weight-light mr-5" style="font-size: 12px;"><v-icon small>mdi-eye</v-icon> {{ mblog.view_count }}</span>
            </v-card-actions>
        </v-card>
    </div>

</template>

<script>
    export default {
        name: "MainContent",
        props: ['mainblog'],

        methods: {
            blogimage(img){
                let server_path = this.$store.state.serverPath;

                return server_path + "/assets/uploads/original_image/" + img
            },

            viewUpdate(id, view_count){
                this.$parent.viewUpdate(id, view_count);
            }
        }
    }
</script>

<style scoped>

</style>