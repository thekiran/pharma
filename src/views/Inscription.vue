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

              <h1>Inscription en 2 clics</h1>

              <img src="../assets/Inscription/stepper-3.png" alt="steps">
            </div>
          </div>


          <div class="showcase-section">
            <div class="container">
                <div class="showcase-content">
                  <form>

                    <div class="showcase-content-box">
                      <div class="form left">
                        <label id="formail" for="mail">Nom</label>
                        <input type="text" name="mail" id="mail" placeholder="Magalie marchale">

                        <label id="foraddress" for="address">Adresse email</label>
                        <input type="text" name="address" id="address" placeholder="john.doe@domain.tld">

                        <label id="forpassword" for="password">Mot de passe</label>
                        <input type="text" name="password" id="password" placeholder="******">

                      </div>
                    </div>

                    <div class="showcase-content-box">

                      <div class="form right">
                        <label id="fororg" for="org">Nom de votre organisation</label>
                        <input type="text" name="org" id="org" placeholder="Hôpitaux de Paris">

                        <label id="fornumber" for="number">Nom de votre organisation</label>
                        <input type="number" name="number" id="number" placeholder="Hôpitaux de Paris">

                        <label id="for confirm-password" for="confirm-password">Confirmer le Mot de passe</label>
                        <input type="text" name="confirm-password" id="confirm-password" placeholder="******">

                      </div>
                    </div>

                  </form>
                </div>
            </div>
          </div>

        </div>
</template>

<style scoped>
.se-con-container{
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

 
  
  .showcase-section{
    /* background: #000; */
    margin: 0 70px;
    }
  .showcase-content form{
    /* background: aqua; */
    width: 750px;
    height: 713px;
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
    font-size: 27px;
    width: 100%;
    height: 713px;
    margin-right: auto;
  }
  .showcase-content-box .form{
    margin: 0 2em;  
    /* background: red; */
    padding: 2em 0;
  }
  .showcase-content-box #formail{
    /* background: rgb(190, 39, 39); */
    /* padding: 1em 0; */
    }
  .showcase-content-box #mail, 
  .showcase-content-box #password,
  .showcase-content-box #address,
  .showcase-content-box #org,
  .showcase-content-box #confirm-password,
  .showcase-content-box #number{
    all: unset;
    background: #fff;
    border-radius: 10px;
    display: block;
    margin: 1em 0;
    font-size: 27px;
    height: 80px;
    width: 624px;
    padding: 0 .5em;
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