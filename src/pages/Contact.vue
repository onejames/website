<template>
  <div class="contact-wrapper">

    <div id="contact-form" class="contact-form">

      <h1 class="title has-text-centered">Contact Me</h1>

      <div class="separator"></div>

      <div v-if="isSending" class="loading">Sending...</div>

      <form class="form" @submit="onSubmit">
        <input required name="name" v-model='contact.name' placeholder="Name" type="text" autocomplete="off">
        <input required name="email" v-model="contact.email" placeholder="E-mail" type="email" autocomplete="off">
        <textarea required name="message" v-model="contact.message" rows="4" placeholder="Message"></textarea>
        <button class="button">Send</button>
      </form>

    </div>

    <Footer/>

  </div>
</template>

<script>
import config from '@/data/config.json'

import Footer from '@/components/Footer.vue'

export default {
  name: 'Contact',
  components: {
    Footer
  },

  data () {
    return {
      config: config,
      contact: {
        name: '',
        email: '',
        message: ''
      },
      isSending: false
    }
  },

  methods: {

    clearForm () {
      for (let field in this.contact) {
        this.contact[field] = ''
      }
    },

    onSubmit (evt) {
      evt.preventDefault()

      this.isSending = true

      setTimeout(() => {
        let formData = new FormData()
        for (let field in this.contact) {
          formData.append(field, this.contact[field])
        }
        this.$http.post(this.config.urls.ContactFormurl, formData).then((response) => {
          console.log(response)
          // this.clearForm()
          this.isSending = false
        }).catch((e) => {
          console.log(e)
        })
      }, 1000)
    }
  }
}
</script>

<style scoped>
  .contact-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .contact-form {
      margin: 0 auto;
      max-width: 600px;
      width: 100%;
      height: 100%;
  }

  .contact-form .separator {
      border-bottom: solid 1px #ccc;
      margin-bottom: 15px;
  }

  .contact-form .form {
      display: flex;
      flex-direction: column;
      font-size: 16px;
  }

  .contact-form textarea {
      resize: none;
  }

  .contact-form .button {
    background: #da552f;
    border: solid 1px #da552f;
    color: white;
    cursor: pointer;
    padding: 10px 50px;
    text-align: center;
    text-transform: uppercase;
  }

  .contact-form .button:hover {
      background: #ea532a;
      border: solid 1px #ea532a;
  }

  .contact-form input[type="email"],
  .contact-form input[type="text"],
  .contact-form textarea {
    border: solid 1px #e8e8e8;
    font-family: 'Roboto', sans-serif;
    padding: 10px 7px;
    margin-bottom: 15px;
    outline: none;
  }

  .contact-form input[type="email"],
  .contact-form input[type="text"],
  .contact-form textarea,
  .contact-form .button {
      font-size: 15px;
      border-radius: 3px
  }
</style>
