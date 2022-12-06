<template>
  <div class="container">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
    <Footer /> 
  </div>
</template>

<script>
  import Navbar from '~/components/Navbar.vue'
  import Hero from '../components/Hero.vue';
  import About from '../components/About.vue';
  import Skills from '../components/Skills.vue';
  import Projects from '../components/Projects.vue';
  import Footer from '../components/Footer.vue';
  import Experience from '../components/Experience.vue';
  import Contact from '../components/Contact.vue';

  export default {
    name: 'Index',
    components: {
    Navbar,
    Hero,
    About,
    Skills,
    Projects,
    Footer,
    Experience,
    Contact
}
}

</script>