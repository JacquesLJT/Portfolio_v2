<template>
    <c-box maxW="lg" :maxH="{ base: '3xl', xl: '2xl' }" borderWidth="1px" rounded="lg" overflow="hidden" shadow="md" m="5" bg="white" p="5">
      <c-flex alignItems="center" bg="gray.100" p="4" rounded="lg">
        <c-avatar :src="job.companyLogo" :alt="job.companyName" size="lg" />
        <c-box ml="4">
          <c-text fontSize="xl" fontWeight="semibold">{{ job.jobTitle }}</c-text>
          <c-text fontSize="md" fontWeight="bold" color="gray.500">{{ job.companyName }}</c-text>
          <c-text color="gray.600">{{ job.duration }}</c-text>
        </c-box>
      </c-flex>
      <c-box p="6">
        <c-text>{{ job.jobDescription }}</c-text>
        <c-text fontWeight="bold" mt="4">Your responsibilities:</c-text>
        <c-list styleType="disc" spacing="2" mt="2">
          <c-list-item v-for="(responsibility, index) in job.responsibilities" :key="index">
            {{ responsibility }}
          </c-list-item>
        </c-list>
      </c-box>
    </c-box>
  </template>
  
  <script>
    import { CBox, CText, CFlex, CAvatar, CList, CListItem } from '@chakra-ui/vue'

    export default {
      name: 'JobComponent',
      components: {
        CBox,
        CText,
        CFlex,
        CAvatar,
        CList,
        CListItem,
      },
      props: {
        job: {
          type: Object,
          required: true,
        },
      },
    }
  </script>
  