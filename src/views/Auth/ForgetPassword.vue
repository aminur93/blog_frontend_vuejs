<template>
    <div id="forget-password">

        <v-container>
            <v-row wrap>
                <v-col col="12" md="6" offset-md="3">

                    <v-card>
                        <v-card-title class="justify-center">Forget Password</v-card-title>

                        <v-divider></v-divider>

                        <v-card-text>
                            <v-form v-on:submit.prevent="forgetPass">

                                <v-text-field type="email" label="Email" v-model="forget.email" prepend-icon="mdi-email"></v-text-field>

                                <v-row class="justify-end">
                                    <v-btn text  class="info mr-2" router to="/login">Back</v-btn>
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
        name: "ForgetPassword",
        title: 'Blogs - Forget Password',
        data(){
            return{
                forget: {
                    email: ''
                }
            }
        },

        methods: {
            forgetPass: async function(){
                try {
                    let formData = new FormData();
                    formData.append('email', this.forget.email);

                    await this.$store.dispatch('send_email', formData).then(()=>{
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: this.$store.state.emailinfo.message,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    });
                    this.forget={};
                }catch (e) {
                    if (e.response.status === 404)
                    {
                        this.$swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'error',
                            title: e.response.data.error,
                            showConfirmButton: false,
                            timer: 2500
                        });
                    }
                }
            },
        }
    }
</script>

<style scoped>
.container{
    margin-top: 100px;
}
</style>