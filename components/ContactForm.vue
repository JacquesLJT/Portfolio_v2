<template>
  <form @submit.prevent="submitForm" name="contact" method="POST" data-netlify="true">
    <label for="name">Name</label>
    <input type="text" id="name" v-model="name" required />

    <label for="email">Email</label>
    <input type="email" id="email" v-model="email" required />

    <label for="message">Message</label>
    <textarea id="message" v-model="message" required></textarea>

    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    submitForm() {
      const formData = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      // You can handle the form submission here
      console.log(formData);
    },
  },
};
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
}

button[type="submit"] {
  width: 100%;
  background-color: #101935;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

button[type="submit"]:hover {
  /* increase transparancy of background */
  background-color: rgba(16, 25, 53, 0.8);
}
</style>
