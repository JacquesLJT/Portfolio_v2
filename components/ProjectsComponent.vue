<template>
    <c-box class="container" alignItems="center" justify="center" mb="4%">
      <!-- Use <c-heading> to semantically mark this as a heading -->
      <c-heading
        :as="'h2'"
        :fontSize="{ base: '3xl', sm: '4xl' }"
        font-family="Quicksand, sans-serif"
        fontWeight="bold"
        mb="4"
        textAlign="center"
      >
        {{ project.title }}
      </c-heading>
  
      <c-flex :flex-direction="{ base: 'column', xl: 'row' }">
        <c-box flex="1" display="flex" alignItems="start" justifyContent="center" mx="2%">
          <!-- Make the image responsive with maxW="100%" -->
          <c-image
            :src="project.image"
            :alt="project.title"
            boxShadow="6px 6px #101935"
            h="auto"
            maxW="100%"
            rounded="lg"
            overflow="hidden"
          />
        </c-box>
  
        <c-box flex="1" :display="'flex'" flex-direction="column" overflow="hidden" ml="2%" mr="4%">
          <TransitionGroup tag="div" name="list">
            <!-- Loops through all the paragraphs in the description array -->
            <c-text
              v-for="(paragraph, index) in project.description"
              :key="paragraph"
              :font-size="{ base: 'lg', sm: '2xl' }"
              fontWeight="500"
              textAlign="justify"
              v-if="index < previewCount || showAll"
              mt="2%"
              :data-index="index"
              :style="paragraphStyles[index]"
            >
              {{ paragraph }}
            </c-text>
          </TransitionGroup>
  
          <!-- Button to show more text if not already showing all paragraphs -->
          <c-button
            v-if="!showAll && project.description.length > previewCount"
            @click="showAll = true"
            w="max-content"
            my="2%"
            :aria-label="'Show more project details'"
            bg="#C6D5EB"
            color="#101935"
            borderWidth="2px"
            borderColor="#101935"
            boxShadow="6px 6px #101935"
            :_hover="{ boxShadow: '3px 3px #101935' }"
            :_active="{ transform: 'translateY(-6px)' }"
          >
            Show More
          </c-button>
  
          <!-- Button to show less text if currently showing all paragraphs -->
          <c-button
            v-if="showAll"
            @click="showAll = false"
            w="max-content"
            my="2%"
            :aria-label="'Show fewer project details'"
            bg="#C6D5EB"
            color="#101935"
            borderWidth="2px"
            borderColor="#101935"
            boxShadow="6px 6px #101935"
            :_hover="{ boxShadow: '3px 3px #101935' }"
            :_active="{ transform: 'translateY(-6px)' }"
          >
            Show Less
          </c-button>
  
          <!-- GitHub Button -->
          <c-flex justify="center" mt="auto">
            <c-link
              v-if="project.link"
              :href="project.link"
              is-external
              px="4"
              py="2"
              my="2%"
              bg="#C6D5EB"
              color="#101935"
              borderWidth="2px"
              borderColor="#101935"
              rounded="md"
              boxShadow="6px 6px #101935"
              :_hover="{ boxShadow: '3px 3px #101935' }"
              :_active="{ transform: 'translateY(-6px)' }"
            >
              View on GitHub
              <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" />
            </c-link>
          </c-flex>
        </c-box>
      </c-flex>
    </c-box>
</template>
  
<script>
    import {
        CBox,
        CFlex,
        CImage,
        CText,
        CLink,
        CIcon,
        CHeading
    } from '@chakra-ui/vue'

    export default {
        name: 'ProjectsComponent',
        components: {
            CBox,
            CFlex,
            CImage,
            CText,
            CLink,
            CIcon,
            CHeading
        },
        props: {
            project: {
            type: Object,
            required: true,
            },
            // Optional prop to limit paragraphs shown initially
            previewCount: {
            type: Number,
            default: 2
            }
        },
        data() {
            return {
            showAll: false,
            };
        },
        computed: {
            paragraphStyles() {
            return this.project.description.map((_, index) => ({
                '--index': index
            }));
            }
        }
    };
</script>
  
<style scoped>
    /* Transition for paragraphs */
    .list-enter-active,
    .list-leave-active {
        transition: all 1s;
        transition-delay: calc(var(--index) * 0.2s);
    }

    .list-enter,
    .list-leave-to {
        transform: translateX(100%);
    }

    /* Removed the .show-more, .show-less classes, 
        as we moved that styling to Chakra props. */

    /* Container spelled correctly now */
</style>