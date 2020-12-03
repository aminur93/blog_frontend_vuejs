<template>
    <div id="add_tag">
        <h1 class="subtitle-1 grey--text">Add Tag</h1>

        <v-container my-5>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-title>Add Tag</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="addTag">
                                <v-text-field type="text" v-model="tagData.tag_name" label="Tag"></v-text-field>
                                <span v-if="errors.tag_name" class="red--text">{{errors.tag_name[0]}}</span>

                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/dashboard/tag">Back</v-btn>
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
    export default {
        name: "add_tag",
        data(){
            return{
                tagData: {
                    tag_name: ''
                },

                errors: {},
            }
        },

        methods: {
            addTag: async function(){
                try {
                    let formData = new FormData();
                    formData.append('tag_name', this.tagData.tag_name);

                    await this.$store.dispatch('tag/add_tag', formData).then(()=> {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'Tag Added Successful',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });

                    this.tagData.tag_name = '';
                }catch (error) {
                    switch (error.response.status)
                    {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;

                        default:
                            this.$swal.fire({
                                icon: 'error',
                                text: 'Oops',
                                title: error.response.data.message,
                            });
                            break;
                    }
                }
            },
        }
    }
</script>

<style scoped>

</style>