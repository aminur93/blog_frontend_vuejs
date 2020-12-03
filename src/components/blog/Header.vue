<template>
    <nav>
        <v-app-bar dense app>

            <v-toolbar-title class="text-uppercase grey--text" style="cursor: pointer" v-on:click="home">
                <span class="font-weight-light">Blog</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>


            <v-toolbar-title class="subtitle-2 grey--text mr-2">
                <v-btn text class="text-capitalize font-weight-light" route to="/">Home</v-btn>
            </v-toolbar-title>

            <v-toolbar-title class="subtitle-2 grey--text mr-2">
                <v-btn text class="text-capitalize font-weight-light" route to="/about">About</v-btn>
            </v-toolbar-title>

            <v-toolbar-title class="subtitle-2 grey--text mr-2">
                <v-btn text class="text-capitalize font-weight-light" route to="/contact">Contact</v-btn>
            </v-toolbar-title>

        </v-app-bar>

    </nav>


</template>

<script>
    export default {
        name: "Header",
        methods: {
            home(){
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>

</style>