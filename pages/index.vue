<template>
  <div class="container">
    <!-- Navbar and Footer can be moved to a global layout if used across pages -->
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
  /**
   * Optimized imports with lazy-loading for performance.
   */
  export default {
    name: "Index",
    components: {
      Navbar: () => import("@/components/Navbar.vue"),
      Hero: () => import("@/components/Hero.vue"),
      About: () => import("@/components/About.vue"),
      Skills: () => import("@/components/newSkills.vue"),
      Projects: () => import("@/components/projects.vue"),
      Experience: () => import("@/components/newExperience.vue"),
      Contact: () => import("@/components/Contact.vue"),
      FooterVue: () => import("@/components/Footer.vue"),
    },
  };
</script>
