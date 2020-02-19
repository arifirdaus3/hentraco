<template>
    <div>
        <Header />
        <Slide />
        <Footer />
    </div>
</template>

<script>

import Header from '../Layout/Header/Header';
import Slide from '../Layout/Slide/Slide';
import Footer from '../Layout/Footer/Footer';

export default {
    components:{
        Header,
        Slide,
        Footer
    }
}
</script>
