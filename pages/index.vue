<template>
  <div class="container">
    <Navbar />
    <Hero />
    <About />
    <newSkills />
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
  import Skills from '../components/newSkills.vue';
  import Projects from '../components/newProjects.vue';
  import Footer from '../components/Footer.vue';
  import Experience from '../components/newExperience.vue';
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