<template>
<body>
        <!-- .wpo-breadcumb-area start -->
        <div class="wpo-breadcumb-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="wpo-breadcumb-wrap">
                            <h2>Laissez un message</h2>
                            <ul>
                                <li><router-link to="/">Accueil</router-link></li>
                                <li><span>Contact</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- .wpo-breadcumb-area end -->

        <!-- start wpo-contact-form-map -->
        <section class="wpo-contact-form-map section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="contact-form">
                                    <h2>Get In Touch</h2>
                                    <form @submit="onSubmit" class="contact-validation-active" id="contact-form">
                                        <div>
                                            <input type="text" class="form-control" v-model="name" id="name" placeholder="Prénom" required>
                                        </div>
                                        <div>
                                            <input type="text" class="form-control" v-model="name2"  id="name2" placeholder="Nom" required>
                                        </div>
                                        <div class="clearfix">
                                            <input type="email" class="form-control" v-model="email"  id="email" placeholder="Email" required>
                                        </div>
                                        <div>
                                            <input type="text" class="form-control" v-model="subject"  id="subject" placeholder="Sujet" required>
                                        </div>
                                        <div>
                                            <textarea class="form-control" v-model ="note" id="note" placeholder="Message..." required></textarea>
                                        </div>
                                        <div class="submit-area">
    <q-btn type="submit" push color="green " :loading="loading" :disabled="loading"  icon-right="send" label="Envoyer" >      <template v-slot:loading>
        <q-spinner-hourglass class="on-left" />
        En cours ...
      </template>
    </q-btn>
                                            <div id="loader">
                                                <i class="ti-reload"></i>
                                            </div>
                                        </div>
                                        <div class="clearfix error-handling-messages">
                                            <div id="success">Merci</div>
                                            <div id="error"> Error occurred while sending email. Please try again later. </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="contact-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>

                        <div class="wpo-contact-info">
                            <div class="row">
                             </div>
                        </div>
                    </div>
                </div>
            </div> <!-- end container -->
        </section>
        <!-- end wpo-contact-form-map -->
</body>

</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      name: '',
      name2: '',
      email: '',
      subject: '',
      note: '',
      loading: false
    }
  },
  components: {
  },
  methods: {
    onSubmit (e) {
      this.loading = true
      e.preventDefault()
      const formData = {
        name: this.name,
        prename: this.name2,
        email: this.email,
        sujet: this.subject,
        message: this.note
      }
      return axios.post('/contact', formData).then(data => {
        this.loading = false
        this.name = ''
        this.name2 = ''
        this.email = ''
        this.subject = ''
        this.note = ''
        // Change to notify the userthis.loading = false
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'merci pour ce message , nous allons essayer de faire le maximum pour vous repondre'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
