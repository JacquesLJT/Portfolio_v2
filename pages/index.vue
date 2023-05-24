<template>
  <div class="container">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
    <FooterVue />
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue';
  import Hero from '../components/Hero.vue';
  import About from '../components/About.vue';
  import Skills from '../components/newSkills.vue';
  import Projects from '../components/projects.vue';
  import Experience from '../components/newExperience.vue';
  import Contact from '../components/Contact.vue';
  import FooterVue from '../components/Footer.vue';

  export default {
    name: 'Index',
    components: {
    Navbar,
    Hero,
    About,
    Skills,
    Projects,
    Experience,
    Contact,
    FooterVue
  },
}

</script>
