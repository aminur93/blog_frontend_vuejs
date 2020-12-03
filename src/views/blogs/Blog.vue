<template>
    <v-app>
        <Header />

        <v-main class="mx-4 mb-4">
            <router-view></router-view>
        </v-main>

        <Footer />
    </v-app>
</template>

<script>
    import Header from '../../components/blog/Header.vue';
    import Footer from '../../components/blog/Footer.vue';

    export default {
        components: {
            Header,
            Footer
        },
        name: "Blog",
        title: 'Blogs',
    }
</script>

<style scoped>
    #app{
        background: #f5f5f5;
    }
</style>