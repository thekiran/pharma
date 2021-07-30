<template>
  <div class="MainNavbar">
     

      <div class="side-nav">
        <div class="container">
            <div class="profile-info">
                <img src="../assets/MainNavbar/picture.png" alt="">
                <h5 style="color:#000">Magalie marchale</h5>
                <h6>Hôpitaux de Paris</h6>
            </div>

            <div class="nav-links">
              <div class="link one"><img src="../assets/MainNavbar/Passer-commande.png" alt=""></div>

              <div class="link two"><img src="../assets/MainNavbar/two.png" alt=""></div>
              <div class="link three"><img src="../assets/MainNavbar/three.png" alt=""></div>
              <div class="link four"><img src="../assets/MainNavbar/four.png" alt=""></div>
              <!-- <div class="link five"><img src="../assets/MainNavbar/five.png" alt=""></div> -->


              <h6>Service client 7j/7</h6>

              <div class="link six"><img src="../assets/MainNavbar/six.png" alt=""></div>
              <div class="link seven"><img src="../assets/MainNavbar/seven.png" alt=""></div>  

              <div class="link eight"><img src="../assets/MainNavbar/slider.png" alt="" class="slider"></div>
            </div>
        </div>
      </div>
  </div>

</template>

<script>
export default {
  name: 'MainNavbar',
}
</script>

// Top Nav
<style scoped>
  .MainNavbar{
    font-family: 'Open Sans', sans-serif;
    overflow: visible;
    position: relative;
  }
  .container{
    max-width: 1500px;
    display: block;
    /* overflow-x: hidden; */
    overflow: visible;
    margin: 0 auto;;
  }

  .nav-content{
    display: flex;
    justify-content: space-between;
    max-width: 1550px;
    margin: 1em auto;
  }
  .logo{
    /* background: red; */
    margin: 10px 3em;
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
    margin: 20px 5em;
    font-size: 1.5em;
    /* width: 900px; */
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
    overflow: hidden;
    z-index: 0;
  }
  .home-showcase img{
    height: 100%;
    width: 100%;
    z-index: -1
  }
</style>

// Side Nav
<style scoped>
  .side-nav{
    max-width: 100%;
    /* background: red; */
    font-size: 23px;
    font-weight: bold;
    color: #8A8F9C;
    margin: 0 1em;
  }
  .profile-info{
  margin: 2em .5em;
  /* background: red; */
    }
  .profile-info img{}
  .profile-info h5{
    display: block;
    margin: .5em 0;
  }
  .profile-info h6{}

  .nav-links{

  }
  
  .nav-links .link{
    cursor: pointer;
    /* background: #000; */
    margin: 10px 0;
  }
  .nav-links .link img{
    
  }
  .nav-links .link.one{
    /* background: red; */
    margin: 3em 0 0em;
  } 

  .nav-links h6{
    /* background: red; */
    display: block;
    margin: 1.5em 0;
  }
  .nav-links .link.eight{
    /* background: red; */
    margin: 8em 0;
  }
</style>