<template>
  <div class="MainNavbar">
      <div class="side-nav">
        <div class="container">
            <div class="profile-info">
                <img src="../assets/MainNavbar/picture.png" alt="">
                <h5 style="color:#000">Magalie marchale</h5>
                <h6>Hôpitaux de Paris</h6>
            </div>

            <div class="nav-links">
              <div class="link one">
                <router-link to="/Passer">
                        <!-- <img v-show="active === 'Passer'" src="../assets/MainNavbar/Passer-inactive.png" alt=""> -->
                        <!-- <img v-show="active !== 'Passer'" src="../assets/MainNavbar/Passer-inactive.png" alt=""        style="margin:1.5em 1.5em 1em 1.5em"> -->
                        <svg  v-show="active === 'Passer'" xmlns="http://www.w3.org/2000/svg" style="background:var(--primary-saf-color);margin:1em .5em;padding:10px 20px;border-radius:10px" width="300" height="42" viewBox="0 0 258.089 32">
                        <g id="Passer_commande" data-name="Passer commande" transform="translate(-23.664 -15.212)">
                          <text id="Passer_commande-2" data-name="Passer commande" transform="translate(70 40)" fill="#fff" font-size="23" font-family="OpenSans-Semibold, Open Sans" font-weight="600"><tspan x="0" y="0">Passer commande</tspan></text>
                          <path id="inbox" d="M29.971,73.066l-5.55-7.979A2.535,2.535,0,0,0,22.339,64H8.086A2.535,2.535,0,0,0,6,65.088L.454,73.066A2.535,2.535,0,0,0,0,74.514v7.234a2.535,2.535,0,0,0,2.535,2.535H27.89a2.535,2.535,0,0,0,2.535-2.535V74.514A2.535,2.535,0,0,0,29.971,73.066ZM8.086,66.535H22.339l4.115,5.916h-6.47l-1.69,3.381H12.131l-1.69-3.381H3.97Zm19.8,15.213H2.535V74.987H8.874l1.69,3.381h9.3l1.69-3.381H27.89Z" transform="translate(23.664 -42.026)" fill="#fff"/>
                        </g>
                      </svg>

                        <svg  v-show="active !== 'Passer'" xmlns="http://www.w3.org/2000/svg" style="margin:1em .5em;padding:10px 20px;border-radius:10px" width="300" height="42" viewBox="0 0 258.089 32">
                        <g id="Passer_commande" data-name="Passer commande" transform="translate(-23.664 -15.212)">
                          <text id="Passer_commande-2" data-name="Passer commande" transform="translate(70 40)" fill="#8a8f9c" font-size="23" font-family="OpenSans-Semibold, Open Sans" font-weight="600"><tspan x="0" y="0">Passer commande</tspan></text>
                          <path id="inbox" d="M29.971,73.066l-5.55-7.979A2.535,2.535,0,0,0,22.339,64H8.086A2.535,2.535,0,0,0,6,65.088L.454,73.066A2.535,2.535,0,0,0,0,74.514v7.234a2.535,2.535,0,0,0,2.535,2.535H27.89a2.535,2.535,0,0,0,2.535-2.535V74.514A2.535,2.535,0,0,0,29.971,73.066ZM8.086,66.535H22.339l4.115,5.916h-6.47l-1.69,3.381H12.131l-1.69-3.381H3.97Zm19.8,15.213H2.535V74.987H8.874l1.69,3.381h9.3l1.69-3.381H27.89Z" transform="translate(23.664 -42.026)" fill="#8a8f9c"/>
                        </g>
                      </svg>

                </router-link>
              </div>

              <router-link to="/Mes" class="link two">
                <!-- <img src="../assets/MainNavbar/two.png" alt=""> -->
                        <svg  v-show="active === 'Mes'" xmlns="http://www.w3.org/2000/svg" style="background:var(--primary-saf-color);margin:2em .5em .5em .5em;padding:10px 15px;border-radius:10px" width="300" height="42" viewBox="0 0 258.089 32">
                          <g >
                            <text id="Mes_commandes" data-name="Mes commandes" transform="translate(52.924 26)" fill="#fff" font-size="24" font-family="OpenSans-Semibold, Open Sans" font-weight="600"><tspan x="0" y="0">Mes commandes</tspan></text>
                            <g id="Icon_feather-package" data-name="Icon feather-package" transform="translate(2 4.558)">
                              <path id="Path_133" data-name="Path 133" d="M22.691,12.913,11.25,6.315" transform="translate(-5.529 -3.508)" fill="none" stroke="#fff" stroke-width="1.5"/>
                              <path id="Path_134" data-name="Path 134" d="M27.383,20.8V10.628a2.543,2.543,0,0,0-1.271-2.2l-8.9-5.085a2.543,2.543,0,0,0-2.543,0l-8.9,5.085a2.543,2.543,0,0,0-1.271,2.2V20.8A2.543,2.543,0,0,0,5.771,23l8.9,5.085a2.543,2.543,0,0,0,2.543,0L26.111,23A2.543,2.543,0,0,0,27.383,20.8Z" transform="translate(-4.5 -3.003)" fill="none" stroke="#fff" stroke-width="1.5"/>
                              <path id="Path_135" data-name="Path 135" d="M4.9,10.44,16,16.86l11.1-6.42" transform="translate(-4.562 -4.137)" fill="none" stroke="#fff" stroke-width="1.5"/>
                              <path id="Path_136" data-name="Path 136" d="M18,30.814V18" transform="translate(-6.559 -5.29)" fill="none" stroke="#fff" stroke-width="1.5"/>
                            </g>
                          </g> 
                        </svg>
                       
                        <svg  v-show="active !== 'Mes'" xmlns="http://www.w3.org/2000/svg" style="margin:2em .5em .5em .5em;padding:10px 15px;border-radius:10px" width="300" height="42" viewBox="0 0 258.089 32">
                            <g >
                            <text id="Mes_commandes" data-name="Mes commandes" transform="translate(52.924 26)" fill="#8a8f9c" font-size="24" font-family="OpenSans-Semibold, Open Sans" font-weight="600"><tspan x="0" y="0">Mes commandes</tspan></text>
                            <g id="Icon_feather-package" data-name="Icon feather-package" transform="translate(2 4.558)">
                              <path id="Path_133" data-name="Path 133" d="M22.691,12.913,11.25,6.315" transform="translate(-5.529 -3.508)" fill="none" stroke="#8a8f9c" stroke-width="1.5"/>
                              <path id="Path_134" data-name="Path 134" d="M27.383,20.8V10.628a2.543,2.543,0,0,0-1.271-2.2l-8.9-5.085a2.543,2.543,0,0,0-2.543,0l-8.9,5.085a2.543,2.543,0,0,0-1.271,2.2V20.8A2.543,2.543,0,0,0,5.771,23l8.9,5.085a2.543,2.543,0,0,0,2.543,0L26.111,23A2.543,2.543,0,0,0,27.383,20.8Z" transform="translate(-4.5 -3.003)" fill="none" stroke="#8a8f9c" stroke-width="1.5"/>
                              <path id="Path_135" data-name="Path 135" d="M4.9,10.44,16,16.86l11.1-6.42" transform="translate(-4.562 -4.137)" fill="none" stroke="#8a8f9c" stroke-width="1.5"/>
                              <path id="Path_136" data-name="Path 136" d="M18,30.814V18" transform="translate(-6.559 -5.29)" fill="none" stroke="#8a8f9c" stroke-width="1.5"/>
                            </g>
                          </g> 
                        </svg>
                       

                         <!-- <svg  v-show="active !== 'Mes'" xmlns="http://www.w3.org/2000/svg" style="margin:1em .5em;padding:10px 20px;border-radius:10px" width="250" height="42" viewBox="0 0 258.089 32">
                          <g >
                            <text id="Mes_commandes" data-name="Mes commandes" transform="translate(50 26)" fill="#8a8f9c" font-size="24" font-family="OpenSans-Semibold, Open Sans" font-weight="600"><tspan x="0" y="0">Mes commandes</tspan></text>
                            <g id="Icon_feather-package" data-name="Icon feather-package" transform="translate(0 4)">
                              <path id="Path_133" data-name="Path 133" d="M22.691,12.913,11.25,6.315" transform="translate(-5.529 -3.508)" fill="none" stroke="#8a8f9c" stroke-width="1.5"/>
                              <path id="Path_134" data-name="Path 134" d="M27.383,20.8V10.628a2.543,2.543,0,0,0-1.271-2.2l-8.9-5.085a2.543,2.543,0,0,0-2.543,0l-8.9,5.085a2.543,2.543,0,0,0-1.271,2.2V20.8A2.543,2.543,0,0,0,5.771,23l8.9,5.085a2.543,2.543,0,0,0,2.543,0L26.111,23A2.543,2.543,0,0,0,27.383,20.8Z" transform="translate(-4.5 -3.003)" fill="none" stroke="#8a8f9c" stroke-width="1.5"/>
                              <path id="Path_135" data-name="Path 135" d="M4.9,10.44,16,16.86l11.1-6.42" transform="translate(-4.562 -4.137)" fill="none" stroke="#8a8f9c" stroke-width="1.5"/>
                              <path id="Path_136" data-name="Path 136" d="M18,30.814V18" transform="translate(-6.559 -5.29)" fill="none" stroke="#8a8f9c" stroke-width="1.5"/>
                            </g>
                          </g> 
                        </svg> -->
              </router-link>
              <!-- {{active}} -->
              <router-link to="/Mes-address" class="link three">
                <!-- <img src="../assets/MainNavbar/three.png" alt="">< -->
                        <svg  v-show="active === 'Mes-add'" xmlns="http://www.w3.org/2000/svg" style="background:var(--primary-saf-color);margin:1em .5em;padding:10px 15px;border-radius:10px" width="300" height="42" viewBox="0 0 258.089 32">
                             <text id="Mes_Adresses" data-name="Mes Adresses" transform="translate(49.924 24.634)" fill="#fff" font-size="24" font-family="OpenSans-Semibold, Open Sans" font-weight="600"><tspan x="0" y="0">Mes Adresses</tspan></text>
                              <path id="Icon_awesome-map-marker-alt" data-name="Icon awesome-map-marker-alt" d="M8.588,25.009C1.345,14.509,0,13.431,0,9.572a9.572,9.572,0,1,1,19.143,0c0,3.859-1.345,4.937-8.588,15.438a1.2,1.2,0,0,1-1.967,0Zm.984-11.45A3.988,3.988,0,1,0,5.583,9.572,3.988,3.988,0,0,0,9.572,13.56Z" transform="translate(5 3)" fill="#fff"/>
                      </svg>
                        <svg  v-show="active !== 'Mes-add'" xmlns="http://www.w3.org/2000/svg" style=";margin:1em .5em;padding:10px 15px;border-radius:10px" width="300" height="42" viewBox="0 0 258.089 32">
                              <text id="Mes_Adresses" data-name="Mes Adresses" transform="translate(49.924 24.634)" fill="#8a8f9c" font-size="24" font-family="OpenSans-Semibold, Open Sans" font-weight="600"><tspan x="0" y="0">Mes Adresses</tspan></text>
                              <path id="Icon_awesome-map-marker-alt" data-name="Icon awesome-map-marker-alt" d="M8.588,25.009C1.345,14.509,0,13.431,0,9.572a9.572,9.572,0,1,1,19.143,0c0,3.859-1.345,4.937-8.588,15.438a1.2,1.2,0,0,1-1.967,0Zm.984-11.45A3.988,3.988,0,1,0,5.583,9.572,3.988,3.988,0,0,0,9.572,13.56Z" transform="translate(5 3)" fill="#8a8f9c"/>
                        </svg>
                </router-link>
              <div class="link four">
                <router-link to="/Mes-Fac" class="link four">
                <!-- <img src="../assets/MainNavbar/three.png" alt="">< -->
                        <svg  v-show="active === 'Mes-Fac'" xmlns="http://www.w3.org/2000/svg" style="background:var(--primary-saf-color);margin:.1em .5em 1em;padding:10px 15px;border-radius:10px" width="300" height="42" viewBox="0 0 258.089 32">
                             <!-- <text id="Mes_Adresses" data-name="Mes Adresses" transform="translate(49.924 24.634)" fill="#fff" font-size="24" font-family="OpenSans-Semibold, Open Sans" font-weight="600"><tspan x="0" y="0">Mes Adresses</tspan></text> -->
                              <!-- <path id="Icon_awesome-map-marker-alt" data-name="Icon awesome-map-marker-alt" d="M8.588,25.009C1.345,14.509,0,13.431,0,9.572a9.572,9.572,0,1,1,19.143,0c0,3.859-1.345,4.937-8.588,15.438a1.2,1.2,0,0,1-1.967,0Zm.984-11.45A3.988,3.988,0,1,0,5.583,9.572,3.988,3.988,0,0,0,9.572,13.56Z" transform="translate(5 3)" fill="#fff"/> -->
                              <text id="Mes_Factures" data-name="Mes Factures" transform="translate(49.924 23.5)" fill="#fff" font-size="24" font-family="OpenSans-Semibold, Open Sans" font-weight="600"><tspan x="0" y="0">Mes Factures</tspan></text>
                              <path id="Icon_material-payment" data-name="Icon material-payment" d="M29.622,6H5.958A2.935,2.935,0,0,0,3.015,8.958L3,26.706a2.948,2.948,0,0,0,2.958,2.958H29.622a2.948,2.948,0,0,0,2.958-2.958V8.958A2.948,2.948,0,0,0,29.622,6Zm0,20.706H5.958V17.832H29.622Zm0-14.79H5.958V8.958H29.622Z" transform="translate(1 -2)" fill="#fff"/>

                      </svg>
                        <svg  v-show="active !== 'Mes-Fac'" xmlns="http://www.w3.org/2000/svg" style=";margin:.1em .5em 1em;padding:10px 15px;border-radius:10px" width="300" height="42" viewBox="0 0 258.089 32">
                           <text id="Mes_Factures" data-name="Mes Factures" transform="translate(49.924 23.5)" fill="#8a8f9c" font-size="24" font-family="OpenSans-Semibold, Open Sans" font-weight="600"><tspan x="0" y="0">Mes Factures</tspan></text>
                              <path id="Icon_material-payment" data-name="Icon material-payment" d="M29.622,6H5.958A2.935,2.935,0,0,0,3.015,8.958L3,26.706a2.948,2.948,0,0,0,2.958,2.958H29.622a2.948,2.948,0,0,0,2.958-2.958V8.958A2.948,2.948,0,0,0,29.622,6Zm0,20.706H5.958V17.832H29.622Zm0-14.79H5.958V8.958H29.622Z" transform="translate(1 -2)" fill="#8a8f9c"/>
                     </svg>
                </router-link>

    

                <!-- <img src="../assets/MainNavbar/four.png" alt=""> -->
                </div>


              <!-- <div class="link five"><img src="../assets/MainNavbar/five.png" alt=""></div> -->
              <h6>Service client 7j/7</h6>

              <div class="link six">
                <router-link to="/Nous" class="link four">
                    <svg  v-show="active === 'Nous'" xmlns="http://www.w3.org/2000/svg" style="background:var(--primary-saf-color);margin:.1em .5em 1em;padding:10px 15px;border-radius:10px" width="300" height="42" viewBox="0 0 258.089 32">
                      <text id="Nous_contacter" data-name="Nous contacter" transform="translate(50.708 25)" fill="#fff" font-size="23" font-family="OpenSans-Semibold, Open Sans" font-weight="600"><tspan x="0" y="0">Nous contacter</tspan></text>
                      <path id="life-ring" d="M21.522,35.044A13.522,13.522,0,1,0,8,21.522,13.522,13.522,0,0,0,21.522,35.044Zm-5.638-4.183L18.8,27.949a7,7,0,0,0,5.451,0l2.912,2.912a10.925,10.925,0,0,1-11.276,0Zm10-9.339a4.362,4.362,0,1,1-4.362-4.362A4.367,4.367,0,0,1,25.884,21.522Zm4.977,5.638-2.912-2.912a7,7,0,0,0,0-5.451l2.912-2.912A10.925,10.925,0,0,1,30.861,27.16Zm-3.7-14.977L24.248,15.1a7,7,0,0,0-5.451,0l-2.912-2.912A10.925,10.925,0,0,1,27.16,12.183Zm-14.977,3.7L15.1,18.8a7,7,0,0,0,0,5.451L12.183,27.16A10.925,10.925,0,0,1,12.183,15.884Z" transform="translate(-8 -6.31)" fill="#fff"/>
                    </svg>

                  <svg  v-show="active !== 'Nous'" xmlns="http://www.w3.org/2000/svg" style=";margin:.1em .5em 1em;padding:10px 15px;border-radius:10px" width="300" height="42" viewBox="0 0 258.089 32">
                    <text id="Nous_contacter" data-name="Nous contacter" transform="translate(50.708 25)" fill="#8a8f9c" font-size="23" font-family="OpenSans-Semibold, Open Sans" font-weight="600"><tspan x="0" y="0">Nous contacter</tspan></text>
                    <path id="life-ring" d="M21.522,35.044A13.522,13.522,0,1,0,8,21.522,13.522,13.522,0,0,0,21.522,35.044Zm-5.638-4.183L18.8,27.949a7,7,0,0,0,5.451,0l2.912,2.912a10.925,10.925,0,0,1-11.276,0Zm10-9.339a4.362,4.362,0,1,1-4.362-4.362A4.367,4.367,0,0,1,25.884,21.522Zm4.977,5.638-2.912-2.912a7,7,0,0,0,0-5.451l2.912-2.912A10.925,10.925,0,0,1,30.861,27.16Zm-3.7-14.977L24.248,15.1a7,7,0,0,0-5.451,0l-2.912-2.912A10.925,10.925,0,0,1,27.16,12.183Zm-14.977,3.7L15.1,18.8a7,7,0,0,0,0,5.451L12.183,27.16A10.925,10.925,0,0,1,12.183,15.884Z" transform="translate(-8 -6.31)" fill="#8a8f9c"/>
                  </svg>
                </router-link>

                <!-- <img src="../assets/MainNavbar/six.png" alt=""> -->
                </div>
              <div class="link seven">
                <img src="../assets/MainNavbar/seven.png" alt="">
                </div>  

              <div class="link eight"><img src="../assets/MainNavbar/slider.png" alt="" class="slider"></div>
            </div>
        </div>
      </div>
  </div>

</template>

<script>
export default {
  name: 'MainNavbar',
  props: ['active']
}
</script>

// Top Nav
<style scoped>
  .MainNavbar{
    font-family: 'Open Sans', sans-serif;
    overflow: visible;
    position: relative;
  }
  .container{
    max-width: 1500px;
    display: block;
    /* overflow-x: hidden; */
    overflow: visible;
    margin: 0 auto;;
  }

  .nav-content{
    display: flex;
    justify-content: space-between;
    max-width: 1550px;
    margin: 1em auto;
  }
  .logo{
    /* background: red; */
    margin: 10px 3em;
  }
  .left-nav, .right-nav{
    display: flex;
  }

  .left-nav ul{
    display: flex;
    margin: 40px 0 0 0;
    font-size: 18px;
   font-family: 'Roboto', sans-serif;
  } 
  .left-nav ul li{
    list-style: none;
    padding: 10px;
    color: var(--black);
  }
  .left-nav ul li a{
    all: unset;
    padding: 10px;
    cursor: pointer;
    }

  .right-nav{
    /* background: red; */
    margin: 20px 5em;
    font-size: 1.5em;
    /* width: 900px; */
  }
  
  .btn-clear button,
  .btn-fill-primary button{
    /* all: unset;
    padding: 20px;
    margin: 0 .5em; */
    }

  .btn-clear{
    color: var(--nav-blue);
    font-size: 29px;
   font-family: 'Roboto', sans-serif;
   font-weight: 600;
  }
  .btn-clear button{ all: unset;
    padding: 20px;
    margin: 0 .5em;
  }
  .btn-fill-primary{
    color: #fff;
    font-size: 22px;
   font-family: 'Roboto', sans-serif;
   font-weight: 600;
}
  .btn-fill-primary button{
    all: unset;
    cursor: pointer;
    border-radius: 27px;
    background: var(--primary-saf-color);
    padding: 20px 30px;
    margin: 0 .5em;
  }


  .home-container{
    display: flex;
   font-family: 'Roboto', sans-serif;
    /* background: red; */
  }
  .home-content{
    width: 40%;
    /* max-width: 768px; */
    /* background: rgb(0, 255, 21); */
    height: 500px;
    margin: auto 0 auto 3em;
    z-index: 2;
  }
  .home-content .text-blue{
    font-size: 2em;
    /* margin:  0 0 0; */
    color: var(--nav-blue);
    font-size: 26px;
   font-family: 'Roboto', sans-serif;
  }

  .home-content h1{
    display: block;
    margin: 1em 0;
    font-size: 47px;
   font-family: 'Roboto', sans-serif;
   font-weight: 600;
  }
  .home-content h1 span{
    /* letter-spacing: 5px; */
    word-spacing: 5px;
    white-space: nowrap;
    line-height: 1.3;
  }
  .home-content .text-black{
    font-size: 24px;
    /* background: red; */
    /* word-spacing: 3px; */
    white-space: nowrap;
    display: block; 
    margin: 20px 0;
    color: #212121;
  }

  
  .home-content .main-btn{
    all: unset;
    font-size: 25px;
    color: #fff;
    cursor: pointer;
    padding: 25px;
    text-align: center;
    display: block;
    margin: 2em 0;
    width: 300px; 
    border-radius: 27px;

    background: var(--primary-saf-color);
  }
  .home-content .text-sm{
    display: block;
    font-size: 20px;
    color: #212121
  }

  .home-showcase{
    width: 60%;
    overflow: hidden;
    z-index: 0;
  }
  .home-showcase img{
    height: 100%;
    width: 100%;
    z-index: -1
  }
</style>

// Side Nav
<style scoped>
  .side-nav{
    max-width: 100%;
    /* background: red; */
    font-size: 23px;
    font-weight: bold;
    color: #8A8F9C;
    margin: 0 1em;
  }
  .profile-info{
  margin: 2em .5em;
  /* background: red; */
    }
  .profile-info img{}
  .profile-info h5{
    display: block;
    margin: .5em 0;
  }
  .profile-info h6{}

  .nav-links{
    max-width: 350px;
  }
  
  .nav-links .link{
    cursor: pointer;
    /* background: #000; */
    margin: 10px 0;
  }
  .nav-links .link img{
    
  }
  .nav-links .link.one{
    /* background: red; */
    margin: 3em 0 0em;
  } 

  .nav-links h6{
    /* background: red; */
    display: block;
    margin: 1.5em 0;
  }
  .nav-links .link.eight{
    /* background: red; */
    margin: 8em 0;
  }
</style>

<style scoped>
@media(max-width:1700px){
.side-nav{margin: 0;}
}
</style>