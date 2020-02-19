<template>
    <div>
        <header class="head">
            <div class="container_def mx-auto d-block">
                <div class="row">
                    <div class="col-md-30">
                        <div class="navbar-header">
                            <a href="#" class="navbar-brand">
                                <img v-if="this.$route.path == '/'" src="../../../assets/images/logo-headers_tln.png"
                                    class="img-responsive" alt="logo">
                                
                                <img v-else src="../../../assets/images/logo-header-inside.png"
                                    class="img-responsive" alt="logo">
                            </a>
                        </div>
                    </div>
                    <div class="col-md-30 text-right">
                        <div class="blocks_vw_menu pt-3">
                            <a href="#">
                                <img v-if="this.$route.path == '/'" src="../../../assets/images/bloc_menu_header.png"
                                    class="img-responsive" alt="logo">
                                
                                <img v-else src="../../../assets/images/bloc_menu_header_inside.png" alt=""
                                    class="img img-fluid">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <Cover v-if="this.$route.path != '/'" />
        <Slide v-else />

    </div>
</template>

<script>
    import Slide from '../Slide/Slide';
    import Cover from '../Cover/Cover';

    export default {
        components: {
            Slide,
            Cover
        }
    }
</script>