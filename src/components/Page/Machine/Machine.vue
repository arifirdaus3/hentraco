<template>
    <div>



<section class="insides_page pg_default pg-machine" >
    <div class="prelatife container_def">
        <div class="content-texts inners text-center">
            <div class="py-5"></div>
            <div class="row">
                <div class="col-md-15"></div>
                <div class="col-md-30">
                    <h3>Our Machine Tool & Industrial Machinery</h3>
                    <p>We are the sole agent and distributors for First milling machine and machining center, Chinhung / Kinwa lathe machine, Goodway CNC Lathe machine, with 40 years experience in machineries, we provide Service warranty, product troubleshoting and maintenance.</p>
                </div>
                <div class="col-md-15"></div>
            </div>
            <div class="py-3 my-3"></div>

            <div class="lists_default_datacategorys">
                <div class="row">
                    <div class="col-md-15" v-for="(item, index) in items" :key="index">
                        <div class="items prelatife">
                            <img src="../../../assets/images/ex-products_1.jpg" alt="" class="img img-fluid">
                            <div class="info">
                                <div class="row">
                                    <div class="col-40">
                                        <h6>{{ item.head }}</h6>
                                    </div>
                                    <div class="col-20 text-right">
                                        <div class="rghts_icon">
                                            <router-link to="/machinedetail" class="btn"><i class="fas fa-chevron-right"></i></router-link>
                                            <!-- <a class="btn" href="#"><i class="fa fa-chevron-right"></i></a> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-5"></div>
            <div class="py-2"></div>

            <div class="clear clearfix"></div>
        </div>
    </div>
</section>

    </div>
</template>

<script>

export default {
  name: "App",
  components: {
    // FontAwesomeIcon
  },
  data: () => ({
      dialog: false,
      drawer: true,
      fav: true,
      menu: false,
      message: false,
      hints: true,
      items: [{
          head: 'Lathe Machine',
          image: 'ex-products_1',
          link: '/machinedetail'
        },
        {
          head: 'Milling Machine',
          image: 'API',
          link: '/machinedetail'
        },
        {
          head: 'EDM Machine',
          image: 'API',
          link: '/machinedetail'
        },
        {
          head: 'CNC Machine',
          image: 'API',
          link: '/machinedetail'
        },
        {
          head: 'Grinding Machine',
          image: 'API',
          link: '/machinedetail'
        },
        {
          head: 'DRO Machine',
          image: 'API',
          link: '/machinedetail'
        },
        {
          head: 'Others',
          image: 'API',
          link: '/machinedetail'
        },
      ],
    }),
};
</script>