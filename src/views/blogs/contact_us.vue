<template>
    <div id="contact_us">

        <v-container class="my-5">
            <v-row>
                <v-col cols="8" md="8" sm="8">
                    <v-card>
                        <v-card-title>Contact Us</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>

                            <v-form v-on:submit.prevent="contactInformation">
                                <v-row>

                                    <v-col col="6" md="6" sm="6">
                                        <v-text-field type="text" v-model="contactus.name" label="Name"></v-text-field>
                                    </v-col>

                                    <v-col col="6" md="6" sm="6">
                                        <v-text-field type="email" v-model="contactus.email" label="Email"></v-text-field>
                                    </v-col>

                                    <v-col cols="12" md="12" sm="12">
                                        <v-textarea v-model="contactus.message" label="Message"></v-textarea>
                                    </v-col>

                                </v-row>

                                <v-row class="justify-end">
                                    <v-btn text type="submit" class="success mr-2">Submit</v-btn>
                                </v-row>
                            </v-form>

                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="4" md="4" sm="4">
                    <v-card>
                        <v-card-title>Office Information</v-card-title>
                        <v-divider></v-divider>

                        <v-card-text>
                            <v-col cols="12">
                                <v-icon small color="green dark">mdi-email</v-icon>
                                 aminurrashid126@gmail.com
                            </v-col>

                            <v-col cols="12">
                                <v-icon small color="blue dark">mdi-phone</v-icon>
                                +880 1772119941
                            </v-col>

                            <v-col cols="12">
                                <v-icon small color="orange dark">mdi-home-variant</v-icon>
                                113/C/3/A/1 , West Shewora para Mirpur Dhaka Bangladesh
                            </v-col>

                            <v-col cols="12">
                                <v-icon small color="orange dark">mdi-office-building-marker</v-icon>
                                Corporate Office Gulshan 1 Dhaka bangladesh
                            </v-col>

                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "contact_us",
        title: 'Blogs - Contact-Us',

        data(){
            return{
                contactus:{
                    name: '',
                    email: '',
                    message: ''
                }
            }
        },

        methods: {
            contactInformation: async function(){
                try {
                    let formData = new FormData();
                    formData.append('name', this.contactus.name);
                    formData.append('email', this.contactus.email);
                    formData.append('message', this.contactus.message);

                    await this.$store.dispatch('contact_blog', formData).then(()=>{
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'Message Sent Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });
                    this.contactus={};
                }catch (e) {
                    console.log(e)
                }
            }
        },
    }
</script>

<style scoped>
    .theme--light.v-card{
        background: #f5f5f5;
    }
</style>