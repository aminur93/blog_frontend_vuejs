<template>
    <div id="reply_message">

        <v-container my-5>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Reply Message</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="replyMessage">

                                <v-text-field type="text" v-model="contact.name" label="Name"></v-text-field>

                                <v-text-field type="text" v-model="contact.email" label="To"></v-text-field>

                                <v-text-field type="text" v-model="replyData.subject" label="Subject"></v-text-field>

                                <v-textarea type="text" v-model="replyData.message" label="Type Message"></v-textarea>

                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/dashboard/contact_us">Back</v-btn>
                                    <v-btn text type="submit" class="success mr-2">Submit</v-btn>

                                </v-row>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';

    export default {
        name: "reply_message",
        title: 'Blog - Reply Message',
        data(){
            return{
                replyData: {
                    subject: '',
                    message: '',
                },
            }
        },

        computed: {
            ...mapState({
                contact: state => state.single_contact
            }),

        },

        mounted(){
            this.singleContact(this.$route.params.id);
        },

        methods: {
            ...mapActions({
                singleContact: 'single_contact'
            }),

            replyMessage: async function(){
                try {
                    let formData = new FormData();
                    formData.append('name', this.contact.name);
                    formData.append('email', this.contact.email);
                    formData.append('subject', this.replyData.subject);
                    formData.append('message', this.replyData.message);

                    await this.$store.dispatch('reply_mail', formData).then(()=>{
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'Email Send Successful',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });

                    this.replyData = {};
                }catch (e) {
                    console.log(e);
                }
            },
        },
    }
</script>

<style scoped>

</style>