<template>
    <c-flex 
      w="100%"
      min-h="100vh"
      justify-content="center"
      flex-wrap="wrap"
      color="#101935"
      id="about"
      bg="#d9e3f2"
    >
      <!-- Section Title -->
      <c-flex 
        w="100%"
        my="10"
        justify="center"
        align="center"
      >
        <c-text 
          font-family="Quicksand, sans-serif"
          :font-size="{ base: '4xl', sm: '6xl'}"
          font-weight="700"
          h="max-content"
        >
          About Me
        </c-text>
      </c-flex>
  
      <c-flex 
        w="100%" 
        h="max-content"
        mb="10"
        justify="center"
        align="center"
      >
        <c-flex
          :mx="{ base: '0', xl: '8%'}"
          :justify="{ base: 'none', xl: 'space-between'}"
          :flex-wrap="{ base: 'wrap', xl: 'nowrap'}"
        >
          <!-- Text Section -->
          <c-flex 
            :w="{ base: '100%', xl: '60%'}"
            justify="center"
          >
            <c-flex
              :font-size="{ base: 'lg', sm: '2xl'}"
              font-weight="500"
              :px="{ base: '10', xl: '0'}"
            >
              <c-stack :spacing="5" text-align="justify">
                <!-- Paragraph 1 -->
                <c-text>
                  My fascination with computers started early, thanks to my dad—an electrical engineer—whose home office bristled with electronics and circuit diagrams.
                  Although I didn’t fully understand how everything worked, his passion for controlling industrial machines sparked my own curiosity. 
                  As a child, I spent hours tinkering with simple programs, poring over diagrams, and absorbing whatever I could.
                </c-text>
  
                <!-- Paragraph 2 -->
                <c-text>
                  I honed my skills by teaching myself HTML, CSS, and JavaScript through YouTube tutorials, creating basic websites and even dabbling in simple text-based games.
                  I also attended robotics camps, building LEGO robots that navigated mazes and avoided obstacles, and worked with Arduino microcontrollers in C.
                  These experiences made it clear I wanted a career in computer science—especially one that combined hands-on problem-solving with programming.
                </c-text>
  
                <!-- Paragraph 3 -->
                <c-text>
                  After exploring multiple areas in college, I discovered a love for both back-end development 
                  (crafting reliable APIs and data-processing pipelines) and front-end design 
                  (designing modern, user-friendly interfaces). 
                  With a B.S. in Computer Science and a minor in Computer Engineering from the University of Maine, 
                  I’m eager to continue growing as a full-stack developer. 
                  Whether it’s building robust systems or crafting intuitive interfaces, 
                  I’m excited to blend functionality with creativity as I embark on my professional journey.
                </c-text>
  
                <!-- Paragraph 4: Current Experience -->
                <c-text>
                  Currently, I’m a Software QA Analyst / Software Developer at WheresTheBus LLC, where I’ve sharpened my skills configuring containerized APIs 
                  using Flask and Celery in a Docker environment deployed on AWS EC2. 
                  Collaborating closely with customers, I gather requirements, mock up user interfaces in Figma, 
                  and work with our programming team to deliver reliable software solutions that meet real-world needs.
                </c-text>
              </c-stack>
            </c-flex>
          </c-flex>
  
          <!-- Image Section -->
          <c-flex
            flex-direction="column"
            :w="{ base: '100%', xl: '40%'}"
            :mt="{ base: '10', xl: '0'}"
            :ml="{ base: '0', xl: '20'}"
            justify="center"
            :align="{ base: 'center', xl: 'start'}"
          >
            <c-image
              rounded="full"
              :w="{ base: '50%', xl: '100%'}"
              alt="Headshot of Landon Thibodeau"
              :src="require('@/static/headshot.webp')"
              object-fit="cover"
              border="5px solid #101935"
            />
          </c-flex>
        </c-flex>
      </c-flex>
    </c-flex>
  </template>
  
  <script>
  import {
    CFlex,
    CText,
    CBox,
    CImage,
    CStack
  } from '@chakra-ui/vue'
  
  export default {
    name: 'About',
    components: {
      CFlex,
      CText,
      CBox,
      CImage,
      CStack
    }
  }
  </script>