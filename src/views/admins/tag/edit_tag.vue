<template>
    <div id="edit_tag">
        <h1 class="subtitle-1 grey--text">Edit Tag</h1>

        <v-container my-5>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Edit Tag</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="updateTag">
                                <v-text-field type="text" v-model="editTagData.tag_name" label="Tag"></v-text-field>
                                <span v-if="errors.tag_name" class="red--text">{{errors.tag_name[0]}}</span>

                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/dashboard/tag">Back</v-btn>
                                    <v-btn text type="submit" class="success mr-2">Edit</v-btn>

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
    import {mapState} from 'vuex';

    export default {
        name: "edit_tag",
        data(){
            return{
                errors: {}
            }
        },

        computed:{
            ...mapState({
                editTagData: state => state.tag.tag
            })
        },

        mounted(){
            this.showTag();
        },

        methods: {
            showTag: async function(){
                try {
                    let id = this.$route.params.id;

                    await this.$store.dispatch('tag/show_tag', id);
                }catch (e) {
                    console.log(e);
                }
            },

            updateTag: async function(){
                try {
                    let id = this.$route.params.id;
                    let formData = new FormData();

                    formData.append('tag_name', this.editTagData.tag_name);

                    await this.$store.dispatch('tag/update_tag', {id:id, data:formData}).then(() => {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'Tag Updated Successful',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });
                }catch (e) {
                    console.log(e);
                }
            }
        },
    }
</script>

<style scoped>

</style>