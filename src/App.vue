  
<template>
    <div>
        <Header />
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
export default {
    components:{
        Header,
        Footer,
    }
}
</script>

<style lang="scss">
  @import "./assets/sass/Global.scss";
</style>