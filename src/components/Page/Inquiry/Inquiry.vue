<template>
    <div>
        <section class="insides_page pg_default back-white pg_contacts" >
    <div class="prelatife container_def">
        <div class="py-5"></div>
        <div class="content-texts text-center pb-2">
            <p><b>Please fill out your contact details and we’ll get back to you as soon as possible</b></p>
        </div>
        <div class="content-texts inners text-center d-block mx-auto p-5">
            <form method="post" class="form" action="">
                <!-- <div class="alert alert-danger bg-danger">
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                        <h6>Please fix the following input errors:</h6>
                        <ul>
                        </ul>
                    </div> -->
                <!-- <div style="max-width:500px; margin:0 auto;">
                        <div class="alert alert-danger">
                            <button type="button" class="close" data-dismiss="alert">&times;</button>
                            Please Check Captcha for sending contact form! 
                        </div>
                        <div class="alert alert-success">
                            <button type="button" class="close" data-dismiss="alert">&times;</button>
                            Thank you for contacting us! we will respond to you shortly.
                        </div>
                </div> -->
                <!-- Default input name -->
                <label for="defaultFormRegisterNameEx" class="blue-text">YOUR NAME</label>
                <input type="text" id="defaultFormRegisterNameEx" name="Contact[name]" class="form-control">
                
                <br>

                <!-- Default input email -->
                <label for="defaultFormRegisterCopmanyEx" class="blue-text">COMPANY NAME</label>
                <input type="text" id="defaultFormRegisterEmailEx" name="Contact[company]" class="form-control">
                
                <br>

                <!-- Default input email -->
                <label for="defaultFormRegisterphoneEx" class="blue-text">INDUSTRY / BUSINESS</label>
                <input type="number" id="defaultFormRegisterConfirmEx" name="Contact[phone]" class="form-control">

                <br>
                <!-- Default input email -->
                <label for="defaultFormRegisterEmailEx" class="blue-text">CONTACT NUMBER</label>
                <input type="email" id="defaultFormRegisterEmailEx" name="Contact[phone]" class="form-control">
                <br>
                <!-- Default input email -->
                <label for="defaultFormRegisterEmailEx" class="blue-text">ADDRESS</label>
                <input type="email" id="defaultFormRegisterEmailEx" name="Contact[address]" class="form-control">
                <br>
                
                <!-- Default input password -->
                <label for="defaultFormRegistermassageEx" class="blue-text">YOUR INQUIRY / NOTES</label>
                <input type="text" id="defaultFormRegisterPasswordEx" name="Contact[message]" class="form-control">
                <br>
                <div class="row">
                    <div class="col-60">
                        <div class="g-recaptcha" data-sitekey="6LdcbVEUAAAAAHaXcHXpJNzulE_o9sPgIH2WUHBf"></div>
                    </div>
                    <div class="col-60">
                        <div class="text-center mt-4">
                            <button class="btn btn-primary" type="submit">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </form>
            <!-- Default form register -->


            <div class="clear clearfix"></div>
        </div>
        <div class="py-5"></div>
    </div>
</section>
</div>    
</template>

<script>
export default {
    
}
</script>