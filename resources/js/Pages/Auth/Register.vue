<script setup>
import  signUpBottom from '/public/images/signupBottom.svg'
import  signUpTop from '/public/images/signupTop.svg'
import { useForm } from "@inertiajs/inertia-vue3";
import {ref} from "vue";

let form = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: {
        password: "",
        password_confirmed: "",
    },
    isOkayWithTerms: false
});

let refusedTerms = ref(false);
let showPassword = ref(false);
let showPasswordConfirmed = ref(false);

let register = () => {
    if (!form.isOkayWithTerms) {
        refusedTerms.value = true;
        return null;
    }
    form.post('/signup');
}
</script>

<template>
    <Head title="Sign Up" />
    <main class="main-content">
        <div class="signUP-admin">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-md-4">
                        <div class="signUP-admin-left signIn-admin-left position-relative">
                            <div class="signUP-overlay">
                                <img class="svg signupTop" :src="signUpTop" alt="img" />
                                <img class="svg signupBottom" :src="signUpBottom" alt="img" />
                            </div><!-- End: .signUP-overlay  -->
                            <div class="signUP-admin-left__content">
                                <h1>NEPA-CRM</h1>
                            </div><!-- End: .signUP-admin-left__content  -->
                        </div><!-- End: .signUP-admin-left  -->
                    </div><!-- End: .col-xl-4  -->
                    <div class="col-12 col-md-8">
                        <div class="signUp-admin-right  p-md-40 p-10">
                            <div class="signUp-topbar d-flex align-items-center justify-content-md-end justify-content-center mt-md-0 mb-md-0 mt-20 mb-1">
                                <p class="mb-0">
                                    Already have an account?
                                    <Link href="/" class="color-primary">
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                            <div class="row justify-content-center" id="hideSignup">
                                <div class="col-xl-9 col-lg-10 col-md-12 ">
                                    <div class="edit-profile mt-md-25 mt-0">
                                        <div class="card border-0">
                                            <div class="card-header border-0  pb-md-15 pb-10 pt-md-20 pt-10 ">
                                                <div class="edit-profile__title">
                                                    <h6>Sign up to <span class="color-primary">Admin</span></h6>
                                                </div>
                                            </div>
                                            <div class="card-body">
                                                <form @submit.prevent="register" class="edit-profile__body">

                                                    <div class="form-group">
                                                        <div class="row">
                                                            <div class="col-sm-6">
                                                                <label for="name">Firstname</label>
                                                                <input v-model="form.firstName" type="text" class="form-control" id="name" placeholder="enter here">
                                                                <p v-if="form.errors.firstName" v-text="form.errors.firstName" class="text-xs text-danger"></p>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <label for="name">Lastname</label>
                                                                <input v-model="form.lastName" type="text" class="form-control" id="name" placeholder="enter here">
                                                                <p v-if="form.errors.lastName" v-text="form.errors.lastName" class="text-xs text-danger"></p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="form-group mb-20">
                                                        <label for="email">Email Address</label>
                                                        <input v-model="form.email" type="text" class="form-control" id="email" placeholder="name@example.com">
                                                        <p v-if="form.errors.email" v-text="form.errors.email" class="text-xs text-danger"></p>
                                                    </div>
                                                    <div class="form-group mb-15">
                                                        <label for="password-field">password</label>
                                                        <div class="position-relative">
                                                            <input v-if="showPassword" v-model="form.password.password" type="text" class="form-control" placeholder="Enter Password">
                                                            <input v-else v-model="form.password.password" type="password" class="form-control" placeholder="Enter Password">
                                                            <span v-if="showPassword" @click="showPassword = !showPassword" class="passwordShow fa fa-fw fa-eye text-light fs-16 field-icon toggle-password2"></span>
                                                            <span v-else @click="showPassword = !showPassword" class="passwordShow fa fa-fw fa-eye-slash text-light fs-16 field-icon toggle-password2"></span>
                                                            <p v-if="form.errors.password" v-text="form.errors.password" class="text-xs text-danger"></p>
                                                        </div>
                                                    </div>
                                                    <div class="form-group mb-15">
                                                        <label for="password-field">Re-type password</label>
                                                        <div class="position-relative">
                                                            <input v-if="showPasswordConfirmed" v-model="form.password.password_confirmed" type="text" class="form-control" placeholder="Enter Password">
                                                            <input v-else v-model="form.password.password_confirmed" type="password" class="form-control" placeholder="Enter Password">
                                                            <span v-if="showPasswordConfirmed" @click="showPasswordConfirmed = !showPasswordConfirmed" class="passwordShow fa fa-fw fa-eye text-light fs-16 field-icon toggle-password2"></span>
                                                            <span v-else @click="showPasswordConfirmed = !showPasswordConfirmed" class="passwordShow fa fa-fw fa-eye-slash text-light fs-16 field-icon toggle-password2"></span>
                                                            <p v-if="form.errors.password_confirmed" v-text="form.errors.password_confirmed" class="text-xs text-danger"></p>
                                                        </div>
                                                    </div>
                                                    <div class="signUp-condition">
                                                        <div class="checkbox-theme-default custom-checkbox ">
                                                            <input v-model="form.isOkayWithTerms" class="checkbox" type="checkbox" id="check-1">
                                                            <label for="check-1">
                                                                <span class="checkbox-text">Creating an account means you’re okay
                                                                    with our <a href="#" class="color-secondary">Terms of
                                                                        Service</a> and <a href="#" class="color-secondary">Privacy
                                                                        Policy</a>
                                                                    my preference</span>
                                                            </label>
                                                            <p v-if="refusedTerms" class="text-xs text-danger">This box must be ticked to continue</p>
                                                        </div>
                                                    </div>
                                                    <div class="button-group d-flex pt-1 justify-content-md-start justify-content-center">
                                                        <button type="submit" :disabled="form.processing" class="btn btn-primary btn-default btn-squared text-capitalize lh-normal px-50 py-15 signUp-createBtn signIn-createBtn">
                                                            Create Account
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style>
    .passwordShow {

    }

    .passwordShow:hover {
        cursor:pointer;
    }
</style>
