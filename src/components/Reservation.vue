<template>
  <!-- ========================
      Reservation
    =========================== -->
  <section class="reservation pb-0" id="reserve" style="padding: 0">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
          <div class="heading heading-layout1 text-center mb-50">
            <h2 class="heading__title">Unsere Services</h2>
            <div class="heading__icon">
              <img src="../assets/images/shapes/shape2.png" alt="heading img" />
            </div>
            <p class="heading__desc">
              Sie planen eine besondere Feier oder Veranstaltung? Lassen Sie uns
              das Catering für Sie übernehmen oder feiern Sie direkt bei uns im
              Restaurant! Unser Team steht Ihnen zur Seite, um Ihre Wünsche zu
              erfüllen und dafür zu sorgen, dass Ihre Veranstaltung
              unvergesslich wird. Kontaktieren Sie uns gerne und wir planen
              gemeinsam Ihr einmaliges Event!.
            </p>
          </div>
          <!-- /.heading -->
        </div>
        <!-- /.col-lg-6 -->
      </div>
      <!-- /.row -->
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12" style="border: 1px solid #ffffff4d; padding: 40px;">
          <!-- <form
            action="../assets/email-php/home_footer.php"
            class="reservation__form"
            method="POST"
          >
            <div class="row">
              <div class="col-sm-6 col-md-4 col-lg-4">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    placeholder="Ihr Name"
                  />
                </div>
              </div>
              
              <div class="col-sm-6 col-md-4 col-lg-4">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="email"
                    required
                    placeholder="Email"
                  />
                </div>
              </div>
  
              <div class="col-sm-6 col-md-4 col-lg-4">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="phone"
                    required
                    placeholder="Telefonnummer"
                  />
                </div>
              </div>
        

              <div class="col-sm-12 col-md-12 col-lg-12">
                <div class="form-group mb-30">
                  <textarea
                    class="form-control"
                    name="message"
                    placeholder="Nachricht"
                  ></textarea>
                </div>
              </div>
        

              <div class="col-sm-12 col-md-12 col-lg-12">
                <button
                  type="submit"
                  name="submit"
                  class="btn btn__secondary btn__block"
                >
                  Kontaktiere uns
                </button>
              </div>
            
            </div>
           
          </form> -->
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div class="text-center">
                <i class="fa-solid fa-wifi services" ></i> <br>
                <h3 class="servic-item">Kostenloses WLAN</h3>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div class="text-center">
                <i class="fa-solid fa-truck-moving services"></i><br>
                <h3 class="servic-item">Lieferservices</h3>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div class="text-center">
                <i class="fa-solid fa-shield-halved services"></i> <br>
                <h3 class="servic-item">Private <br> <span>Veranstaltungen</span> </h3>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div class="text-center">
                <i class="fa-solid fa-wheelchair services"></i><br>
                <h3 class="servic-item">Barrierefrei</h3>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div class="text-center">
                <i class="fa-solid fa-square-parking services" ></i> <br>
                <h3 class="servic-item">Parkplatze</h3>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div class="text-center">
                <i class="fa-solid fa-utensils services"></i> <br>
                <h3 class="servic-item">Catering</h3>
              </div>
            </div>
            <!-- <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
                <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping"
                  ><i class="fas fa-user"></i
                ></span>
                <input
                  type="text"
                  class="form-control email-field"
                  placeholder="Ihr Name"
                  aria-label="email"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
                <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping"
                  ><i class="fa-regular fa-envelope"></i
                ></span>
                <input
                  type="text"
                  class="form-control email-field"
                  placeholder="Email"
                  aria-label="email"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
                <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping"
                  ><i class="fa-solid fa-phone"></i
                ></span>
                <input
                  type="text"
                  class="form-control email-field"
                  placeholder="Telefonnummer"
                  aria-label="email"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12">
                <div class="input-group flex-nowrap">
                <textarea
                style="border-radius: 0;"
                  type="text"
                  class="form-control email-field"
                  placeholder="Nachricht"
                  aria-label="email"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </div>
            <div style="text-align: end; margin-top: 25px;">
                <button class="contact-btn"> Kontaktiere uns</button>
              </div> -->
          </div>
          <!-- <div class="d-flex justify-content-center">
            <div class=" ">
              
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping"
                  ><i class="fas fa-user"></i
                ></span>
                <input
                  type="text"
                  class="form-control email-field"
                  placeholder="Enter your email"
                  aria-label="email"
                  aria-describedby="addon-wrapping"
                />
              </div>

              <div>
                <button class="contact-btn">Contact</button>
              </div>
            </div>
          </div> -->
        </div>
        <!-- /.col-lg-8 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /.Reservation -->
</template>
<style scoped>
.services{
  font-size: 50px;
  color: green;
}
.servic-item{
  color: #fff;
  font-size: 20px;
  padding-top: 10px;
}
.heading-contact {
  font-size: 32px;
  line-height: 48px;
  color: #ffffff;
}

.contact-btn {
  background-color: #007bc5;
  color: #fff;
  border-radius: 100px;
  margin-left: 20px;
  padding: 8px 20px;
}
.input-group-text {
  border: 1px solid;
  background-color: #000;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
}
.email-field {
  border: 1px solid;
  width: 350px;
  background-color: #000;
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
}

@media screen and (max-width: 772px) {
  .email-field {
    width: auto;
  }
}

@media screen and (max-width: 572px) {
  .heading-contact {
    font-size: 26px;
    line-height: 34px;
  }
  .contact-btn {
    margin-left: 5px;
  }
}
</style>
