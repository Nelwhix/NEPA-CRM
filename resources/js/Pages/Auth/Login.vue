<script setup>
import  signUpBottom from '/public/images/signupBottom.svg'
import  signUpTop from '/public/images/signupTop.svg'
import { useForm } from "@inertiajs/inertia-vue3";
import {ref} from "vue";

let form = useForm({
    email: "",
    password: "",
})

let showPassword = ref(false);

let login = () => {
    form.post('/login');
}
</script>

<template>
    <Head title="Log in" />
    <main class="main-content" style="background-color: white">
        <div class="signUP-admin">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-md-4">
                        <div class="signUP-admin-left position-relative h-100vh">
                            <div class="signUP-overlay">
                                <img class="svg signupTop" :src="signUpTop" alt="img" />
                                <img class="svg signupBottom" :src="signUpBottom" alt="img" />
                            </div><!-- End: .signUP-overlay  -->
                            <div class="signUP-admin-left__content">
                                <h1>NEPA-CRM</h1>
                            </div>
                        </div><!-- End: .signUP-admin-left -->
                    </div><!-- End: .col -->
                    <div class="mt-5 col-12 col-md-8">
                        <div class="signUp-admin-right h-100 pb-30">
                            <div class="row justify-content-center">
                                <div class="col-md-8 col-sm-10">
                                    <div class="edit-profile mt-0">
                                        <div class="card border-0">
                                            <div class="card-header border-0 pt-0 pb-0">
                                                <div class="signUp-header-top mt-md-0 mt-30">
                                                    <h6>Login to <span class="color-primary">Dashboard</span></h6>
                                                    <p class="mt-md-45 mt-20">Enter E-mail and Password</p>
                                                    <p class="mb-0"> <strong>
                                                        Don't have an account?

                                                        <Link href="/signup" class="color-primary">
                                                            Sign up
                                                        </Link>
                                                    </strong>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="card border-0">
                                                <div class="card-body">
                                                    <form @submit.prevent="login" class="edit-profile__body">
                                                        <div class="form-group mb-20">
                                                            <label for="email">Email Address</label>
                                                            <input v-model="form.email" type="text" class="form-control" id="email" placeholder="name@example.com">
                                                            <p v-if="form.errors.email" v-text="form.errors.email" class="text-xs text-danger"></p>
                                                        </div>
                                                        <div class="form-group mb-15">
                                                            <label for="password-field">password</label>
                                                            <div class="position-relative">
                                                                <input id="password-field" v-if="showPassword" v-model="form.password" type="text" placeholder="Enter Password" class="form-control">
                                                                <input id="password-field" v-else v-model="form.password" type="password" placeholder="Enter Password" class="form-control">
                                                                <span v-if="showPassword" @click="showPassword = !showPassword" class="passwordShow fa fa-fw fa-eye text-light fs-16 field-icon toggle-password2"></span>
                                                                <span v-else @click="showPassword = !showPassword" class="passwordShow fa fa-fw fa-eye-slash text-light fs-16 field-icon toggle-password2"></span>
                                                                <p v-if="form.errors.password" v-text="form.errors.password" class="text-xs text-danger"></p>
                                                            </div>
                                                        </div>
                                                        <div class="signUp-condition signIn-condition">
                                                            <div class="checkbox-theme-default custom-checkbox ">
                                                                <input class="checkbox" type="checkbox" id="check-1">
                                                                <label for="check-1">
                                                                    <span class="checkbox-text">Keep me logged in</span>
                                                                </label>
                                                            </div>
                                                            <a href="forget-password.html" class="ml-2">forget password</a>
                                                        </div>
                                                        <div class="button-group d-flex pt-1 justify-content-md-start justify-content-center">
                                                            <button class="btn btn-primary btn-default btn-squared  text-capitalize lh-normal px-50 py-15 signIn-createBtn " onclick="window.location.href='dashboard.html';">
                                                                Login
                                                            </button>
                                                        </div>

                                                    </form>
                                                </div><!-- End: .card-body -->
                                            </div><!-- End: .card -->
                                        </div><!-- End: .card -->
                                    </div><!-- End: .edit-profile -->
                                </div><!-- End: col -->
                            </div>
                        </div><!-- End: .signUp-admin-right -->
                    </div><!-- End: .col -->
                </div>
            </div>
        </div><!-- End: .signUP-admin -->
    </main>
</template>
