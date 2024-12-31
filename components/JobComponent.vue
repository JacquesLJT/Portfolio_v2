<template>
  <c-box
    w="full"
    maxW="2xl"
    borderWidth="1px"
    rounded="lg"
    overflow="hidden"
    shadow="md"
    bg="white"
    mx="auto"
    my="4"
    p="4"
  >
    <c-flex alignItems="center" bg="gray.100" p="3" rounded="lg">
      <c-box
        boxSize="80px"
        rounded="lg"
        overflow="hidden"
      >
        <c-image
          :src="job.companyLogo"
          :alt="job.companyName"
          boxSize="100%"
          objectFit="contain"
        />
      </c-box>
      <c-box ml="4">
        <c-text fontSize="xl" fontWeight="semibold">
          {{ job.jobTitle }}
        </c-text>
        <c-text fontSize="md" fontWeight="bold" color="gray.500">
          {{ job.companyName }}
        </c-text>
        <c-text color="gray.600">
          {{ job.duration }}
        </c-text>
      </c-box>
    </c-flex>

    <c-box p="4">
      <c-text>
        {{ job.jobDescription }}
      </c-text>
      <c-text fontWeight="bold" mt="4">
        My Responsibilities:
      </c-text>
      <c-list styleType="disc" spacing="2" mt="2">
        <c-list-item
          v-for="(responsibility, index) in job.responsibilities"
          :key="index"
        >
          {{ responsibility }}
        </c-list-item>
      </c-list>
    </c-box>
  </c-box>
</template>

<script>
  import {
    CBox,
    CText,
    CFlex,
    CAvatar,
    CList,
    CListItem,
    CImage
  } from '@chakra-ui/vue'

  export default {
    name: 'JobComponent',
    components: {
      CBox,
      CText,
      CFlex,
      CAvatar,
      CList,
      CListItem,
      CImage
    },
    props: {
      job: {
        type: Object,
        required: true
      }
    }
  }
</script>
