<template>
    <div id="about_us">

        <v-container class="my-5">

            <v-row>
                <v-col cols="12" md="12" sm="12">
                    <v-card class="mb-5">
                        <v-card-title>About Our Company</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </v-card-text>
                    </v-card>

                </v-col>

                <template>
                    <v-col cols="12" class="text-center">
                        <h3>Our Team Member</h3>
                    </v-col>


                    <v-col cols="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
                        <v-card class="text-center ma-3">

                            <v-responsive class="pt-4 justify-center">
                                <v-avatar size="100" class="grey lighten-2">
                                    <img :src="person.avatar" alt="">
                                </v-avatar>
                            </v-responsive>

                            <v-card-text>
                                <div class="subtitle-1">{{ person.name }}</div>
                                <div class="grey--text">{{ person.role }}</div>
                            </v-card-text>

                        </v-card>
                    </v-col>
                </template>


            </v-row>

        </v-container>
    </div>
</template>

<script>
    export default {
        name: "about_us",
        title: 'Blogs - About',
        data(){
            return{
                team: [
                    { name: 'The Net Ninja', role: 'Web developer', avatar: '/avatar-1.png' },
                    { name: 'Ryu', role: 'Graphic designer' , avatar: '/avatar-2.png'},
                    { name: 'Chun Li', role: 'Web developer' , avatar: '/avatar-3.png'},
                    { name: 'Gouken', role: 'Social media maverick', avatar: '/avatar-4.png' },
                    { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png'}
                ]
            }
        },
    }
</script>

<style scoped>
    .theme--light.v-card{
        background: #f5f5f5;
    }
</style>