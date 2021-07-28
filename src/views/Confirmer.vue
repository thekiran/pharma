 <template> 
      <div class="Inscription">
        <div class="nav-content">
            <div class="container">

                <div class="left-nav">
                        <div class="logo">
                            <router-link to="/">
                                <img src="../assets/Homepage/header-logo-png.png" width="100" height="100" alt="logo">
                            </router-link>
                        </div>
                </div>
                <div class="nav-banner">    
                    <img src="../assets/Inscription/Haut.png" width="100" height="100" alt="logo">
                </div>

            </div>
        </div>

        <div class="ins-content">
          <div class="container">

              <h1>Livraison et facturation</h1>

              <img src="../assets/confirmer/stepper-3.png" alt="steps">
            </div>
          </div>


          <div class="showcase-section">
            <div class="container">
                <div class="showcase-content">
                  <form>
                    <div class="form-content">
                      <div class="showcase-content-box">
                        <div class="form left">
                          <label id="formail" for="mail">Type d'activité</label>
                          <input type="text" name="mail" id="mail" placeholder="Professionnels de santé                              ᐯ">

                          <label id="foraddress" for="address">Adresse de livraison par défaut</label>
                          <input type="text" name="address" id="address" placeholder="Adresse">

                          <label id="forcard" for="card">Mode de paiement par défaut</label>
                          <input type="text" name="card" id="card" placeholder="         Carte bancaire                                     ᐯ">
 
                          <label id="foraddress" for="address">IBAN</label>
                          <input type="text" name="address" id="address" placeholder="FR 0123 4567 8910 1112">

                        </div>
                      </div>

                      <div class="showcase-content-box">

                        <div class="form right">
                          <label id="fororg" for="org">Numéro Rpps ou Finess</label>
                          <input type="text" name="org" id="org" placeholder="10 10 10 89810">

                          <!-- village postal -->
                          <div class="row">
                            <input type="text" name="ville" id="ville" placeholder="Ville">
                            <input type="text" name="code" id="code" placeholder="Code postal">
                          </div>
                          <label id="fornumber" for="number">Numéro de siret (si entreprise)</label>
                          <input type="tel" name="number" id="number" placeholder="FR 0123 4567 8910 1112 ">

                          <label id="for confirm-password" for="confirm-password">Confirmer votre IBAN</label>
                          <input type="text" name="confirm-password" id="confirm-password" placeholder="FR 0123 4567 8910 1112">

                        </div>
                      </div>
                    </div>
                    <div class="submit-content">
                      <!-- <p class="info"> <input type="checkbox">Je confirme avoir lu et accepté les <span class="red">les conditions générales de vente</span> </p> -->

                      <div class="submit">
                        <span>Vos données sont stocké <span class="blue">sur nos serveurs cryptés</span></span>
                        <input type="submit" id="submit" value="Finaliser">
                      </div>
                    </div>
                  </form>
                </div>
            </div>
          </div>

        </div>
</template>

<style scoped>
  .Inscription{
		font-family: 'Open Sans', sans-serif;
}
  .nav-content{
    /* background: red; */
  }
  .nav-content .container{display: flex;}
  .left-nav{
    margin:2em 0 0 5em

  }
    
    .nav-banner{
    }
    .nav-banner img{
        /* position: fixed; */
        /* top: 0; */
        /* right: 0; */
        max-width:80%;
        height: 70px;
        width: 1500px;
        /* max-height: 7vh; */
        /* min-height: 6.5vh; */
        margin:3em 0 0 6em
    }

  .ins-content{
    
  }
  
  .ins-content h1{
    display: block;
    margin: .5em 0;
    font-size: 88px;
    text-align: center;
    font-weight: bold
  }
  
  .ins-content img{
    display: block;
    margin: 3em auto;
    width: 1000px;  
    height: 120px;
  }


  .showcase-section{
    /* background: #000; */
    }
    
  .showcase-content {
    margin: 0 5em;
    /* background: red; */
    display: flex;
    justify-content: space-between;
    /* width: 1200px;     */
  }
  .showcase-content .form-content{
    /* background: aqua; */
    /* width: 750px; */
    /* height: 713px; */
    /* margin-right: auto; */
    display: flex;
    }

  .showcase-content .info{
    display: block;
  background: #fff;
  font-size: 24px;
  color: var(--nav-blue);
  margin: 1em 0;
}

  .showcase-content .showcase-content-box{
    background: #F5F6F7;
    /* background: red; */
    font-size: 27px;
    /* height: 713px; */
    width: 95%;
    /* margin-right: auto; */
  }
   .showcase-content-box:nth-of-type(1){
     border-top-left-radius: 73px;
     /* border-top-right-radius: 73px; */
   }
   .showcase-content-box:nth-of-type(2){
     border-top-right-radius: 73px;
   }
   .submit-content{
     border-bottom-right-radius: 73px;
     border-bottom-left-radius: 73px;
     background: #F5F6F7;
     width: 100%;
    padding: 1em 0;
   }
   .submit-content .info{
     margin: 1em 1em;
     font-size: 30px;
     background: #F5F6F7;
    color: #838EAB;
   }
   
   .submit-content .info input{
     /* all: unset; */
     /* padding: 1em; */
     margin: 1em 2em;
     width: 30px;
     height: 30px;
      border-radius: 10px;
/* border:  */
     /* border: none;*/
     outline: 1px solid #000;; 
   }
   .submit-content .info .red{color: red;}

  .submit{
    text-align: right;
    margin: 2em;
     font-size: 30px;
    color: #838EAB;
    cursor: pointer;
}
   .submit span.blue{
     color: var(--nav-blue);
   }
  .submit #submit{
    all: unset;
    text-align: center;
    color: #fff;
    margin: 0 2em;
    width: 300px;
    height: 100px;
    background: var(--primary-saf-color);
    font-size: 30px;
    border-radius: 30px;
    font-weight: bold;
  }

  .showcase-content-box .form{
    margin: 0em;  
    padding: 2em 1.5em 0 1.5em;
  }
  .showcase-content-box label{
    font-weight: bold;

    /* background: rgb(190, 39, 39); */
    padding: 1em 0;
    }
  .showcase-content-box #mail, 
  .showcase-content-box #card,
  .showcase-content-box #address,
  .showcase-content-box #org,
  .showcase-content-box #confirm-password,
  .showcase-content-box #number{
    all: unset;
    background: #fff;
    border-radius: 10px;
    display: block;
    margin: 2em 0;
    font-size: 27px;
    height: 80px;
    width: 550px;
    padding:  .5em;
  }

  .showcase-content-box #ville{
    all: unset;
    background: #fff;
    border-radius: 10px;
    /* display: block; */
    margin: 3em 1em 2em 0;
    font-size: 27px;
    height: 80px;
    width: 250px;
    padding: .5em;
  }
  .showcase-content-box #code{
    all: unset;
    background: #fff;
    border-radius: 10px;
    /* display: block; */
    margin: 3em 0 2em 1.5em;
    font-size: 27px;
    height: 80px;
    width: 200px;
    padding: .5em;
  }

   .showcase-content-box #card{
    /* width: 50%; */
    /* box-sizing: border-box; */
    /* border: 2px solid #ccc; */
    border-radius: 4px;
    /* font-size: 16px; */
    background-color: white;
    background-image: url('../assets/confirmer/credit-card.png');
    background-position: 15px 31px; 
    background-repeat: no-repeat;
    /* padding: 0 0 0 2em; */
  }
   
  .showcase-content-box .inp-pass{
    margin: 1em 0 0;
  }
  .showcase-content-box .inp{
    /* margin: 3em 0 0; */
    /* background: red; */
    display: flex;
    justify-content: space-between;
    /* background: aqua; */
    max-width: 650px;

  }
  .showcase-content-box .inp .blue{
    color: var(--nav-blue);
  }
  .showcase-content-box #forpass{
    
    }
  .showcase-content-box #pass{
    display: block;
    /* margin: 3em 0 0; */
    
  }

  .showcase-content-box #submit-se-con{
    all: unset;
    cursor: pointer;
    background: var(--primary-saf-color);
    width: 650px;
    text-align: center;
    height: 94px;
    /* padding: 0 50px; */
    border-radius: 10px;
    color: #fff;
}
  
  .showcase-content-box p{
    font-size: 23px;
    color:#59626A;
    margin: 0 2.6em;
  }
  .showcase-content-box p span{
    color: var(--nav-blue);
  }
  .showcase-img{
    position: fixed;
    top:20px;
    right: 0;
    max-width: 45vw;
    max-height: 100vh;
    width: 1283px;
    height: 1176px;
    z-index: -1;
  }
  .showcase-img img{
    height: 100%;
    width: 100%;
  }
  
</style>