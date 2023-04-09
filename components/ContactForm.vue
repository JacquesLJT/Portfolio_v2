<template>
  <div class="contact-form-container">
    <h2>Contact Us</h2>
    <form @submit.prevent="sendEmail">
      <div class="input-field">
        <input v-model="name" type="text" id="name" required />
        <label for="name">Name</label>
      </div>
      <div class="input-field">
        <input v-model="email" type="email" id="email" required />
        <label for="email">Email</label>
      </div>
      <div class="input-field">
        <textarea v-model="message" id="message" rows="5" required></textarea>
        <label for="message">Message</label>
      </div>
      <button class="submit-button" type="submit" :disabled="isLoading" :class="{ spinner: isLoading }"><span>Send Message</span></button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      isLoading: false,
    };
  },
  methods: {
    async sendEmail() {
      this.isLoading = true;

      try {
        await this.$mail.send({
          from: `${this.email}`,
          to: 'me@landonthibodeau.com',
          subject: `New contact from ${this.name}`,
          text: `Name: ${this.name}\nEmail: ${this.email}\nMessage: ${this.message}`,
        });

        alert('Email sent successfully!');
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Error sending email. Please try again later.');
      } finally {
        this.isLoading = false;
        this.name = '';
        this.email = '';
        this.message = '';
      }
    }
  },
};
</script>

<style scoped>
  .contact-form-container {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  h2 {
    margin-bottom: 1rem;
    text-align: center;
    font-size: 1.5rem;
  }

  .input-field {
    position: relative;
    margin-bottom: 1.5rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #666;
    outline: none;
    resize: none;
  }

  input:focus,
  textarea:focus {
    border-color: #3f51b5;
  }

  label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.5rem 0;
    font-size: 0.9rem;
    color: #666;
    pointer-events: none;
    transform-origin: 0 0;
    transition: all 0.2s;
  }

  input:focus + label,
  textarea:focus + label,
  input:not(:placeholder-shown) + label,
  textarea:not(:placeholder-shown) + label {
    transform: scale(0.8) translateY(-1rem);
    color: #3f51b5;
  }

  .submit-button {
    width: 100%;
    padding: 0.75rem;
    background-color: #3f51b5;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .submit-button:hover {
    background-color: #303f9f;
  }

  .submit-button.spinner {
    position: relative;
    background-color: #303f9f;
  }

  .submit-button.spinner::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    border: 2px solid #fff;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }

  .submit-button.spinner > span {
    visibility: hidden;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

</style>
