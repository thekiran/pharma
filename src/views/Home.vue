<template> 
 <div class="home">
   <div class="container">
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
              <button>Se connecter</button>
            </div>

          <div class="btn-fill-primary">
            <button>Essayer gratuitement</button>
          </div>
          </div>
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

          <a href="#" class="main-btn">Essayer gratuitement</a>
          <span class="text-sm">Frais de livraison livraison offert le premier mois</span>
        </div>
        <div class="home-showcase">
          <img src="../assets/Homepage/hero-showcase.png" alt="showcase">
        </div>
      </div>
    </div>

    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld /> -->
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
    overflow-x: hidden;
    margin: 0 auto;;
  }

  .nav-content{
    display: flex;
    justify-content: space-between;
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
    height: 400px;
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
  }
  .home-content h1 span{
    /* letter-spacing: 5px; */
    word-spacing: 10px;
    white-space: nowrap;
    line-height: 1.2;
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