<template>
    <c-flex
        id="experience"
        w="100%"
        h="max-content"
        justify="center"
        flex-wrap="wrap"
        color="#101935"
        v-bind:style="{ 
            backgroundImage: 'url(' + require('@/static/experience_background.webp') + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed' 
        }"
    >
        <c-flex 
            w="100%"
            justify="center"
            align="center"
            flex-wrap="wrap"
        >
            <c-text
                font-family="Quicksand, sans-serif"
                :font-size="{ base: '4xl', sm: '6xl' }"
                font-weight="700"
                color="#D9E3F2"
                h="max-content"
                justify="center"
                align-items="center"
                m="10"
            >
                Experience
            </c-text>
        </c-flex>
        <c-flex
            w="100%"
            justify="center"
            flex-wrap="wrap"
        >
            <JobComponent
                v-for="job in jobs"
                :key="job.jobTitle"
                :job="job"
            />
        </c-flex>
        <c-flex
            w="100%"
            justify="center"
            flex-wrap="wrap"
        >
            <c-text
                font-family="Quicksand, sans-serif"
                :font-size="{ base: '4xl', sm: '6xl' }"
                font-weight="700"
                color="#D9E3F2"
                h="max-content"
                justify="center"
                align-items="center"
                m="10"
            >
                Certifications
            </c-text>
        </c-flex>
        <c-flex
            w="100%"
            justify="center"
            flex-wrap="wrap"
            mb="20"
        >
            <CertificateComponent
                v-for="cert in certificates"
                :key="cert.certificateName"
                :cert="cert"
            />
        </c-flex>
    </c-flex>
</template>

<script>
    import {
        CFlex,
        CText,
        CStack,
        CList,
        CListItem,
        CListIcon,
    } from '@chakra-ui/vue'

    import JobComponent from '~/components/JobComponent.vue'
    import jobsData from '~/assets/jobs.json'
    import CertificateComponent from '~/components/CertificateComponent.vue'
    import certificatesData from '~/assets/certifications.json'

    export default {
        name: 'Experience',
        components: {
            CFlex,
            CText,
            CStack,
            CList,
            CListItem,
            CListIcon,
            JobComponent,
            CertificateComponent,
        },
        data() {
            return {
                jobs: jobsData,
                certificates: certificatesData,
            }
        },
    }
</script>