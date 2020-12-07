<template>
    <nav>
        <v-app-bar flat app>

            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Blog</span>
                <span>DashBoard</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <!--Start DropDown Menu-->
            <!--<v-menu offset-y>-->
                <!--<template v-slot:activator="{ on }">-->
                    <!--<v-btn text color="grey" v-on="on">-->
                        <!--<v-icon left>mdi-menu-down</v-icon>-->
                        <!--<span>Menu</span>-->
                    <!--</v-btn>-->
                <!--</template>-->

                <!--<v-list>-->
                    <!--<v-list-item v-for="link in links" :key="link.text" router :to="link.route" exact>-->
                        <!--<v-list-item-title>-->
                            <!--<v-icon>{{ link.icon }}</v-icon>-->
                            <!--{{ link.text }}-->
                        <!--</v-list-item-title>-->
                    <!--</v-list-item>-->
                <!--</v-list>-->
            <!--</v-menu>-->
            <!--end DropDown Menu-->

            <v-btn text color="grey" v-on:click="logout">
                <span>Sign out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>

        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app class="primary">

            <v-row class="justify-center">

                <v-col cols="6" class="mt-5">
                    <v-avatar size="100">
                        <img src="/avatar-1.png" />
                    </v-avatar>
                    <p class="white--text subtitle-1 mt-1" v-if="authenticated">{{ userInfo.name }}</p>

                </v-col>

            </v-row>


            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route" exact>

                    <v-list-item-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
            </v-list>


            <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn text class="primary" v-on="on" style="width: 100%" exact>
                            <span class="white--text mr-5"><v-icon>mdi-account-cog</v-icon> User Management</span>
                            <v-icon left class="white--text">mdi-menu-down</v-icon>
                        </v-btn>
                    </template>

                    <span @click="$event.stopPropagation()">
                        <v-list style="background-color: blueviolet;padding: 0px !important;">

                        <v-list-item route to="/dashboard/user" exact>
                            <v-list-item-title class="white--text">
                                <v-icon class="white--text">mdi-account</v-icon>
                                User
                            </v-list-item-title>
                        </v-list-item>

                        <v-list-item route to="/dashboard/role" exact>
                            <v-list-item-title class="white--text">
                                <v-icon class="white--text">mdi-alpha-r-box</v-icon>
                                Role
                            </v-list-item-title>
                        </v-list-item>

                        <v-list-item route to="/dashboard/permission" exact>
                            <v-list-item-title class="white--text">
                                <v-icon class="white--text">mdi-alpha-p-box</v-icon>
                                Permission
                            </v-list-item-title>
                        </v-list-item>

                    </v-list>
                    </span>

                </v-menu>

        </v-navigation-drawer>
    </nav>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "Navbar",
        data(){
            return{
                drawer: false,
                links: [
                    { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/dashboard' },
                    { icon: 'mdi-clipboard-list', text: 'Category', route: '/dashboard/category' },
                    { icon: 'mdi-view-list ', text: 'SubCategory', route: '/dashboard/subCategory' },
                    { icon: 'mdi-tag ', text: 'Tag', route: '/dashboard/tag' },
                    { icon: 'mdi-blogger', text: 'Blog Post', route: '/dashboard/blogpost' },
                    { icon: 'mdi-message', text: 'Contact Message', route: '/dashboard/contact_us' },
                ],
            }
        },

        computed: {
            ...mapGetters({
                authenticated: 'authenticated',
                userInfo: 'userInfo',
            })
        },

        methods: {
             logout: async function(){

                 try {
                     await this.$store.dispatch('logout');

                     await this.$router.push({ path: '/login' });
                 }catch (e) {
                    console.log(e);
                 }

            },
        },
    }
</script>

<style scoped>
    .v-list-item--active.active {
        color: inherit;
    }

    .v-menu__content {
        position: fixed;
        display: inline-block;
        max-width: 80%;
        overflow-y: auto;
        overflow-x: hidden;
        contain: content;
        will-change: transform;
        box-shadow: 0 0 0 0 !important;
        border-radius: 4px;
    }

    .theme--light.v-list {
    }

    .v-list {
    }

    .v-menu__content.theme--light.v-menu__content--fixed.menuable__content__active{
        left: 0px !important;
    }
</style>