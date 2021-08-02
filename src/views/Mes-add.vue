<template>
<div class="passer-container">
 
  <div class="container">
        <TopNav />

    <div class="passer">
        <MainNavbar active='Mes-add' />
      
        <div class="passer-content">
            <h1>Mes Adresses</h1>

            <div class="head-line">
                 <headline />
            </div>
        
            <div class="table two">
                <div class="left-border"></div>

                <div class="table-content">

                  <div class="head-row">
                        <h5 style="border-top-right-radius: 71px;border-bottom-right-radius:71px;height:40px"></h5>
                  </div>

                    <div class="table-content-rows">

                                     <h5>PAR DÉFAUT</h5>

                                    <div class="content-row" style="max-height:30px">
                                        <span class="text">18 rue de l'entonnoir, 75012, Paris</span>
                                        <img src="../assets/mes-add/checkfil.png" alt="" class="checknotfil" style="width:60px;height:60px;margin:-15px 0 0 0">
                                    </div>


                                    <h5>AUTRES ADRESSES</h5>

                                     <div class="content-row">
                                        <span class="text">15 avenue du marrais, 75012, Saint denis</span>
                                        <img src="../assets/mes-add/non-fill.png" alt="" class="checknotfil">
                                    </div>

                                      <div class="content-row">
                                        <span class="text">15 avenue du marrais, 75012, Saint denis</span>
                                        <img src="../assets/mes-add/non-fill.png" alt="" class="checknotfil">
                                      </div>
                                     <div class="content-row">
                                        <span class="text">15 avenue du marrais, 75012, Saint denis</span>
                                        <img src="../assets/mes-add/non-fill.png" alt="" class="checknotfil">
                                    </div>  

                                    <div class="content-row">
                                        <span class="text">15 avenue du marrais, 75012, Saint denis</span>
                                        <img src="../assets/mes-add/non-fill.png" alt="" class="checknotfil">
                                    </div>  
                                    
                                    <div class="content-row">
                                        <span class="text">15 avenue du marrais, 75012, Saint denis</span>
                                        <img src="../assets/mes-add/non-fill.png" alt="" class="checknotfil">
                                    </div>
                    </div>

                    <div class="submit-row" style="display:flex;justify-content:space-between">
                        <img src="../assets/mes-add/info.png" class="info" alt="">
                        <a href="/"><img src="../assets/mes-add/sub-btn.png" style="width:500px;height:70px:margin:1em;display:inline-block" alt=""></a>
                    </div>
                </div>
            </div>

                <div class="pop-sec">

             <div class="head-line"  style="  max-width: 1300px">
                 <headline2 />
            </div>
        
        
            <div class="head-line" style="  max-width: 1300px">
                 <popup />
            </div>
        
         </div>
        </div>
    </div>
    </div>
    
  </div>

</template>

<script>
import MainNavbar from '../components/MainNavbar.vue'
import TopNav from '../components/TopNav.vue'
import headline from '../assets/mes-add/def.vue'
import headline2 from '../assets/mes-add/Raj.vue'
import popup from '../assets/mes-add/popup.vue'

export default {
  name: 'Mes-add',
  components: {
    MainNavbar,
    TopNav,
    headline,
    headline2,
    popup
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
    height: 750px;
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
  background: #3498DB;
  border-bottom-left-radius: 71px;
}

.table-content{
  width: 100%;
}

.head-row{ 
   background: #3498DB;
  color: #fff;
  display: flex;
  width: 100%;
  font-size: 33px;
  /* padding: .5em 0; */
  border-top-right-radius: 71px;
  border-bottom-right-radius: 71px;
  position: relative;
}

.head-row::after{
  content: '';
  position: absolute;
  top: 101%;
  left: 0;
  width: 100%;
  border-bottom:1px solid #3498DB;
}
.head-row h5{
  padding: 1em .25em;
  /* padding: 1em .0em; */
  /* border-right: 1px dashed #fff; */
  text-align: center;
  width: 20%;
  max-width: 20%;
}
.head-row h5:nth-of-type(1){
  padding: 1em .5em;
  font-size: .95em;
}
.head-row h5:nth-of-type(2),
.head-row h5:nth-of-type(3){
  padding:  .5em;
}
.head-row h5:nth-last-of-type(){
 
}
.table-content{
  position: relative;
}

.table-border-right{
  position: absolute;
  top: 0;
  /* background: red; */
  height: 70%;
  border-right: 3px dashed rgba(0, 0, 0, 0.2);
  width: 1px;
  z-index: 10;
}
.table-border-right.one{ left: 14em;}
.table-border-right.two{ left: 28em;}
.table-border-right.three{ left: 42em;}
.table-border-right.four{ left: 54.5em;}
.table-content-row{
  display: flex;
  background: #fff;
  padding: .5em 0em;
  width: 100%;

}
.table-content-row{
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
  border-bottom:2px solid #3498DB;
} 

.table-content-row.no-border::before{
  border: none;
}
.table-content-row p{
  display: flex;
  font-size: 30px;
  width: 20%;
  max-width: 20%;
  background: #fff;
  height: 50px;
  text-align: center;
  color:#153288;
  opacity: 53%;
}

.table-content-row p:nth-of-type(1),
.table-content-row p:nth-of-type(5){
  opacity: 100%;
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
        height: 1000px;
         background: rgba(255, 255, 255, 1);
    }
    
.table-content{
    max-width: 1100px;
    margin: 0em;

}
.table-content-rows{
    max-width: 850px;
    margin: 2em auto;
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