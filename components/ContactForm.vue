<template>
  <div class="form-container">
    <!-- 
      Add `netlify-honeypot="bot-field"` and
      `@submit.prevent="handleSubmit"` to trigger our Vue method instead of
      letting the browser post the form directly.
    -->
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit"
    >
      <!-- Required hidden input for Netlify to read the form name -->
      <input type="hidden" name="form-name" value="contact" />

      <!-- Honeypot field, hidden from real users -->
      <div style="display:none;">
        <label>Don’t fill this out if you're human:
          <input name="bot-field" />
        </label>
      </div>

      <div class="form-group">
        <label for="name" class="form-label">Your Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          v-model="name"
          class="form-input"
          required
        />
      </div>
      <div class="form-group">
        <label for="email" class="form-label">Your Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          v-model="email"
          class="form-input"
          required
        />
      </div>
      <div class="form-group">
        <label for="message" class="form-label">Message:</label>
        <textarea
          id="message"
          name="message"
          v-model="message"
          class="form-input"
          required
        ></textarea>
      </div>

      <!-- Submission feedback messages -->
      <div v-if="formStatus === 'success'" class="success-message">
        Thank you! Your message has been sent.
      </div>
      <div v-else-if="formStatus === 'error'" class="error-message">
        Oops! Something went wrong. Please try again.
      </div>

      <div class="form-group">
        <button
          type="submit"
          class="form-submit"
          :disabled="submitting"
        >
          <!-- Optional: show a loading indicator if needed -->
          <span v-if="submitting">Sending...</span>
          <span v-else>Send</span>
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
  .form-container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 40px;
    background-color: #ffffff;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
  }

  .form-group {
    margin-bottom: 25px;
  }

  .form-label {
    font-size: 14px;
    font-weight: 600;
    color: #333333;
    margin-bottom: 10px;
    display: inline-block;
  }

  .form-input {
    width: 100%;
    padding: 10px 20px;
    border: 2px solid #eaeaea;
    border-radius: 8px;
    font-size: 14px;
    color: #333333;
    transition: border-color 0.3s ease;
  }

  .form-input:focus {
    border-color: #007BFF;
    outline: none;
  }

  .form-submit {
    width: 100%;
    background-color: #C6D5EB;
    color: #101935;
    border-width: 2px;
    border-color: #101935;
    padding: 15px 0;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 6px 6px #101935;
    transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease;
  }

  .form-submit:hover,
  .form-submit:focus {
    box-shadow: 3px 3px #101935;
  }

  .form-submit:active {
    transform: translateY(6px);
  }
</style>

<script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
        formStatus: '',
        submitting: false
      }
    },
    methods: {
      async handleSubmit() {
        // Start the loading state
        this.submitting = true;
        this.formStatus = '';

        // Build form data
        const formData = new URLSearchParams();
        formData.append('form-name', 'contact');
        formData.append('name', this.name);
        formData.append('email', this.email);
        formData.append('message', this.message);

        try {
          // Send POST request to Netlify
          const response = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formData.toString()
          });

          if (response.ok) {
            this.formStatus = 'success';
            // Reset form fields
            this.name = '';
            this.email = '';
            this.message = '';
          } else {
            this.formStatus = 'error';
          }
        } catch (error) {
          this.formStatus = 'error';
        } finally {
          this.submitting = false;
        }
      }
    }
  }
</script>