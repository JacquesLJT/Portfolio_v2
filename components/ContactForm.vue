<template>
  <div class="form-container">
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>Your Name:</label>
        <input type="text" name="name" v-model="name" class="form-input" />
      </p>
      <p>
        <label>Your Email:</label>
        <input type="email" name="email" v-model="email" class="form-input" />
      </p>
      <p>
        <label>Message:</label>
        <textarea name="message" v-model="message" class="form-input"></textarea>
      </p>
      <p>
        <button type="submit" class="form-submit">Send</button>
      </p>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.form-input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-submit {
  width: 100%;
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  margin: 20px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-submit:hover {
  background-color: #0069d9;
}
</style>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  }
}
</script>
