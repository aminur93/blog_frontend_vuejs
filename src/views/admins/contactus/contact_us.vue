<template>
    <div id="contact_us">

        <v-container class="my-5">
            <v-row>
                <v-col cols="12">
                    <v-card>

                        <v-row>
                            <v-col col="6">
                                <v-card-title>Contact Message</v-card-title>
                            </v-col>
                        </v-row>

                        <v-divider></v-divider>

                        <v-card-text>

                            <v-card-title>
                                All Contact Message List
                                <v-spacer></v-spacer>
                                <v-text-field
                                        v-model="search"
                                        append-icon="mdi-magnify"
                                        label="Search"
                                        single-line
                                        hide-details
                                        class="mb-5"
                                ></v-text-field>
                            </v-card-title>

                            <v-data-table :headers="headers" :items="contacts" :search="search"  class="elevation-1">

                                <template v-slot:item.actions="{ item }">

                                    <v-tooltip top>
                                        <template v-slot:activator="{ on }">
                                            <v-btn small text color="grey" v-on="on" router :to="`/dashboard/reply_message/${item.id}`">
                                                <v-icon left small>mdi-reply</v-icon>
                                                <span right class="caption text-lowercase">Reply Message</span>
                                            </v-btn>
                                        </template>
                                        <span>Reply Message</span>
                                    </v-tooltip>

                                </template>

                            </v-data-table>
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
        name: "contact_us",
        title: 'Blog - Contact Message',
        data(){
            return{
                search: '',
            }
        },

        computed: {
            headers(){
                return[
                    {text: '#Sl', value:'id',  align: 'start', sortable: false},
                    {text: 'Name', value: 'name'},
                    {text: 'Email', value: 'email'},
                    {text: 'Message', value: 'message'},
                    { text: 'Actions', value: 'actions', align: 'center', sortable: false },
                ]
            },

            ...mapState({
                contacts: state => state.contact_info
            }),
        },

        mounted(){
            this.getcontact()
        },

        methods: {
            ...mapActions({
                getcontact: 'get_contact'
            }),
        },
    }
</script>

<style scoped>

</style>