<template>
    <c-box
      max-w="sm"
      border-width="1px"
      rounded="lg"
      overflow="hidden"
      m="5"
      bg="white"
      p="5"
    >
        <c-flex align="center" bg="gray.100" p="4" rounded="lg">
            <c-avatar :src=cert.certificateImg :alt="cert.certificateName" size="lg"/>
            <c-box ml="4">
                <c-text font-size="xl" font-weight="semibold">{{ cert.certificateName }}</c-text>
            </c-box>
        </c-flex>
        <c-box p="6">
            <c-text>
                Issued by: {{ cert.certificateAuthority }}
            </c-text>
            <c-text>
                Issued on: {{ cert.issuedDate }}
            </c-text>
            <c-text>
                Certificate ID: {{ cert.certificateId }}
            </c-text>
            <c-link :href="cert.certificateUrl" is-external>
                View certificate
            </c-link>
      </c-box>
    </c-box>
  </template>
  
  <script>
    import { CBox, CAvatar, CText, CLink } from '@chakra-ui/vue'
    
    export default {
        name: 'CertificateComponent',
        components: {
        CBox,
        CAvatar,
        CText,
        CLink,
        },
        props: {
            cert: {
                type: Object,
                required: true,
            },
        },
    }
  </script>
  