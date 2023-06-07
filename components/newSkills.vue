<template>
    <c-flex
        id="skills"
        flexDirection="column"
        w="100%"
        minH="100vh"
        alignItems="center"
        color="#101935"
        v-bind:style="{ 
            backgroundImage: 'url(' + require('@/static/skills_background.webp') + ')',
            backgroundSize: 'cover', 
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed' 
            }"
    >
        <c-text
            font-family="Quicksand, sans-serif"
            :font-size="{ base: '4xl', sm: '6xl' }"
            font-weight="700"
            color="#D9E3F2"
            h="max-content"
            textAlign="center"
            m="5%"
        >
            Skills
        </c-text>
        <c-flex
            flex="1"
            w="100%"
            justify="center"
            pb="10%"
        >
            <SkillsComponent :data="skillsData"/>
        </c-flex>
    </c-flex>
</template>

<script>
    import {
        CFlex,
        CText,
        CImage,
        CList,
        CListItem,
        CIcon,
    } from '@chakra-ui/vue'

    import SkillsComponent from './SkillsComponent.vue';
    import skillsData from '~/assets/skills.json'

    export default {
        name: 'Skills',
        components: {
            CFlex,
            CText,
            CImage,
            CList,
            CListItem,
            CIcon,
            SkillsComponent,
        },
        data() {
            return {
                skillsData,
            }
        },
    }
</script>