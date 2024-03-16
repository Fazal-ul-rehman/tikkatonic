<template>
  <div class="container-fluid main-nav">
    <div class="row pt-3">
      <div class="col-md-3 col-lg-3 col-xl-6">
        <img src="../assets/xandaLogo.png" alt="" />
      </div>
      <div class="col-lg-9 col-md-9 col-xl-6">
        <ul class="d-flex nav-list justify-content-between pt-1">
          <li class="listItem"><a class="listItem" href="#home">Home</a></li>
          <li class="listItem">
            <a class="listItem" href="#solution">Our Solutions</a>
          </li>
          <li class="listItem">
            <a class="listItem" href="#about-us">About Us</a>
          </li>
          <li class="listItem">
            <a class="listItem" href="#services">Services</a>
          </li>
          <li class="listItem">
            <a class="listItem" href="#Technology">Technology</a>
          </li>
          <li class="listItem">
            <a class="listItem" href="#Success-stories">Success stories</a>
          </li>
          <li class="listItem">
            <a class="listItem" href="#contact-us">Contact Us</a>
          </li>
        </ul>

        <div>
          <Transition name="slide-fade">
            <div class="mobileNav" v-if="navBar">
              <div class="cross">
                <svg
                  @click="closeNavBar()"
                  xmlns="http://www.w3.org/2000/svg"
                  color="white"
                  height="20"
                  width="16"
                  viewBox="0 0 384 512"
                >
                  <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                  <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                  />
                </svg>
              </div>
              <ul>
                <li @click="closeNavBar" class="listItem2">
                  <a class="listItem2" href="#home">Home</a>
                </li>
                <li @click="closeNavBar" class="listItem2">
                  <a class="listItem2" href="#solution">Solution</a>
                </li>
                <li @click="closeNavBar" class="listItem2">
                  <a class="listItem2" href="#about-us">About Us</a>
                </li>
                <li @click="closeNavBar" class="listItem2">
                  <a class="listItem2" href="#services">Services</a>
                </li>
                <li @click="closeNavBar" class="listItem2">
                  <a class="listItem2" href="#Technology">Technology</a>
                </li>
                <li @click="closeNavBar" class="listItem2">
                  <a class="listItem2" href="#Success-stories">Success stories</a>
                </li>
                <li @click="closeNavBar" class="listItem2">
                  <a class="listItem2" href="#contact-us">Contact Us</a>
                </li>
              </ul>
            </div>
          </Transition>
          <div class="barIcon" v-if="navBarIcon">
            <svg
              @click="showNavBar()"
              xmlns="http://www.w3.org/2000/svg"
              color="white"
              height="20"
              width="16"
              viewBox="0 0 448 512"
            >
              <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const navBar = ref(false);
const navBarIcon = ref(true);

const showNavBar = () => {
  navBar.value = true;
  navBarIcon.value = false;
};
const closeNavBar = () => {
  navBar.value = false;
  navBarIcon.value = true;
};
</script>



<style scoped>
  
@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300&display=swap");
svg {
    color: white;
}
.main-nav {
  padding: 10px 26px;
  position: fixed;
  z-index: 1000;
  background:black;
}
.listItem,
.listItem2 {
  font-family: "Lexend Deca", sans-serif;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
  font-weight: 300;
  text-decoration: none;
}
.listItem2 {
  color: #fff;
}
.listItem:hover {
  color: #007BC5;
  font-weight: 600;
}
.nav-list {
  list-style: none;
}

.mobileNav {
  display: none;
  background: #0755e9;
  height: 100vh;
  width: 100%;
  text-align: justify;
  position: absolute;
  top: 0;
  right: 0;
}

.cross {
  background: white;
  position: absolute;
  right: 6px;
  top: 9px;
  padding: 1px 4px 2px;
  border-radius: 50%;
}
.barIcon {
  display: none;
}
.mobileNav ul {
  margin-top: 30px !important;
  padding: 0;
}
.mobileNav ul li {
  color: #fff;
  padding: 25px;
  list-style: none;
  text-align: left;
}
@media screen and (max-width: 850px) {
  .nav-list {
    display: none !important;
  }
  .barIcon {
    top: 20px;
    right: 15px;
    position: absolute;
    display: initial;
    background:#fff;
    padding:0px 7px;
  }
  .mobileNav {
    display: initial;
    position: fixed;
    z-index: 10000;
  }
}

.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
