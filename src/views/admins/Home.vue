<template>
    <v-app>

        <navbar />

        <v-main class="mx-4 mb-4">
            <router-view></router-view>
        </v-main>


        <v-footer padless>
            <v-card class="flex" flat tile>

                <v-card-text class="py-2 text-center">
                    {{ new Date().getFullYear() }} — <strong>AminurDev</strong>
                </v-card-text>
            </v-card>
        </v-footer>

    </v-app>
</template>

<script>
    import Navbar from '../../components/admin/Navbar.vue';

    export default {
        components: {
            Navbar
        },
        name: "home"
    }
</script>

<style scoped>
    #app{
        background: #f5f5f5;
    }

    .theme--light.v-card{
        background: #f5f5f5;
    }
</style>