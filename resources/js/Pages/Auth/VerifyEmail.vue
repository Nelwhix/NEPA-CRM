<script setup>
import { useForm } from '@inertiajs/inertia-vue3';
import envelopeGif from "/public/images/verification-email.gif"


defineProps({
        email: String
})
const form = useForm();

const submit = () => {
    form.post(route('verification.send'));
};
</script>

<template>
        <Head title="Email Verification" />

    <div class="row justify-content-center mt-5" id="showUp">
        <div class="col-sm-12">
            <h6 class="text-center otptxt">
                <img :src="envelopeGif" width="300"> <br>
                <br>
                A Verification Email has been sent to <span> {{ email }} </span>
            </h6>

            <div class="otpBottom text-center">
                <h4> Expires in 10:00s </h4>
                <br>
                <h5>
                    Didn't get Email? <br><br>
                    <Link method="post" as="button" :href="route('verification.resend')" class="btn btn-primary btn-default btn-squared mx-auto">Resend
                    </Link>
                </h5>
            </div>
        </div>
    </div>
</template>
