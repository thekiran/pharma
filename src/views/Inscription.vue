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
                    <div class="form-content">
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

                          <label id="fornumber" for="number">Numéro</label>
                          <input type="tel" name="number" id="number" placeholder="53 555 555">

                          <label id="for confirm-password" for="confirm-password">Confirmer le Mot de passe</label>
                          <input type="text" name="confirm-password" id="confirm-password" placeholder="******">

                        </div>
                      </div>
                    </div>
                    <div class="submit-content">
                      <p class="info"> <input type="checkbox">Je confirme avoir lu et accepté les <span class="red">les conditions générales de vente</span> </p>
                      <p class="info"> <input type="checkbox">Je confirme avoir lu et accepté les <span class="red">les conditions générales de vente</span> </p>

                      <div class="submit">
                        <span>Vos données sont stocké <span class="blue">sur nos serveurs cryptés</span></span>
                        <!-- <input type="submit" id="submit" value="Valider"> -->
                        <router-link to="Confirmer" >
                          <button id="submit">
                          Valider

                          </button>
                        </router-link>
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
    width: 550px;
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

// Responsive styles
<style scoped>
    @media(max-width:1400px){
        .showcase-content {
            margin: 0 1em;
        }
        .submit a{
        margin: 2em 0;
        }
    }

    @media(max-width:1350px){

      .showcase-content .form-content {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;

      }
      .ins-content img{
        width: 90%;
      }

      .showcase-content-box #mail, .showcase-content-box #password, .showcase-content-box #address, .showcase-content-box #org, .showcase-content-box #confirm-password, .showcase-content-box #number{
        margin: 1em auto;
        max-width: 65vw;
        font-size: 20px;
      }

      .submit-content {
        background: inherit;
      }
      .submit-content .info {
        background: inherit;
      }
  
    }

    @media(max-width:768px){
      
        .nav-content .container {
          flex-direction: column;
          align-items: center;
        }

        .left-nav {
          margin: 2em 0 0 0em;
        }

      .nav-banner img{
        max-width: 99%;
         margin: 1em 0 0 0.2em;
      }

      .ins-content h1{
        font-size: 58px;
        }


      .ins-content img {
        margin: 1em auto;
        width: 99%;
        }

      .showcase-content-box .form {
        padding: 2em .5em 0 .5em;
    }

      .showcase-content .showcase-content-box {
        font-size: 20px;
      }

    .showcase-content-box label {
        margin: 0 1em;
    }

      .submit a{
        margin: 2em 0;
        display: block;
      }


      .submit-content {
        width:80vw;
        margin: 0 auto;
        /* background: red */

      }
      .submit-content .info,.submit span {
        /* margin: 1em 1em; */
        font-size: 3vw;
      }
      .submit-content .info input{
          width: 20px;
          height: 20px;
        }

      .submit-content .info input{
        outline: 0px solid #000;

      }

  }

</style>

// Mobile Responsive styles

<style scoped>

  @media(max-width:576px){
    .showcase-content-box label {
        /* margin: 0 3em; */
        width: 150px;
        display: block;
      }

        .submit a{
        margin: 1em 0;
      }


      .showcase-content-box #mail, .showcase-content-box #password, .showcase-content-box #address, .showcase-content-box #org, .showcase-content-box #confirm-password, .showcase-content-box #number{
        margin: 1em;
      }


      .submit #submit {
          margin: 0em;
          width: 200px;
          height: 70px;
      }


  }

  @media(max-width:350px){

    .ins-content h1{
        font-size: 28px;
    }

    .ins-content img {
      margin: .1em auto;
    }

  }


</style>

