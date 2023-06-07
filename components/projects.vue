<template>
    <c-flex
        id="projects"
        w="100%"
        h="100%"
        bg="#D9E3F2"
        flex-wrap="wrap"
    >
        <c-flex
            w="100%"
            h="max-content"
            m="5%"
            justify="center"
            align-items="center"
            flex-wrap="wrap"
        >
            <c-text
                font-family="Quicksand, sans-serif"
                :font-size="{ base: '4xl', sm: '6xl' }"
                font-weight="700"
                color="#101935"
                h="max-content"
                justify="center"
                align-items="center"
            >
                Projects
            </c-text>
        </c-flex>
        <c-flex
            flex-direction="column"
            w="100%"
        >
            <ProjectsComponent v-for="project in projects" :project="project" :key="project.title"/>
        </c-flex>
    </c-flex>
</template>

<script>
    import { CButton, CFlex, CStack, CText, CImage } from "@chakra-ui/vue";
    import ProjectsComponent from "/components/ProjectsComponent.vue";
    import projectData from "/assets/projects.json"

    export default {
        name: "Projects",
        components: {
            CButton,
            CFlex,
            CStack,
            CText,
            CImage,
            ProjectsComponent,
        },
        data() {
            return {
                projects: projectData,
            }
        },
    };
</script>