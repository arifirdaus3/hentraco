<template>

        <section class="cover-insidepage prelatife">

            <div class="pictures">
                <img v-if="this.$route.path == '/about'" src="../../../assets/images/ill-about.jpg" alt="" class="img img-fluid">
                <img v-if="this.$route.path == '/machine'" src="../../../assets/images/ill-machine.jpg" alt="" class="img img-fluid">
                <img v-if="this.$route.path == '/machinedetail'" src="../../../assets/images/ill-machine-detail.jpg" alt="" class="img img-fluid">
                <img v-if="this.$route.path == '/location'" src="../../../assets/images/ill-locations.jpg" alt="" class="img img-fluid">
                <img v-if="this.$route.path == '/inquiry'" src="../../../assets/images/ill-inquire.jpg" alt="" class="img img-fluid">



            </div>
            <div class="nblocks_desc text-center">
                <div class="inner">
                    <h1 v-if="this.$route.path == '/about'">About Us</h1>
                    <h1 v-if="this.$route.path == '/machine'">Our Machines</h1>
                    <h1 v-if="this.$route.path == '/machinedetail'">Our Machines</h1>
                    <h1 v-if="this.$route.path == '/location'">Our Location</h1>
                    <h1 v-if="this.$route.path == '/inquiry'">Inquire Now</h1>
                </div>
            </div>
        </section>
        
</template>

<script>
export default {
	
}
</script>

<style>
	
</style>