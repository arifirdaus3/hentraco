<template>
    <div>
        <Header />
        <router-view />
        <Footer />
    </div>
</template>

<script>


import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

export default {
    components:{
        Header,
        Footer,
    }
}
</script>
