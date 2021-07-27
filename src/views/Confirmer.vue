 <template> 
      <div class="se-con-container">
        <div class="nav-content">
          <div class="left-nav">
            <div class="logo">
              <router-link to="/">
                <img src="../assets/Homepage/header-logo-png.png" width="100" height="100" alt="logo">
              </router-link>
            </div>
        </div>

        confirmer
  
  </div>

  </div>
</template>

<style scoped>
.se-con-container{
		font-family: 'Open Sans', sans-serif;
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