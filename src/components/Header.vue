<template>
  <header id="header" class="header header-transparent header-layout1">
    <nav class="navbar navbar-expand-lg sticky-navbar">
      <div class="container">
        <a class="navbar-brand">
          <img src="../assets/logo.jpeg" class="logo-light" alt="logo" />
          <img
            style="width: 68px; border-radius: 50%"
            src="../assets/logo.png"
            class="logo-dark"
            alt="logo"
          />
        </a>
        <button class="navbar-toggler" @click="showNavBar()" type="button">
          <span class="menu-lines"><span></span></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNavigation">
          <ul class="navbar-nav ml-auto">
            <li class="nav__item with-dropdown">
              <a href="#header" class="dropdown-toggle nav__item-link active"
                >Home</a
              >
            </li>

            <!-- /.nav-item -->

            <li class="nav__item with-dropdown">
              <router-link to="/menu" class="dropdown-toggle nav__item-link">
                Menu</router-link
              >
            </li>

            <!-- /.nav-item -->
            <!-- <li class="nav__item with-dropdown">
              <a href="#" class="dropdown-toggle nav__item-link">Gallery</a>
            </li> -->

            <!-- <li class="nav__item with-dropdown">
              <a href="#reserve" class="dropdown-toggle nav__item-link">Contact Us</a>
            </li> -->
            <!-- /.nav-item -->
            <!-- /.nav-item -->
          </ul>
          <!-- /.navbar-nav -->
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container -->
    </nav>
    <!-- /.navabr -->
    <div>
      <Transition name="slide-fade">
        <div class="mobileNav" v-if="navBar">
          <div class="cross">
            <i @click="closeNavBar()" class="fa-solid fa-xmark xmark"></i>
          </div>
          <ul>
            <li @click="closeNavBar" class="listItem2">Home</li>

            <li @click="closeNavBar" class="listItem2">
              <router-link to="/menu"> Menu </router-link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  </header>

  <!-- ========================
    Slider
    ============================== -->
  <div class="owl-item cloned">
    <div
      class="slide-item align-v-h text-center bg-overlay bg-img"
      style="
        background-image: url('assets/images/backgrounds/3.jpg');
        background-size: cover;
        background-position: center;
        height: 80vh;
      "
    >
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="slide__content">
              <h2 class="slide__title" style="color: #fff">
                Herzlich Willkommen zu Ihrem Lieblingsinder um die Ecke im
                Herzen von Linden-Limmer.
              </h2>
              <a
                data-scroll="smooth"
                href="#reserve"
                class="btn btn__white btn__bordered"
                >Zur Speisekarte</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const navBar = ref(false);

const showNavBar = () => {
  navBar.value = true;
};
const closeNavBar = () => {
  navBar.value = false;
  navBarIcon.value = true;
};
</script>
<style scoped>
.xmark {
  font-size: 17px;
  padding: 5px 3px 0px;
  color: #000;
}

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

.mobileNav ul {
  margin-top: 30px !important;
  padding: 0;
}
.mobileNav ul li {
  color: #fff;
  padding: 10px;
  list-style: none;
  text-align: left;
}
@media screen and (max-width: 850px) {
  .nav-list {
    display: none !important;
  }
  .mobileNav {
    display: initial;
    position: fixed;
    z-index: 10000;
  }
}

@media screen and (max-width: 570px) {
  .slide__title{
    font-size: 28px;
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
