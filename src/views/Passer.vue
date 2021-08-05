<template>
<div class="passer-container">
 
  <div class="container">
        <TopNav />

    <div class="passer">
        <MainNavbar active='Passer' />
      
        <div class="passer-content">
            <h1>Passer commande en 2 clics</h1>

            <div class="passer-info">
              <div class="passer-info-item">
                <img src="../assets/passer/main-content/security.png" alt="">
                <h5>Toutes vos <span style="font-weight:bold">donnés sont cryptés sur des serveurs en France</span> 
                  <br> seuls nos pharmaciens ont accès aux commandes</h5>
              </div>

              <div class="passer-info-item">
                <img src="../assets/passer/main-content/payment.png" alt="">
                <h5>Dès que votre commande est prête le paiement se fera par
                <br> <span style="font-weight:bold">carte bancaire ou virement sepa</span> 
                  </h5>
              </div>


              <div class="passer-info-item">
                <img src="../assets/passer/main-content/shipping-fast.png" alt="">
                <h5>Nous nous engageons à préparer votre commande <span style="font-weight:bold">en 1 heure, 
                <br>  et à vous livrer en moins de 6 heures*</span> 
                </h5>
              </div>
            </div>

            <div class="file-input">
              <router-link to="/Passer" class="inp-link">
              <img src="../assets/passer/main-content/card1.png" id="Rajouter" alt="" />
              </router-link>
                  
                <router-link to="/PasserCom" class="inp-link">
                <img src="../assets/passer/main-content/card.png" alt="" id="Taper">
                </router-link>
              <!-- <input type="file" name="Rajouter" id="Rajouter">
              <input type="file" name="Taper" id="Taper"> -->
            </div>

            <div class="file-input-large">  
                    <div class="upload-1">
                      <!-- <img src="../assets/passer/main-content/Upload-1.png" alt="" style="cursor:pointer"> -->
                        <Upload1 />
                    </div>

                    <div class="upload-2">
                        <!-- <img src="../assets/passer/main-content/Upload-2.png" alt="" style="cursor:pointer"> -->
                        <Upload2 />
                    </div>
            </div>

            <h1 id="Raj"><img src="../assets/passer/main-content/Rajouter.png" alt=""></h1>
            <h1 id="Date"><img src="../assets/passer/main-content/Date.png" alt=""></h1>

            <div class="passer-card">
                <PasserCard />
            </div>

            <div class="AdressIcon">
                <AdressIcon />
            </div>

            <div class="Ajou">
                <Ajou />
            </div>

            <div class="DateIcon">
              <DateIcon />
            </div>

            <!-- <div class="Calender">
              <img src="../assets/passer/main-content/cal.png" alt="">
              <Cal />
            </div> -->

             <div class="Calender">
              <Cal2 />
            </div>
        </div>
    </div>
    </div>
    
  </div>

</template>

<script>
import MainNavbar from '../components/MainNavbar.vue'
import TopNav from '../components/TopNav.vue'
import PasserCard from '../components/PasserCard.vue'
import AdressIcon from '../components/Passer/AddressIcon.vue'
import Ajou from '../components/Passer/Ajou.vue'
import DateIcon from '../components/Passer/DateIcon.vue'
import Upload1 from '../assets/passer/main-content/Upload-1.vue'
import Upload2 from '../assets/passer/main-content/Up2.vue'
// import Cal from '../assets/passer/main-content/Cal.vue'
import Cal2 from '../assets/passer/main-content/Cal2.vue'

export default {
  name: 'Passer',
  components: {
    MainNavbar,
    TopNav,
    Upload1,
    Upload2,
    PasserCard,
    AdressIcon,
    Ajou,
    DateIcon,
    // Cal,
    Cal2
  }
}
</script>

<style scoped>
  .passer-container{
      background:#F5F6F7;padding: 10px;
  }
  .passer{
    display: flex;
    font-family: 'Open Sans', sans-serif;
  }

  .passer-content{
    max-width: 75%;
    margin: 2em 0;
}
  .passer-content h1{
    font-size: 67px;
    display: block;
    margin: 1em 0;
  }
  .passer-info{
    display: block;
    /* background: red; */
      /* margin: 3em 0; */
      padding: 2em 0;
  }

  .passer-info-item{
    display: flex;
    margin: 3em 0em;
  }
  .passer-info-item img{
      height: 75px;
      width: 70px;
      display: block;
      margin: 0 2em;
      object-fit: contain;
  }
  .passer-info-item h5{
    display: block;
    font-size: 30px;
    color: #59626A
}
  .passer-info-item h5 span{
    color: rgba(0, 0, 0, 0.575);
  }

  .file-input{
    display: flex;
    width: clamp(400px,65vw,1000px);
  } 
  .file-input .inp-link{
    width: 50%;
    /* background: #000; */
}
  .file-input .inp-link img{
    width: 100%;
    height: 100%;
  }
  
  .file-input-large{
    margin: 0em 2em 0 2em;
    /* background: #000; */
  }
  .file-input-large img{
    height: 600px;
  }

  #Raj img, #Date img{
    display: block;
    margin: 2em 0 2em 1em;
   width: clamp(300px,60vw,900px);
  }

  .passer-card{
     width: clamp(300px,65vw,1000px);
    margin: 2em 0 2em 1em;

  } 
  #Group_2962{
    fill: white;
    cursor: pointer;
  }

  .AdressIcon{
    width: clamp(400px,60vw,800px);
     /* background: #000; */
    margin: 0 5em;
  }
  .Ajou{
    display: block;
     width: clamp(300px,60vw,1000px);
    margin: 2em 0 2em 1em;
    
  }
  .DateIcon{
    display: block;
    margin: 2em 0 2em 1em;
   width: clamp(300px,60vw,1000px);

  }
  .Calender{
    /* background: red; */
    display: block;
    /* margin: 2em 0 2em 1em; */
   /* width: clamp(300px,60vw,1000px); */
   width: 1050px;
   /* height: 700px; */
   /* padding: 1em 2em 1em 0;
  border-radius: 90px; */
  }
  .Calender img{
    display: block;width: 100%;height: 100%;
    cursor: pointer;
  }
</style>



<style scoped>

    @media(max-width:1550px){

      .passer{
        flex-direction: column;
        align-items: center;
    }
      
      .table-content-rows{
        width: 78vw;
        overflow-y:auto;
        /* overflow-x:hidden;  */
      }


      .table-content-row,.head-row{
        width: 1201px;
        max-width: 1201px;
        overflow-x: auto;
      }

      .table-border-right{opacity: 0;}

      .passer-content{
        max-width: 95%;
        margin: .25em auto;
      }
      .head-line {
        max-width: 90vw;

      }
      .head-line svg {
        width: 100% !important;
      }
      .passer-content h1{
        font-size: 7vw;
          }

          .left-border{width: 9vw;}

      .head-row h5 {
          font-size: 3vw;
      }
      .table-content-row p {
          display: flex;
          font-size: 2.5vw;
      }

      .file-input{width: 100%;}


    }



    @media(max-width: 1300px){
      .passer-content{
        width: 100%;
      }
        .file-input-large, .passer-card, .AdressIcon, .Ajou, .DateIcon {
          width: 95vw;
          margin: 0 auto;
        }

        .Calender{width: 95vw;margin: 0 auto;}
        .AdressIcon{margin: 0;}


        #Raj img, #Date img {
          margin: 0
        }
        #Raj{
          width: 95%;
          margin: 0 auto;
        }
        #Raj img{
           height: 100%;
          width: 100%;
            margin: 0
          }

        #Date img {
          height: 100%;
          width: 100%;
          margin: 0 
        }

    }



    @media(max-width: 768px){
       .table-content-row p ,.head-row h5:nth-of-type(1){
          font-size: 3vw !important;
      }
      .head-row h5{
        width: 12%;
        text-align: center;
      }
      
      .head-row h5:nth-of-type(3){
        padding-left: 0px;
      }
      .table-content-row .table-ref,
      .table-content-row .date-ref,
      .table-content-row .table-commande,
      .table-content-row .table-montant,
      .table-content-row a,
      .table-content-row .table-reg{
        width: 13%;
        /* max-width: 12%; */
        /* background: red; */
      }
      .table-content-rows {
         /* width: 80vw; */
      }

      .table-content-row .table-reg:nth-of-type(1) {
        /* margin: 0 0em 0 5vw ; */
      }

      #fac-btn{
        width: 16%;
        /* background: red; */
      }

      .passer-info-item{
        flex-direction: column;
        align-items: center;
      }
      .passer-info-item h5 {
        font-size: 4vw;
        margin: 10px 0;
      }



    }


   @media(max-width: 500px){
       .table-content-row p ,.head-row h5:nth-of-type(1){
          font-size: 15px !important;
       }
   }
</style>
