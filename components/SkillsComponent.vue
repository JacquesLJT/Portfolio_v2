<template>
    <!-- 
      Use <c-flex> with alignItems="stretch" so that all boxes in the same row
      will have the same height as the tallest box in that row.
    -->
    <c-flex
      flexWrap="wrap"
      justify="center"
      gap="5"
      p="5"
      alignItems="stretch"
    >
      <!-- Loop through the categories in the data object -->
      <c-box
        v-for="(items, category) in data"
        :key="category"
        borderWidth="2px"
        rounded="lg"
        overflow="hidden"
        shadow="md"
        bg="whiteAlpha.400"
        p="5"
        flex="1"               
        :minW="{ base: 'calc(100% - 2rem)', md: '300px' }"
        :maxW="{ base: 'calc(100% - 2rem)', md: '400px' }"
        display="flex"
        flexDirection="column"
      >
        <c-heading
          as="h2"
          fontSize="3xl"
          fontWeight="semibold"
          textAlign="center"
          mb="4"
        >
          {{ category }}
        </c-heading>
  
        <c-list spacing="2" ml="5" mt="2" style="list-style-type: none;">
          <c-list-item
            v-for="item in items"
            :key="item"
            fontSize="xl"
            fontWeight="700"
          >
            <c-list-icon icon="arrow-forward" color="black" />
            {{ item }}
          </c-list-item>
        </c-list>
      </c-box>
    </c-flex>
  </template>
  
  <script>
  import {
    CBox,
    CFlex,
    CList,
    CListItem,
    CHeading,
    CListIcon
  } from '@chakra-ui/vue'
  
  export default {
    name: 'SkillsComponent',
    components: {
      CBox,
      CFlex,
      CList,
      CListItem,
      CHeading,
      CListIcon
    },
    props: {
      data: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any additional styling if desired. */
  </style>