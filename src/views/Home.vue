<template> 
 <div class="home">
      <div id="nav">
        <div class="nav-content">
          <div class="left-nav">
            <div class="logo">
              <router-link to="/">
                <img src="../assets/Homepage/header-logo-png.png" width="100" height="100" alt="logo">
              </router-link>
            </div>

            <ul>
              <li>
                <a href="#">Link 4</a>
              </li>
                 <li> <a href="#">Link 3</a>   </li>
                 <li> <a href="#">Link 2</a>   </li>
                 <li> <a href="#">Link Besoin d'aide ?</a>   </li>
             
            </ul>
          </div>

          <div class="right-nav">
            <div class="btn-clear">
               <router-link to="/Se-connector">
                  <button>Se connecter</button>
               </router-link>
            </div>

          <router-link to="/Inscription" class="btn-fill-primary">
                 <button>Essayer gratuitement</button>
          </router-link>
          </div>

      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
   </div>

     <div class="container">
      <div class="home-container">
        <div class="home-content">
          <p class="text-blue">Pour les professionnels de la santé</p>

          <h1> 
            <span>Gagnez en confort de travail  </span>
            <span><br>Faites vous livrer vos   </span>
            <span><br>médicaments dans la journée  </span>
           </h1>

          <p class="text-black">Ne faites plus attendre vos patients, Pharma-You vous
            <br> facilite la vie en vous faisant gagner du temps et de l'argent.</p>

          <router-link to="/Inscription" class="main-btn">Essayer gratuitement</router-link>
          <span class="text-sm">Frais de livraison livraison offert le premier mois</span>
        </div>
        <div class="home-showcase">
          <img src="../assets/Homepage/hero-showcase.png" alt="showcase">
        </div>
      </div>
    </div>
   
    <div class="showcase-section">
      <div class="container">
          <h1 class="showcase-head">Pourquoi déléguer votre approvisionnement à Pharma-You Pro ?</h1>

          <ul class="showcase-content">
            <li class="showcase-item">
                <img src="../assets/Homepage/showcase-icon1.png" alt="showcase-icon">
                <h5>Rapidité</h5>
                <p>Lorem ipsum dolor sit amet, <br> consectetur adipiscing elit,</p>
            </li>
            <li class="showcase-item">
                <img src="../assets/Homepage/showcase-icon2.png" alt="showcase-icon">
                <h5>Sécurité</h5>
                <p>Lorem ipsum dolor sit amet, <br>consectetur adipiscing elit,</p>
            </li>
            <li class="showcase-item">
                <img src="../assets/Homepage/showcase-icon3.png" alt="showcase-icon">
                <h5>Simplicité</h5>
                <p>Lorem ipsum dolor sit amet, <br>consectetur adipiscing elit,</p>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>

<style scoped>
  .container{
    max-width: 1500px;
    display: block;
    /* overflow-x: hidden; */
    margin: 0 auto;;
  }

  .nav-content{
    display: flex;
    justify-content: space-between;
    max-width: 1550px;
    margin: 0 auto;
  }
  .logo{
    /* background: red; */
    margin: 10px;
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
    margin: 20px 0;
    font-size: 1.5em;
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
    /* overflow: hidden; */
    z-index: 0;
  }
  .home-showcase img{
    height: 100%;
    width: 100%;
    z-index: -1
  }
</style>

// Showcase section styles

<style scoped>


  .showcase-section{
    margin: 7em 0;
    text-align: center;
    font-family: 'Roboto', sans-serif;
}
  .showcase-head{
    font-size: 46px;
    margin: 2em 0;
  }

  .showcase-content{
    display: flex;
    justify-content: space-between;
    max-width: 1300px;
    margin: 0 auto;
  }
  .showcase-content .showcase-item{}
  .showcase-item{}
  .showcase-item img{
    width: 147px;
    height: 147px;
  }
  .showcase-item h5{
    font-size: 40px;
    display: block;
    margin: 1em 0;
  }
  .showcase-item p{
    font-size: 20px;
    line-height: 1.3;
    color: #212121;
}
</style>



// Responsive styles 

<style scoped>
@media(max-width:1450px){
  .home{
    font-size: .95em;
  }
  .home-content h1{
    font-size: 40px;
  }
  .home-content .text-black{
    font-size: 20px;
  }
}
@media(max-width:1350px){  
  .home{
    font-size: .9em;
  }
   .home-content h1{
    font-size: 35px;
  }
   .home-content .text-black{
    font-size: 18px;
  }
}
  @media(max-width:1150px){  
    .left-nav ul{
    font-size: 13px;
    }

    .btn-clear{
      font-size: 25px;
    }
    .btn-fill-primary{
      font-size: 18px;
    }

  }
  @media(max-width:1000px){
    
     .left-nav ul{
    font-size: 12px;
    }
    .btn-clear{
          font-size: 20px;
        }
        .btn-fill-primary{
          font-size: 15px;
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

