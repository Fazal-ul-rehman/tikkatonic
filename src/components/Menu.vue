<template>
  <div class="container-fluid mt-4">
    <span @click="back()">
      <i class="fa-solid fa-arrow-left"></i>
    </span>
    <div class="mb-3 mt-4">
      <h1 class="heading">Speisekarte Tikka Tonic</h1>
    </div>

    <div class="mt-3 mb-3">
      <h1 class="heading" style="text-align: left">SUPPEN</h1>
      <div class="row">
        <template v-for="(item, index) of menu_cards" :key="index">
          <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div class="card mb-4" style="width: 18rem">
              <img :src="item.image" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <h5 class="card-title">{{ item.cardHeading }}</h5>
                  <span class="pt-1 price">{{ item.price }}&nbsp;<i class="fa-solid fa-euro-sign"></i></span>
                </div>
                <p class="card-text">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="mb-3">
      <h1 class="heading" style="text-align: left">Salate</h1>
      <!-- <div class="d-flex justify-content-between flex-wrap"> -->
      <div class="row">
        <template v-for="(item, index) of menu_cards_salate" :key="index">
          <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div class="card card-salate mb-4" style="width: 18rem">
              <img :src="item.image" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <h5 class="card-title">{{ item.cardHeading }}</h5>
                  <span class="pt-1 price">{{item.price}}&nbsp;<i class="fa-solid fa-euro-sign"></i></span>
                </div>
                <p class="card-text">
                  {{ item.description }}
                </p>
                <p class="card-text" v-if="item.sub_description">
                  {{ item.sub_description }}
                </p>
              </div>
            </div>
          </div>
        </template>
        <!-- </div> -->
      </div>
    </div>

    <div class="mb-3">
      <h1 class="heading" style="text-align: left">VORSPEISEN /STARTERS</h1>
      <span> Frittierte Köstlichkeiten mit einer Kichererbsenmehl-Panade</span>
      <div class="row mt-4">
        <template v-for="(item, index) of menu_cards_staters" :key="index">
          <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div class="card mb-4" style="width: 18rem">
              <img :src="item.image" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <h5 class="card-title">{{ item.cardHeading }}</h5>
                  <span class="pt-1 price" >{{ item.price}}&nbsp;<i class="fa-solid fa-euro-sign"></i></span>
                </div>
                <p class="card-text">
                  {{ item.description }}
                </p>
                <p class="card-text" v-if="item.sub_description">
                  {{ item.sub_description }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="mb-3">
      <h1 class="heading" style="text-align: left">Weitere Vorspeisen</h1>
      <div class="row mt-4">
        <template v-for="(item, index) of menu_cards_Vorspeisen" :key="index">
          <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div class="card mb-4" style="width: 18rem">
              <img :src="item.image" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <h5 class="card-title">{{ item.cardHeading }}</h5>
                  <span class="pt-1 price">{{ item.price }}&nbsp;<i class="fa-solid fa-euro-sign"></i></span>
                </div>
                <p class="card-text">
                  {{ item.description }}
                </p>
                <p class="card-text" v-if="item.sub_description">
                  {{ item.sub_description }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="mb-3">
      <h1 class="heading" style="text-align: left">
        Spezialitäten aus dem Tandoor (Lehmofen)
      </h1>
      <span>
        Zu allen Gerichten wird ein kleiner Beilagensalat und Basmatireis
        serviert</span
      >
      <div class="row mt-4">
        <template v-for="(item, index) of menu_cards_lehmofen" :key="index">
          <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div class="card mb-4" style="width: 18rem">
              <img :src="item.image" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <h5 class="card-title">{{ item.cardHeading }}</h5>
                  <span class="pt-1 price">{{ item.price }}&nbsp;<i class="fa-solid fa-euro-sign"></i></span>
                </div>
                <p class="card-text">
                  {{ item.description }}
                </p>
                <p class="card-text" v-if="item.sub_description">
                  {{ item.sub_description }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="mb-3">
      <h1 class="heading" style="text-align: left">CHICKEN SPEZIALITÄTEN</h1>
      <div class="row mt-4">
        <template v-for="(item, index) of menu_cards_chick_sep" :key="index">
          <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div class="card mb-4" style="width: 18rem">
              <img :src="item.image" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <h5 class="card-title">{{ item.cardHeading }}</h5>
                  <span class="pt-1 price">{{ item.price }}&nbsp;<i class="fa-solid fa-euro-sign"></i></span>
                </div>
                <p class="card-text">
                  {{ item.description }}
                </p>
                <p class="card-text" v-if="item.sub_description">
                  {{ item.sub_description }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="mb-3">
      <h1 class="heading" style="text-align: left">LAMM SPEZIALITÄTEN</h1>
      <div class="row mt-4">
        <template v-for="(item, index) of menu_cards_Lamm" :key="index">
          <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div class="card mb-4" style="width: 18rem">
              <img :src="item.image" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <h5 class="card-title">{{ item.cardHeading }}</h5>
                  <span class="pt-1 price">{{ item.price }}&nbsp;<i class="fa-solid fa-euro-sign"></i></span>
                </div>
                <p class="card-text">
                  {{ item.description }}
                </p>
                <p class="card-text" v-if="item.sub_description">
                  {{ item.sub_description }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="mb-3">
      <h1 class="heading" style="text-align: left"> Fisch und Scampi</h1>
      <div class="row mt-4">
        <template v-for="(item, index) of menu_cards_fish" :key="index">
          <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div class="card mb-4" style="width: 18rem">
              <img :src="item.image" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <h5 class="card-title">{{ item.cardHeading }}</h5>
                  <span class="pt-1 price">{{ item.price }}&nbsp;<i class="fa-solid fa-euro-sign"></i></span>
                </div>
                <p class="card-text">
                  {{ item.description }}
                </p>
                <p class="card-text" v-if="item.sub_description">
                  {{ item.sub_description }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>


    <div class="mb-3">
      <h1 class="heading" style="text-align: left"> VEGEGETARISCHE SPEZIALITÄTEN</h1>
      <div class="row mt-4">
        <template v-for="(item, index) of menu_cards_veg" :key="index">
          <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div class="card mb-4" style="width: 18rem">
              <img :src="item.image" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <h5 class="card-title">{{ item.cardHeading }}</h5>
                  <span class="pt-1 price">{{ item.price }}&nbsp;<i class="fa-solid fa-euro-sign"></i></span>
                </div>
                <p class="card-text">
                  {{ item.description }}
                </p>
                <p class="card-text" v-if="item.sub_description">
                  {{ item.sub_description }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="mb-3">
      <h1 class="heading" style="text-align: left"> Biryani</h1>
      <span>
        Jedes Gericht wird mit Raita serviert</span>
      <div class="row mt-4">
        <template v-for="(item, index) of menu_cards_biryani" :key="index">
          <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div class="card mb-4" style="width: 18rem">
              <img :src="item.image" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <h5 class="card-title">{{ item.cardHeading }}</h5>
                  <span class="pt-1 price">{{ item.price }}&nbsp;<i class="fa-solid fa-euro-sign"></i></span>
                </div>
                <p class="card-text">
                  {{ item.description }}
                </p>
                <p class="card-text" v-if="item.sub_description">
                  {{ item.sub_description }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="mb-3">
      <h1 class="heading" style="text-align: left">  Brotspezialitäten aus dem Tandoor</h1>
      <div class="row mt-4">
        <template v-for="(item, index) of menu_cards_dem" :key="index">
          <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div class="card mb-4" style="width: 18rem">
              <img :src="item.image" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <h5 class="card-title">{{ item.cardHeading }}</h5>
                  <span class="pt-1 price">{{ item.price }}&nbsp;<i class="fa-solid fa-euro-sign"></i></span>
                </div>
                <p class="card-text">
                  {{ item.description }}
                </p>
                <p class="card-text" v-if="item.sub_description">
                  {{ item.sub_description }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>



    <div class="mb-3">
      <h1 class="heading" style="text-align: left">Beilagen</h1>
      <div class="row mt-4">
        <template v-for="(item, index) of menu_cards_beilagen" :key="index">
          <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div class="card mb-4" style="width: 18rem">
              <img :src="item.image" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <h5 class="card-title">{{ item.cardHeading }}</h5>
                  <span class="pt-1 price">{{ item.price }}&nbsp;<i class="fa-solid fa-euro-sign"></i> <br>  <span class="pt-1" v-if="item.price2">{{ item.price2 }}&nbsp;<i class="fa-solid fa-euro-sign"></i></span></span>
                 
                </div>
                <p class="card-text">
                  {{ item.description }}
                </p>
                <p class="card-text" v-if="item.sub_description">
                  {{ item.sub_description }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>


    <div class="mb-3">
      <h1 class="heading" style="text-align: left">Dessert</h1>
      <div class="row mt-4">
        <template v-for="(item, index) of menu_cards_desert" :key="index">
          <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div class="card mb-4" style="width: 18rem">
              <img :src="item.image" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <h5 class="card-title">{{ item.cardHeading }}</h5>
                  <span class="pt-1 price">{{ item.price }}&nbsp;<i class="fa-solid fa-euro-sign"></i></span>
                </div>
                <p class="card-text">
                  {{ item.description }}
                </p>
                <p class="card-text" v-if="item.sub_description">
                  {{ item.sub_description }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>


    
  </div>
</template>

<script setup>
import router from "@/router";
import { reactive } from "vue";

const menu_cards = reactive([
  {
    cardHeading: "Dal-Suppe",
    description: "Indische Linsensuppe",
    price: "4.90",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "TOMATEN-SUPPE",
    description: "Aus frischen Tomaten und mit traditionellen Kräutern",
    price: "4.90",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "GEMÜSE-SUPPE",
    description: "Gemischte Gemüsesuppe mit traditionellen Gewürzen",
    price: "5.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "MULLIGATAWNY-SUPPE",
    description: "Indische Currysuppe mit Hühnchen, Reis und Koriander",
    price: "6.50",
    image: "../assets/images/backgrounds/2.jpg",
  },
]);
const menu_cards_salate = reactive([
  {
    cardHeading: "TIKKA TONIC SPEZIALSALAT ",
    description:
      "Bunter Mix-Salat mit würzigen Gurken-, Tomaten, Paprika, Zitrone und frischen Gewürzen aus Ingwer und Chili ",
    sub_description:
      "serviert wahlweise mit Chicken Tikka / Fisch / Scampi oder hausgemachtem Paneer (Käse)",
    price: "10.90",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "FRISCHER MANGO-RUCOLA-SALAT",
    description:
      "Rucola-Salat mit Tomaten, Gurken, Granatapfel, Mango, Cashewnüssen und hausgemachtem Granatapfel-Kokos-Dressing",
    price: "8.90",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "INDIAN Mix Salat ",
    description:
      "Frische Gurken, Tomaten, Zwiebeln mit frischer Zitrone und Chat Masala",
    price: "7.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
]);

const menu_cards_staters = reactive([
  {
    cardHeading: "Vegetarisch PAKORA",
    description: "verschiedenes Gemüse mit traditionellen Gewürzen",
    price: "5.90",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Chicken Pakora ",
    description:
      "Rucola-Salat mit Tomaten, Gurken, Granatapfel, Mango, Cashewnüssen und hausgemachtem Granatapfel-Kokos-Dressing",
    price: "6.90",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Paneer Pakora",
    description: "Hausgemachter Käse mit traditionellen Gewürzen",
    price: "5.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Fisch Pakora",
    description: "Fisch mit traditionellen Gewürzen",
    price: "6.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Onion Bhaji",
    description: "Bällchen aus Zwiebelstreifen mit Paprika und Ingwer ",
    price: "5.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Samosa (2 Stück",
    description: "Bällchen aus Zwiebelstreifen mit Paprika und Ingwer ",
    price: "5.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Samosa (2 Stück)",
    description: "Bällchen aus Zwiebelstreifen mit Paprika und Ingwer ",
    price: "6.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
]);

const menu_cards_Vorspeisen = reactive([
  {
    cardHeading: "Papadam mit Chutneys",
    description: "",
    price: "2.00",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Chicken Tikka ",
    description:
      "Hähnchenbrustfilet mariniert in Joghurt mit Kräutern und indischen Gewürzen im Tandoori-Ofen gegrillt",
    price: "7.50",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "PANEER TIKKA",
    description: "Hausgemachter Käse mit traditionellen Gewürzen",
    price: "6.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "ALOO TIKKI",
    description: "Fisch mit traditionellen Gewürzen",
    price: "5.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "ALOO CHANA CHAAT",
    description:
      "Kichererbsen, Kartoffeln, Tomaten, Zwiebeln, Koriander und Chaat Masala serviert mit einer Joghurt Imli-Sauce",
    price: "6.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Samosa Chaat g,h ",
    description:
      "Mit Kartoffeln und Erbsen gefüllte Teigtasche serviert mit Kichererbsen, Salat und hausgemachten Chutneys ",
    price: "6.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Gemischte Vorspeisenplatte für 2 (Veg)",
    description:
      "Vorspeisenplatte mit verschiedenen Veg- Pakoras, Samosas Salat und Aloo Tikki (auf Wunsch auch vegan)",
    price: "14.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Gemischte Vorspeisenplatte für 2",
    description:
      "Vorspeiseplatte mit verschiedenen Pakoras, Chicken Tikka, Salat und Lamm Sikh Kebab",
    price: "22.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
]);

const menu_cards_lehmofen = reactive([
  {
    cardHeading: "ACHARI CHICKEN TIKKA",
    description:
      "Hähnchenfiletstücke in Tandoori-Marinade mit eingelegten Gurken",
    price: "15.90",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "LAMM SIKH KEBAB",
    description:
      "Gehacktes Lammfleisch am Spieß mit frischen Kräutern und einer Minze-Sauce",
    price: "17.90",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "CHICKEN KEBAB",
    description:
      "Gehacktes Hähnchen am Spieß mit frischen Kräutern und Zitronenscheibe",
    price: "16.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "TANDOORI CHICKEN ",
    description:
      "Hähnchenkeule (mit Knochen) in Tandoori-Marinade im Lehmofen gegart",
    price: "16.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Lamm Aloo Tori",
    description: "Lammkoteletten auf einem Beet aus Zucchini und Kartoffeln ",
    price: "21.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "FISCH TIKKA ",
    description:
      "Im Ofen gegarter, marinierter Fisch mit Knoblauch-Chili-Sauce ",
    price: "16.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "SCAMPI TANDOORI",
    description: "Marinierte Scampi mit Knoblauch-Chilisauce/Buttersauce",
    price: "17.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "TIKKA TONIC MIX GRILL",
    description: "Gemischter Teller mit Fleisch, Fisch und Gemüse",
    price: "17.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "MIX MEERESFRÜCHTE PLATTE ",
    description:
      "Gemischte Meeresfrüchtenplatte mit Scampi, saisonalen Fisch und einer Minze-Sauce",
    price: "22.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
]);

const menu_cards_chick_sep = reactive([
  {
    cardHeading: "Murgh Tikka Masala ",
    description:
      "Tandoori-Hähnchenstücke mit Tomaten, Zwiebeln, Ingwer, Koriander und Joghurtsauce",
    price: "14.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Chicken Lemon ",
    description:
      "Hähnchenbrust mit grünem Curry in einer feinen Zitronen-Joghurt-Sauce",
    price: "14.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Chicken Madras (Scharf)",
    description: "Hähnchenfilet in Süß-Sauer-Sauce",
    price: "14.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Chicken Jalfrezi   ",
    description: "Hähnchenfilet mit Gemüse und würziger Tomatensauce",
    price: "14.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Butter Chicken",
    description: "Tandoori-Filetstreifen mit Joghurt-Tomaten-Cremesauce ",
    price: "14.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Chicken Moghulai ",
    description: "Hähnchen mit indischem Käse und Mandel-Safran-Sauce",
    price: "14.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Chicken Korma",
    description: "Hähnchen mit Gemüse und Mandel-Safransauce",
    price: "14.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Chicken KarahiL",
    description:
      "Hähnchenfilet mit Paprika, Tomaten und Zwiebeln in Currysauce gebraten",
    price: "14.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Chicken Palak ",
    description: "Hähnchenfilet mit Rahmspinat, Ingwer, Knoblauch und Gewürzen",
    price: "14.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Chicken Curry ",
    description: "Hähnchenfilet mit Tomaten in Currysauce ",
    price: "14.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
]);

const menu_cards_Lamm = reactive([
  {
    cardHeading: "Lamm Curry  ",
    description: "Lammwürfel in würziger Currysauce",
    price: "17.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Lamm Shahi Korma",
    description: "Lammwürfel in Safransauce",
    price: "17.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Palak Gosht",
    description:
      "Lammfleischstücke mit Rahmspinat nach Art des Hauses gebraten",
    price: "17.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: " Lamm Bhuna  ",
    description:
      "gebratenes Lamm mit Paprika, Koriander, Ingwer in roter Currysauce",
    price: "17.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Lamm Vindalo ",
    description: "Lammwürfel mit Süß-Sauer-Sauce",
    price: "17.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Lamm Madras ",
    description:
      "Lammfleisch mit Kokosraspeln in Madras-Curry-Sauce nach südindischer Art",
    price: "17.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Lamm Jalfrezi",
    description: "Lammfleisch mit Gemüse und würziger Tomatensauce",
    price: "17.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
]);


const menu_cards_fish = reactive([
  {
    cardHeading: "Scampi Madras   ",
    description: "Scampi mit Kokosraspeln in Madras-Curry-Sauce nach südindischer Art",
    price: "18.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Scampi Makhan ",
    description: "Gebratene Scampi in einer Knoblauch-Joghurt-Tomaten-Sauce",
    price: "18.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Fish Curry ",
    description:
      "Fischfiletstücke mit Zwiebeln, Koriander, Ingwer und roter Currysauce",
    price: "17.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
]);


const menu_cards_veg = reactive([
  {
    cardHeading: "Aloo Baingan (Vegan)  ",
    description: "Auberginen-Kartoffel-Curry mit Kümmel und Ingwer",
     price: "13.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Aloo gobi masala",
    description: "Blumenkohl, Kartoffeln, Kümmel, Ingwer in einer Tomatensauce ",
     price: "13.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Sabsi Masala (Vegan) ",
    description:
      "mit verschiedenem Gemüse, pikanten Gewürzen und Kräutern",
     price: "13.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Kofta Curry (Vegan) ",
    description:
      "Gemüsebällchen mit pikanter Currysauce",
     price: "13.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Channa Masala (Vegan)  ",
    description: "gebratene Kichererbsen mit Zwiebeln, Ingwer und Kümmel",
     price: "13.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Navrattan-Curry ",
    description:
      "mit verschiedenem Gemüse, Obst und Safransauce ",
     price: "13.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Malai kofta",
    description: "hausgemachte Käsebällchen mit Rosinen, Mandeln und Safransauce ",
     price: "13.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Navrattan-Curry ",
    description:
      "mit verschiedenem Gemüse, Obst und Safransauce ",
     price: "13.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Malai kofta ",
    description:
      "hausgemachte Käsebällchen mit Rosinen, Mandeln und Safransauce ",
     price: "13.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Saag Paneer",
    description:
      "indischer Käse mit Spinat ",
     price: "13.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Kadai Paneer",
    description:
      "Käse mit Paprika, Tomaten und Zwiebeln in scharfer Sauce gebraten  ",
     price: "13.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Dal (Pikant, Vegan)  ",
    description:
      "gelbe Linsen mit frischem Ingwer und Knoblauch",
     price: "13.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Makhni Dal (Mild)",
    description:
      "schwarze Linsen mit Butter in einer Tomatensauce",
    price: "13.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
]);


const menu_cards_biryani = reactive([
  {
    cardHeading: "Gebratener Reis mit Gemüse ",
    description: "",
     price: "15.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Gebratener Reis mit Hähnchen",
    description: " ",
     price: "16.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Gebratener Reis mit Lamm ",
    description:
      "",
     price: "17.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Gebratener Reis mit Scampi  ",
    description:
      "",
     price: "18.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },

]);


const menu_cards_dem = reactive([
  {
    cardHeading: "SADA NAAN a,g 3,5   ",
    description: "Fladenbrot aus Weizenmehl",
     price: "3.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "BUTTER NAAN a,g 4,5 ",
    description: "Fladenbrot aus Weizenmehl mit Butter gebacken",
     price: "3.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Garlic NAAN a,g 4,5 ",
    description:
      "Fladenbrot mit frischem Knoblauch und Koriander",
     price: "3.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "SABJI NAAN a,g 5,0",
    description:
      "Fladenbrot mit Gemüsefüllung und Kräutern",
      price: "4.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "PANEER KULCHA a,g 5,0  ",
    description: "Fladenbrot gefüllt mit Paneer, Zwiebeln und Koriander",
    price: "4.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "CHILI CHEESE NAAN 5,5 ",
    description:
      "Fladenbrot gefüllt mit rotem Chili und Käse",
     price: "4.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "KEEMA NAAN a,g 5,9",
    description: "Fladenbrot mit Lammhackfleischfüllung und aromatischen Gewürzen ",
     price: "4.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "KASHMEERI NAAN a,g,h 4,9  ",
    description:
      "Süßes Fladenbrot gefüllt mit Cashewnüssen, Kokosraspeln, Anis und Rosinen",
     price: "4.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "LACHA PARATHA a,g 4,5 ",
    description:
      "Vollkornfladenbrot nach traditioneller Art mit Butter gebacken",
     price: "4.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "PUDINA PARATHA a,g 4,5 ",
    description:
      "Fladenbrot aus Vollkornmehl mit frischer Pfefferminze",
     price: "3.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "ROTI a,g 3,0",
    description:
      "Fladenbrot aus Vollkornmehl  ",
     price: "3.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "BATURA a,g 4,5  ",
    description:
      "Frittiertes, aufgeblähtes Fladenbrot",
     price: "3.90 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  
]);


const menu_cards_beilagen = reactive([
  {
    cardHeading: "Plain Basmati Reis ",
    description: "",
     price: "klein 3,50",
     price2: "Groß 5,50",

    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Jeera Basmati Reis",
    description: "Mit Kümmel ",
     price: "klein 3,90",
     price2: "Groß 5,50",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Basmati Reis mit Gemüse  ",
    description:
      "",
     price: "7.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Basmati Reis mit Rosinen und Nüssen",
    description:
      "",
      price: "7.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Raita",
    description: "Joghurt mit klein gehackten Gurken, Zwiebeln, Tomaten und Chat-Masala",
    price: "4.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Mixed Pickles ",
    description:
      "eingelegte Mangos und Gemüse",
     price: "2.00 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "Mango Chutney ",
    description: " ",
     price: "2.00 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  
  
]);


const menu_cards_desert = reactive([
  {
    cardHeading: "MANGO DREAM d  ",
    description: "Vanilleeis glaciert mit Mango-Püree",
    price: "5.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "GAJAR HALWA  ",
    description: "Hausgemachte Süßspeise aus Möhren mit Mandeln, Butter, Rosinen und Pistazien",
    price: "5.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "RASMALAI g,h ",
    description:
      "Köstliche Milch-Taler zubereitet mit Rosenwasser, Pistazien und Kardamom",
     price: "5.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "GULAB JAMUN g,h ",
    description:
      "Traditionelle Paneer- und Mehlbällchen, warm serviert in Zuckersirup",
      price: "4.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  {
    cardHeading: "TIKKA TONIC MITHA PLATTE  ",
    description: "Auswahl aus verschiedenen Nachspeisen (zum Teilen)",
    price: "14.50 ",
    image: "../assets/images/backgrounds/2.jpg",
  },
  
]);



const back = ()=> {
  router.go(-1)
}
</script>

<style scoped>
.fa-arrow-left{
  font-size: 20px;
  background-color: blue;
  color: #fff;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
}
.fa-arrow-left:hover{
  color: #000;
  background-color: #fff;
}
.price{
  white-space: nowrap;
}
.card {
  background: transparent;
  border: 1px solid;
  height: 350px;
  width: auto !important;
}

.card-salate{
  height: 484px;
}
.heading {
  text-align: center;
  color: #fff !important;
  font-size: 30px;
}

.card-title{
  color: #fff;
  font-size: 20px;
}
.card:hover {
  /* transition: transform 1.2s ease;
  transform: scale(1.05); */
}
@media screen and (max-width:992px) {
  
 .card-salate{
  height: 482px;
}

}

@media screen and (max-width:580px) {
  
  .heading{
    font-size: 22px;
  }
  .card{
   height: auto;
 }
 .card-title{
  font-size: 17px;
 }
 
 }
</style>
