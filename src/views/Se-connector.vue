 <template> 
      <div class="se-con-container">
        <div class="nav-content">
          <div class="left-nav">
            <div class="logo">
              <router-link to="/">
                <img src="../assets/Homepage/header-logo-png.png" width="100" height="100" alt="logo">
              </router-link>
            </div>
            
            <h5>Hello !</h5>

            <p>Connectez vous sur votre compte afin de passer <br> commandes ou suivre vos livraisons</p>
          </div>

    </div>
   
    <div class="showcase-section">
          <div class="showcase-content">
            <a href="#" class="info"> > info covid</a>

            <div class="showcase-content-box">

              <form>
                <label id="formail" for="mail">Identifiant</label>
                <input type="text" name="mail" id="mail" placeholder="Votre email">

                <div class="inp-pass">
                  <span class="inp">
                      <label id="forpass" for="pass">Password</label>
                      <span class="blue">Mot de passe oublié ?</span>
                  </span>
                  <input type="text" name="pass" id="pass" placeholder="Mot de passe">
                </div>

                <input type="submit" id="submit-se-con" value="Se connecter">
              </form>

              <p> Vous n'êtes pas encore inscrit ? <span class="blue">Inscrivez vous maintenant </span></p>
            </div>
          </div>
    </div>

    <div class="showcase-img">
      <img src="../assets/Se-connector/bike.png" alt="bike">
    </div>
  </div>
</template>

<style scoped>
.se-con-container{
		font-family: 'Open Sans', sans-serif;
    max-width: 1500px;
    margin: 0 auto
}
  .nav-content{
    display: flex;
    justify-content: space-between;
    /* max-width: 1550px; */
    margin: 2em 50px;
    /* background: red; */
  }
  .logo{
    margin: 10px;
  }
  .left-nav h5{
    display: block;
    margin: 1em 20px;
    font-size: 30px;
    font-weight:700;
  }
  .left-nav p{
    display: block;
    margin: 2em 20px 0em;
    font-size: 29px;
    color:#59626A;
  }
 
  
  .showcase-section{
    /* background: #000; */
    margin: 0 70px;
    }
  .showcase-content{
    /* background: aqua; */
    width: 750px;
    height: 713px;
    /* margin-right: auto; */
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
  .showcase-content-box form{
    margin: 0 2em;  
    /* background: red; */
    padding: 2em 0;
  }
  .showcase-content-box #formail{
    /* background: rgb(190, 39, 39); */
    /* padding: 1em 0; */
    }
  .showcase-content-box #mail, 
  .showcase-content-box #pass{
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
    position: absolute;
    top:20px;
    left: 50%;
    max-width: 45vw;
    max-height: 100vh;
    width: 1283px;
    height: 1176px;
    z-index: 2;
  }
  .showcase-img img{
    height: 100%;
    width: 100%;
  }
  
</style>


// Responsive styles 

<style scoped>

@media(max-width:1460px){

  .showcase-img{
    max-width: 45vw;
    max-height: 100vh;
    width: 1083px;
    height: 1176px;
  }
   .showcase-content{
    /* background: aqua; */
    width: 600px;

 }
 
  .showcase-content-box #mail, 
  .showcase-content-box #pass{
    width: 100%;
  }

  
  .showcase-content-box #submit-se-con{
    background: var(--primary-saf-color);
    width: 500px;
  }

}



@media(max-width:1600px){
  .showcase-img{
    position: fixed;
  }
}


@media(max-width:1400px){  
 .left-nav p {
    font-size: 25px;
 }
}


  @media(max-width:1300px){ 
    .nav-content {
    align-items: center;
    }

    .showcase-content{
      margin: 0 auto;
    }


    .showcase-img{
      position: relative;
      left: 25%;
    }
  }


  @media(max-width:768px){
      .nav-content {
        margin: 0 2em;
        }

      .showcase-section { margin: 0 0 }

      .showcase-content .showcase-content-box{
        font-size: 23px;
        width: 95%;
        margin: 0 auto;
      }
      .showcase-img {
        top: 6%;
        left: 5%;
        max-width: 90vw;
      }

      .showcase-content .showcase-content-box{
      font-size: 16px;
      width: 85vw;
      }

      .showcase-content-box #submit-se-con{
      max-width: 70vw;
      margin:  0 auto;
      }

      .showcase-content {
        width: auto;
      }
    .showcase-content {
        width: auto;}

        .showcase-content-box .inp .blue {
        white-space: nowrap;
    }
  }






  @media(max-width:900px){  
    .nav-content{
      flex-direction: column;
      max-width: 600px;
      margin: 0 auto;
   }
  }

      @media(max-width:768px){  
        
        .home-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        .home-content .main-btn{
          margin: 2em auto
        }
    
        .home-content {
            width: 100%;
        }
        .home-showcase {
        width: 100%;
        }
    
      }

</style>


// Mobile Responsive styles

<style scoped>


    @media(max-width:576px){
  
      .home-content{
        margin: auto 0 auto 0;
      }

      .home-content h1 {
        font-size: 30px;
      }
  
      .home-content .text-blue{
      font-size: 23px;
      }
      .home-content .text-black {
        font-size: 15px;
      }

    .showcase-head {
      font-size: 26px;
      }
      .showcase-content {
        flex-direction: column;
      }
      .showcase-content .showcase-item{
        margin: 2em 0;
      }
    }

  @media(max-width:500px){
      .logo{
        height: 80px;
        width: 80px;
        }
        
     .left-nav,.right-nav {
       flex-direction: column;
      align-items: center;
}
     .left-nav ul{
    font-size: 10px;
    }
    .btn-clear{
          font-size: 18px;
        }
        .btn-fill-primary{
          font-size: 13px;
        }
      }


  @media(max-width:500px){
      .home-content h1 {
        font-size: 22px;
      }
  
      .home-content .text-blue{
      font-size: 20px;
      }
      .home-content .text-black {
        font-size: 13px;
      }
  }


  @media(max-width:330px){
    
     .left-nav ul{
    font-size: 8px;
    white-space: nowrap
    }
    .btn-clear{
          font-size: 20px;
        }
        .btn-fill-primary{
          font-size: 15px;
        }
      }

        @media(max-width:400px){
      .home-content h1 {
        font-size: 20px;
      }
  
      .home-content .text-blue{
      font-size: 18px;
      }
      .home-content .text-black {
        font-size: 10px;
      }
  }

</style>
