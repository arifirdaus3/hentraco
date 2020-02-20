<template>
    <div>
        <header class="head">
            <div class="container_def mx-auto d-block">
                <div class="row">
                    <div class="col-md-30">
                        <div class="navbar-header">
                            <router-link to="/" class="navbar-brand">
                                <img v-if="this.$route.path == '/'" src="../../../assets/images/logo-headers_tln.png"
                                    class="img-responsive" alt="logo">
                                <img v-else src="../../../assets/images/logo-header-inside.png" class="img-responsive"
                                    alt="logo">
                            </router-link>
                        </div>
                    </div>
                    <div class="col-md-30 text-right">
                        <div class="blocks_vw_menu pt-3">
                            <a href="javascript:;" class="showmenu_barresponsive">
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


        <div class="outer-blok-black-menuresponss-hides" style="display: none;">
            <div class="prelatife container">
                <div class="clear height-45"></div>
                <div class="float-right mb-3">
                    <div class="hidesmenu-frightd"><a href="#" class="closemrespobtn"><img
                                src="../../../assets/images/closen-btn.png" alt=""></a></div>
                </div>
                <div class="blocksn_logo-centers">
                    <img src="../../../assets/images/lgo-popups-nn.png" alt="logo"
                        class="img img-fluid d-block mx-auto">
                </div>
                <div class="height-30 hidden-xs"></div>
                <div class="menu-sheader-datals py-4">
                    <ul class="list-unstyled">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/about">About Us</router-link></li>
                        <li><router-link to="/machine">Our Machine</router-link></li>
                        <li><router-link to="/location">Our Location</router-link></li>
                        <li><router-link to="/inquiry">Inquire Now</router-link></li>
                    </ul>
                </div>
                <div class="blocks-info-menubtm d-block mx-auto">
                    <span>Need Information?</span>
                    <div class="py-2 my-1"></div>
                    <div class="row justify-content-center">
                        <div class="col-md-30 col-sm-30 col-6">
                            <i class="fa fa-whatsapp"></i>
                            <div class="py-1"></div>
                            <p>Click to Whatsapp Chat<br>
                                <a href="tel:+62816848361">081 6848 361</a></p>
                        </div>
                        <div class="col-md-30 col-sm-30 col-6">
                            <i class="fa fa-envelope-o"></i>
                            <div class="py-1"></div>
                            <p>Send Us Email <br>
                                <a target="_blank" href="mailto:info@thekreator.com">info@hentraco.co.id</a></p>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>

                <div class="clear"></div>
            </div>
            <div class="clear"></div>
        </div>
        <Cover v-if="this.$route.path != '/'" />
        <Slide v-else />

    </div>
</template>

<script>
    import Slide from '../Slide/Slide';
    import Cover from '../Cover/Cover';
    import $ from 'jquery'

    export default {
        components: {
            Slide,
            Cover
        },
        mounted() {
            // Your JQuery code here
            $(function () {
                // show and hide menu responsive
                $('a.showmenu_barresponsive').on('click', function () {
                    $('.outer-blok-black-menuresponss-hides').slideToggle('slow');
                    return false;
                });
                $('a.closemrespobtn').on('click', function () {
                    $('.outer-blok-black-menuresponss-hides').slideUp('slow');
                    return false;
                });

            })
        }
    }
</script>