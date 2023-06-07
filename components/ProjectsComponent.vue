<template>
    <c-box class="containter" alignItems="center" justify="center" mb="5%">
        <c-text class="title" :fontSize="{ base: '3xl', sm: '4xl' }" font-family="Quicksand, sans-serif" fontWeight="bold" mb="4" text-align="center">
            {{ project.title }}
        </c-text>
        <c-flex :flex-direction="{ base: 'column', xl: 'row' }">
            <c-box flex="1" display="flex" align-items="start" justifyContent="center" mx="2%">
                <c-image :src="project.image" :alt="project.title" box-shadow="6px 6px #101935" h="max-content" w="max-content" rounded="lg" overflow="hidden"/>
            </c-box>
            <c-box flex="1" d="flex" flex-direction="column" overflow="hidden" ml="2%" mr="4%">
                <TransitionGroup tag="div" name="list">
                    <!-- Loops through all the paragraphs in the description array -->
                    <c-text v-for = "(paragraph, index) in project.description" :key="paragraph" :font-size="{ base: 'lg', sm: '2xl' }" fontWeight="500" textAlign="justify" v-if="index < 2 || showAll" mt="2%" :data-index="index" :style="paragraphStyles[index]">
                        {{ paragraph }}
                    </c-text>
                </TransitionGroup>
                <!-- Button to show more text -->
                <c-button class="show-more" v-if = "!showAll && project.description.length > 2" @click="showAll = true" w="max-content" mt="2%">Show More</c-button>
                <!-- Button to show less text -->
                <c-button class="show-less" v-if = "showAll" @click="showAll = false" w="max-content" mt="2%">Show Less</c-button>
                <!-- GitHub Button -->
                <c-flex justify="center" mt="auto">
                    <c-link class="github-link" :href="project.link" is-external v-if="project.link" px="4" py="2" bg="#C6D5EB" color="#101935" borderWidth="2px" borderColor="#101935" rounded="md">
                        View on GitHub
                        <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" />
                    </c-link>
                </c-flex>
            </c-box>
        </c-flex>
    </c-box>
</template>
  
<script>
    import { CBox, CFlex, CImage, CText, CLink, CIcon } from '@chakra-ui/vue';
    
    export default {
        name: 'ProjectsComponent',
        components: {
            CBox,
            CFlex,
            CImage,
            CText,
            CLink,
            CIcon,
        },
        props: {
            project: {
                type: Object,
                required: true,
            },
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
    .list-enter-active, .list-leave-active {
    transition: all 1s;
    transition-delay: calc(var(--index) * 0.2s); /* Adjust the multiplier as needed */
    }
    .list-enter, .list-leave-to {
    transform: translateX(100%);
    }
    .github-link, .show-more, .show-less {
        transform: translateY(-10px);
        box-shadow: 6px 6px #101935;
        transition: box-shadow 0.3s ease-in-out
    }
    .github-link:hover, .show-more:hover, .show-less:hover {
        box-shadow: 3px 3px #101935;
    }
    .github-link:active, .show-more:active, .show-less:active {
        transform: translateY(-6px);
    }
    .show-more, .show-less {
        background-color: #C6D5EB;
        color: #101935;
        border-width: 2px;
        border-color: #101935;
    }
</style>