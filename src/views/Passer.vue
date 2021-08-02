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
                <img src="../assets/passer/main-content/Upload-1.png" alt="" style="cursor:pointer">
                <img src="../assets/passer/main-content/Upload-2.png" alt="" style="cursor:pointer">
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

            <div class="Calender">
              <img src="../assets/passer/main-content/cal.png" alt="">
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
// import Calender from '../components/Passer/Calender.vue'

export default {
  name: 'Passer',
  components: {
    MainNavbar,
    TopNav,
    PasserCard,
    AdressIcon,
    Ajou,
    DateIcon
    // Calender
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
     /* width: clamp(300px,37vw,1000px); */
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

    display: block;
    margin: 2em 0 2em 1em;
   width: clamp(300px,60vw,1000px);
  }
  .Calender img{
    display: block;width: 100%;height: 100%;
    cursor: pointer;
  }
</style>