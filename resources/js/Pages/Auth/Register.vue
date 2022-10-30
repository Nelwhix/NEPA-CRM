<script setup>
import  signUpBottom from '/public/images/signupBottom.svg'
import  signUpTop from '/public/images/signupTop.svg'


</script>

<template>
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
                                                <div class="edit-profile__body">

                                                    <div class="form-group">
                                                        <div class="row">
                                                            <div class="col-sm-6">
                                                                <label for="name">Firstname</label>
                                                                <input type="text" class="form-control" id="name" placeholder="enter here">
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <label for="name">Lastname</label>
                                                                <input type="text" class="form-control" id="name" placeholder="enter here">
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="form-group mb-20">
                                                        <label for="email">Email Address</label>
                                                        <input type="text" class="form-control" id="email" placeholder="name@example.com">
                                                    </div>
                                                    <div class="form-group mb-15">
                                                        <label for="password-field">password</label>
                                                        <div class="position-relative">
                                                            <input id="password-field" type="password" class="form-control" name="password" value="">
                                                            <span class="fa fa-fw fa-eye-slash text-light fs-16 field-icon toggle-password2"></span>
                                                        </div>
                                                    </div>
                                                    <div class="form-group mb-15">
                                                        <label for="password-field">Re-type password</label>
                                                        <div class="position-relative">
                                                            <input id="password-field" type="password" class="form-control" name="password" value="">
                                                            <span class="fa fa-fw fa-eye-slash text-light fs-16 field-icon toggle-password2"></span>
                                                        </div>
                                                    </div>
                                                    <div class="signUp-condition">
                                                        <div class="checkbox-theme-default custom-checkbox ">
                                                            <input class="checkbox" type="checkbox" id="check-1">
                                                            <label for="check-1">
                                                                <span class="checkbox-text">Creating an account means you’re okay
                                                                    with our <a href="#" class="color-secondary">Terms of
                                                                        Service</a> and <a href="#" class="color-secondary">Privacy
                                                                        Policy</a>
                                                                    my preference</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="button-group d-flex pt-1 justify-content-md-start justify-content-center">
                                                        <button class="btn btn-primary btn-default btn-squared text-capitalize lh-normal px-50 py-15 signUp-createBtn signIn-createBtn" onclick="window.location.href='dashboard.html';">
                                                            Create Account
                                                        </button>
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
            </div>
        </div>
    </main>
</template>
