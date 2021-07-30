<template>
  <div class="MainNavbar">
      <div id="nav">
        <div class="nav-content">
          <div class="left-nav">
            <div class="logo">
              <router-link to="/">
                <img src="../assets/Homepage/header-logo.png" width="100" height="100" alt="logo">
              </router-link>
            </div>
          </div>

          <div class="right-nav">
           <!-- <svg id="Nav_bar" data-name="Nav bar" xmlns="http://www.w3.org/2000/svg" width="900" height="81.95" viewBox="0 0 1715.954 81.95">
  <text id="Notifications" style="cursor:pointer" transform="translate(900 51)" fill="#8a8f9c" font-size="40" font-family="OpenSans-Semibold, Open Sans" font-weight="600"><tspan x="0" y="0">Notifications</tspan></text>
  <path id="Icon_material-notifications-none" data-name="Icon material-notifications-none" d="M18.482,34.175A3.13,3.13,0,0,0,21.6,31.055H15.362A3.13,3.13,0,0,0,18.482,34.175Zm9.362-9.362v-7.8c0-4.79-2.543-8.8-7.021-9.861V6.09a2.34,2.34,0,1,0-4.681,0V7.151c-4.462,1.061-7.021,5.055-7.021,9.861v7.8L6,27.934v1.56H30.964v-1.56Zm-3.121,1.56H12.241V17.012c0-3.869,2.356-7.021,6.241-7.021s6.241,3.152,6.241,7.021Z" 
  transform="translate(1300 10) scale(1.5)" fill="#8a8f9c"/>
   
</svg> -->

                <img src="../assets/MainNavbar/Notification-icon.png" style="width:300px;height:85px;padding: 0em;cursor:pointer" alt="logo">

            <!-- <div class="btn-clear">
               <router-link to="/Se-connector">
                  <button>Notifi</button>
               </router-link>
            </div>

          <router-link to="/Inscription" class="btn-fill-primary">
                 <button>Essayer gratuitement</button>
          </router-link> -->
          </div>
        </div>
      </div>

     
  </div>

</template>

<script>
export default {
  name: 'TopNav',
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
    max-width: 25%;
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