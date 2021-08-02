<template>
<div class="passer-container">
 
  <div class="container">
        <TopNav />

    <div class="passer">
        <MainNavbar active='Mes-Fac' />
      
        <div class="passer-content">
            <h1>Mes Factures</h1>

            <div class="head-line">
                 <headline />
            </div>
        
         
            <div class="table">
                <div class="left-border"></div>

                <div class="table-content">

                      <div class="table-border-right one"></div>
                      <div class="table-border-right two"></div>
                      <div class="table-border-right three"></div>
                      <div class="table-border-right four"></div>
                      <div class="table-border-right five"></div>

                  <div class="head-row">
                        <h5>Reféférence</h5>
                        <h5>Livré le</h5>
                        <h5>Etat</h5>
                        <h5>Facture</h5>
                        <h5>Facture</h5>
                        <h5 style="border-top-right-radius: 71px;border-bottom-right-radius:71px">Réglement</h5>
                  </div>

                  <div class="table-content-rows">

                      <div class="table-content-row">
                        <p class="table-ref">
                          #RZG960 
                          <img src="../assets/mes/edit.png" alt=""></p>
                        <p class="date-ref">
                          <span class="text-ref">
                            26/04/2021
                          </span>
                        </p>

                        <p class="table-commande">Livré</p>
                        <p class="table-montant">1200 €</p>
                        <router-link to="/page-fac">
                          <span class="img-fac">
                                <img src="../assets/mes-fac/facture.png" alt="">
                          </span>
                        </router-link>
                        <p class="table-reg"  style="border: none !important;"><btn /></p>
                      </div>

                        <div class="table-content-row">
                            <p class="table-ref">#RZG960<img src="../assets/mes/edit.png" alt=""> </p>
                            <p class="date-ref">26/04/2021</p>
                            <p class="table-commande">Livré</p>
                            <p class="table-montant">1200 €</p>
                            <p class="img-fac"><img src="../assets/mes-fac/facture.png" alt=""></p>
                            <p class="table-reg"  style="border: none !important;"><btn /></p>
                      </div>

                        <div class="table-content-row">
                            <p class="table-ref">#RZG960<img src="../assets/mes/edit.png" alt=""> </p>
                            <p class="date-ref">26/04/2021</p>
                            <p class="table-commande">Livré</p>
                            <p class="table-montant">1200 €</p>
                            <p class="img-fac"><img src="../assets/mes-fac/facture.png" alt=""></p>
                            <p class="table-reg"  style="border: none !important;"><btn /></p>
                      </div>
                      <div class="table-content-row">
                        <p class="table-ref">
                          #RZG960 
                          <img src="../assets/mes/edit.png" alt=""></p>
                        <p class="date-ref">
                          <span class="text-ref">
                            26/04/2021
                          </span>
                        </p>

                        <p class="table-commande">Livré</p>
                        <p class="table-montant">1200 €</p>
                            <p class="img-fac"><img src="../assets/mes-fac/facture.png" alt=""></p>
                        <p class="table-reg"  style="border: none !important;opacity:1"><btn /></p>
                      </div>

                        <div class="table-content-row">
                            <p class="table-ref">#RZG960<img src="../assets/mes/edit.png" alt=""> </p>
                            <p class="date-ref">26/04/2021</p>
                            <p class="table-commande">Livré</p>
                            <p class="table-montant">1200 €</p>
                            <p class="img-fac"><img src="../assets/mes-fac/facture.png" alt=""></p>
                            <p class="table-reg"  style="border: none !important;"><btn /></p>
                      </div>

                        <div class="table-content-row">
                            <p class="table-ref">#RZG960<img src="../assets/mes/edit.png" alt=""> </p>
                            <p class="date-ref">26/04/2021</p>
                            <p class="table-commande">Livré</p>
                            <p class="table-montant">1200 €</p>
                            <p class="img-fac"><img src="../assets/mes-fac/facture.png" alt=""></p>
                            <p class="table-reg"  style="border: none !important;"><btn /></p>
                      </div>

                         <div class="table-content-row">
                            <p class="table-ref">#AVW80<img src="../assets/mes/view.png" alt="" style="height:25px;width:25px;padding:0 .85em"> </p>
                            <p class="date-ref">26/04/2021</p>
                            <p class="table-commande">Livré</p>
                            <p class="table-montant">20 €</p>
                            <p class="img-fac"><img src="../assets/mes-fac/facture.png" alt=""></p>

                            <p class="table-reg"  style="border: none !important;"><btn2 /></p>
                        </div>

                        <div class="table-content-row">
                            <p class="table-ref">#AVW80<img src="../assets/mes/view.png" alt="" style="height:25px;width:25px;padding:0 .85em"> </p>
                            <p class="date-ref">26/04/2021</p>
                            <p class="table-commande">Livré</p>
                            <p class="table-montant">20 €</p>
                            <p class="img-fac"><img src="../assets/mes-fac/facture.png" alt=""></p>

                            <p class="table-reg"  style="border: none !important;"><btn2 /></p>
                        </div>
                        <div class="table-content-row">
                            <p class="table-ref">#AVW80<img src="../assets/mes/view.png" alt="" style="height:25px;width:25px;padding:0 .85em"> </p>
                            <p class="date-ref">26/04/2021</p>
                            <p class="table-commande">Livré</p>
                            <p class="table-montant">20 €</p>
                            <p class="img-fac"><img src="../assets/mes-fac/facture.png" alt=""></p>

                            <p class="table-reg"  style="border: none !important;"><btn2 /></p>
                        </div>

                          <div class="table-content-row">
                            <p class="table-ref">#AVW80<img src="../assets/mes/view.png" alt="" style="height:25px;width:25px;padding:0 .85em"> </p>
                            <p class="date-ref">26/04/2021</p>
                            <p class="table-commande">Livré</p>
                            <p class="table-montant">20 €</p>
                            <p class="img-fac"><img src="../assets/mes-fac/facture.png" alt=""></p>

                            <p class="table-reg"  style="border: none !important;"><btn2 /></p>
                        </div>

                        <div class="table-content-row">
                            <p class="table-ref">#AVW80<img src="../assets/mes/view.png" alt="" style="height:25px;width:25px;padding:0 .85em"> </p>
                            <p class="date-ref">26/04/2021</p>
                            <p class="table-commande">Livré</p>
                            <p class="table-montant">20 €</p>
                            <p class="img-fac"><img src="../assets/mes-fac/facture.png" alt=""></p>

                            <p class="table-reg"  style="border: none !important;"><btn2 /></p>
                        </div>
                        <div class="table-content-row">
                            <p class="table-ref">#AVW80<img src="../assets/mes/view.png" alt="" style="height:25px;width:25px;padding:0 .85em"> </p>
                            <p class="date-ref">26/04/2021</p>
                            <p class="table-commande">Livré</p>
                            <p class="table-montant">20 €</p>
                            <p class="img-fac"><img src="../assets/mes-fac/facture.png" alt=""></p>

                            <p class="table-reg"  style="border: none !important;"><btn2 /></p>
                        </div>
                        <div class="table-content-row">
                            <p class="table-ref">#AVW80<img src="../assets/mes/view.png" alt="" style="height:25px;width:25px;padding:0 .85em"> </p>
                            <p class="date-ref">26/04/2021</p>
                            <p class="table-commande">Livré</p>
                            <p class="table-montant">20 €</p>
                            <p class="img-fac"><img src="../assets/mes-fac/facture.png" alt=""></p>

                            <p class="table-reg"  style="border: none !important;"><btn2 /></p>
                        </div>
                        <div class="table-content-row no-border">
                            <p class="table-ref">#AVW80<img src="../assets/mes/view.png" alt="" style="height:25px;width:25px;padding:0 .85em"> </p>
                            <p class="date-ref">26/04/2021</p>
                            <p class="table-commande">Livré</p>
                            <p class="table-montant">20 €</p>
                            <p class="img-fac"><img src="../assets/mes-fac/facture.png" alt=""></p>

                            <p class="table-reg"  style="border: none !important;"><btn2 /></p>
                        </div>
                  </div>
                </div>
            </div>

              <div class="pagination">
                  <img src="../assets/mes-fac/pagination/pre.svg" />

                  <a href="#">
                     <Num number="1" active=true />
                    </a> 
                  <Num number="2" />
                  <Num number="3" />
                  <Num number="4" />
                  <Num number="5" />

                  <img src="../assets/mes-fac/pagination/next.svg" />
              </div>
        
         </div>
        </div>
    </div>
    
  </div>

</template>

<style scoped>

.pagination{
  max-width: 820px;
  margin-left: auto;
  /* background: red; */
}
.pagination img{
  height: 94px;
  width: 94px;
}
</style>

<script>
import MainNavbar from '../components/MainNavbar.vue'
import TopNav from '../components/TopNav.vue'
import headline from '../assets/mes-fac/headline.vue'
// import headline2 from '../assets/mes-add/Raj.vue'
// import popup from '../assets/mes-add/popup.vue'
import btn from '../assets/mes-fac/btn_send.vue'
import btn2 from '../assets/mes-fac/btn_2.vue'
import Num from '../assets/mes-fac/pagination/num.vue'

export default {
  name: 'Mes-Fac',
  components: {
    MainNavbar,
    TopNav,
    headline,
    // headline2,
    // popup,
    btn,
    btn2,
    Num
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

// table styles

<style scoped>
.head-line{
  max-width: 900px;
}
.table{
  /* background: red; */
    display: flex;
    height: 800px;
    margin: 1em;
    max-width: 1200px;
    width: 1200px;
  border-radius: 71px;
  border-top-left-radius: 71px;
    margin: 3em 0em;
}



.left-border{
  width: 90px;
  height: 100%;
  border-top-left-radius: 71px;
  /* border-top-right-radius: 71px; */
  border-bottom-right-radius: 71px;
  background: #FF5614;
  border-bottom-left-radius: 71px;
}

.table-content{
  width: 100%;
}

.head-row{ 
  background: #FF5614;
  color: #fff;
  display: flex;
  width: 100%;
  font-size: 33px;
  /* padding: .5em 0; */
  border-top-right-radius: 71px;
  border-bottom-right-radius: 71px;
  position: relative;
  z-index: 11;
}

.head-row h5{
  padding: 1em .25em;
  /* padding: 1em .0em; */
  /* border-right: 1px dashed #fff; */
  text-align: center;
  width: 16%;
  max-width: 20%;
}
.head-row h5:nth-of-type(1){
  padding: 1em .5em;
  font-size: .95em;
}
.head-row h5:nth-of-type(3){
  /* padding:  0 0 0 0`em; */
  margin-left: 1em;

}
.head-row h5:nth-of-type(4){
  /* background: #000; */
  margin-left: .5em;
}
.table-content{
  position: relative;
}

.table-border-right{
  position: absolute;
  top: 0;
  /* background: red; */
  height: 85%;
  border-right: 3px dashed rgba(0, 0, 0, 0.2);
  width: 1px;
  z-index: 10;
}
.table-border-right.one{ left: 13.4em;}
.table-border-right.two{ left: 26.5em;}
.table-border-right.three{ left: 36.5em;}
.table-border-right.four{ left: 47em;}
.table-border-right.five{ left: 57em;}
.table-content-row{
  display: flex;
  background: #fff;
  padding: .5em 0em;
  width: 100%;
  position: relative;

}
.table-content-row::before{
  content: '';
  position: absolute;
  top: 80%;
  left: 0;
  height: 10px;
  width: 100%;
  /* background: red; */
  border-bottom:2px solid #D11C48;
} 

.table-content-row.no-border::before{
  border: none;
}
.table-content-row p{
  display: flex;
  font-size: 30px;
  width: 16%;
  /* max-width: 20%; */
  /* background: red; */
  background: #fff;
  height: 50px;
  text-align: center;
  color:#153288;
  opacity:  0.5;
}
.table-content-row a{
  display: flex;
  font-size: 30px;
  width: 16%;
  /* max-width: 20%; */
  /* background: red; */
  background: #fff;
  height: 50px;
  text-align: center;
  color:#153288;
  /* opacity:  0.5; */
}

.table-content-row p img,
.table-content-row a img{
  height: 60px;
  /* width: 50px; */
}

.table-content-row p:nth-of-type(1),
.table-content-row p:nth-of-type(5),
.table-content-row p:nth-of-type(6){
  opacity: 1;
}
.table-content-row span:nth-of-type(2),
.table-content-row span:nth-of-type(3){
  /* padding:  0em; */
  /* width: 29%; */
}
.table-content-row span img{
}
.table-content-row .table-ref{
  /* background: red; */
  padding: .1em .5em;
  width: 20%;
  max-width: 20%;
}
.table-content-row .table-ref img{
  /* padding: .25em 0; */
  padding: 5px 20px;
  height: 20px;
  width: 20px;
  /* background: red; */
}
.table-content-row .date-ref{
  /* padding: 0 .25em; */
  /* background: red; */
  width: 20%;
  max-width: 20%;
  /* transform: translate(10px,10px); */
}

.text-ref{
  background: #fff;
  padding: .1em .25em;
}

.table-content-row .table-commande{
  /* background: rgb(255, 48, 48); */
  /* margin: 0 1em; */
  text-align: center;
  display: block;
}

.table-content-row .table-montant{
  display: block;
  /* background: red; */

}

.table-content-row .table-reg{
  /* background: red; */

}

.table-content-row .table-reg img{
  height: 40px;
  width: 150px;
}



</style>

// table two 
<style scoped>
.table.two{
  background: #fff;
}
.two .left-border{
  background: #D11C48;
}
.two .head-row{
  background: #D11C48;
}
.two .head-row h5:nth-of-type(1) {
}

.two .head-row h5:nth-of-type(2){

}
.two .head-row h5:nth-of-type(2),.two .head-row h5:nth-of-type(3) {
    padding: 1.2em .5em;
    font-size: 85%;
}
.two .table-border-right.two{
    left: 29.5em;
}

.two .table-border-right.one{ left: 13.5em;}
.two .table-border-right.two{ left: 29em;}
.two .table-border-right.three{ left: 42em;}
.two .table-border-right.four{ left: 55em;}

</style>


// table three
<style scoped>
.three .table-border-right.one{ left: 13.5em;}
.three .table-border-right.two{ left: 29em;}
.three .table-border-right.three{ left: 42em;}
.three .table-border-right.four{ left: 55em;}
 .three .table-content-row p, .head-row{ 
    /* font-size: 23px; */
    }
  .three .date-ref img{
  }
</style>
// Responsive table

<style scoped>
@media(max-width:1600px){
.table{ 
    background: red;
}
}
@media(max-width:1700px){
.table-content-row p, .head-row{ 
    /* font-size: 29px; */
    /* background: red; */
    /* background: rgba(255, 0, 0, 0.349); */

  }
  .three .table-content-row p, .head-row{ 
    /* font-size: 26px; */
    }
}


@media(max-width:1500px){
 
  .left-border{
  background: rgb(0,0,0);
  width: 
  }
}


</style>

<style scoped>
    .table {
        height: 1250px;
         background: rgba(255, 255, 255, 1);
    }
    
.table-content{
    max-width: 1100px;
    margin: 0em;

}
.table-content-rows{
    /* max-width: 850px; */
    /* margin: 2em auto; */
}
.table-content-rows h5{
    font-size: 30px;
    color: #59626A;
    opacity: 58%;
    display: block;
    margin: 2em 0 1em 0em;
}
.table-content-rows h5:nth-of-type(1){
    margin: 2em 0 1em;
    
}
.table-content-rows .content-row{
    margin: .5em 0 0 2em;
    display: flex;
    justify-content: space-between;
    font-size: 35px;
    color: #59626A;
    border-radius: 40px;
    border: 2px dashed #D11C48;
    padding: 15px;
    width: 750px;
    white-space: nowrap
}
.table-content-rows .content-row .text{

}
.table-content-rows .content-row img{
    height: 40px;
    width: 40px;
}


</style>

<style scoped>

.submit-row{
    width: 900px;
    margin: 1em auto;
}
.submit-row .info{
    width:250px;height:50px;
    object-fit: cover;
}

.pop-sec{
    /* background: red; */
    margin: 9em 0em 3em 4em;;
}

</style>