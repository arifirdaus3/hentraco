<template>
    <div class="fcs-wrapper outers_fcs_wrapper prelatife wrapper-slide">
        <div class="container cont-fcs">
            <div id="myCarousel_home" class="carousel slide" data-ride="carousel" data-interval="4500">
                <div class="carousel-inner">

                    <div class="carousel-item activehome-slider-new">
                        <img class="w-100" src="../../../assets/images/fcs/fcs-1.jpg" alt="First slide"
                            style="background-repeat: no-repeat;background-size: cover;">
                        <!-- <img class="w-100 d-none d-sm-block" src="<?php echo $this->assetBaseurl; ?>Layer-71.jpg" alt="">  -->
                        <div class="carousel-caption caption-slider-home">
                            <div class="prelative container">
                                <div class="bxsl_tx_fcs">
                                    <div class="row no-gutters">
                                        <div class="col-md-60 text-center">
                                            <h5>Established Since 1972 - Experience Counts!</h5>
                                            <h3>Supplying High Precision & High Performance Lathe, CNC, Milling and
                                                other Machining Center</h3>
                                            <p>C.V. Hentraco has proven to be the most reliable & consistent machine
                                                tools & industrial machinery supplier for more than 40 years.</p>
                                            <a href="#" class="btn btn-default btns_defaults_blue">LEARN MORE ABOUT
                                                US</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- <div class="carousel-button-native">
                    <div class="">
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel_home" data-slide-to="0" class="active"></li>
                        </ol>
                    </div>
                </div> -->
            </div>

        </div>
    </div>
</template>

<script>
import $ from 'jquery'
    export default {
        mounted() {
            // Your JQuery code here
            $(document).ready(function () {

                if ($(window).width() >= 768) {
                    var $item = $('#myCarousel_home.carousel .carousel-item');
                    var $wHeight = $(window).height();
                    $item.eq(0).addClass('active');
                    $item.height($wHeight);
                    $item.addClass('full-screen');

                    $('#myCarousel_home.carousel img.w-100').each(function () {
                        var $src = $(this).attr('src');
                        var $color = $(this).attr('data-color');
                        $(this).parent().css({
                            'background-image': 'url(' + $src + ')',
                            'background-color': $color
                        });
                        $(this).remove();
                    });

                    $(window).on('resize', function () {
                        $wHeight = $(window).height();
                        $item.height($wHeight);
                    });

                    $('#myCarousel_home.carousel').carousel({
                        interval: 4000,
                        pause: "false"
                    });
                }

            });
        }
    }
</script>

<style>

</style>