<template>
    <c-flex class="skills-container" flexDirection="row" flex-wrap="wrap" h="max-content" justify="center" overflow="hidden">
        <c-box class="category" v-for="(items, category) in data" :key="category" h="500px" w="450px" borderWidth="2px" rounded="lg" overflow="hidden" shadow="md" m="5" bg="rgb(256,256,256,0.4)" p="5">
            <c-text class="category-title" font-size="3xl" font-weight="semibold" textAlign="center">{{ category }}</c-text>
            <c-list class="category-list" spacing="2" ml="5" mt="2">
                <c-list-item v-for="item in items" :key="item" font-size="xl" font-weight="700">
                    <c-list-icon icon="arrow-forward" color="black" />
                    {{ item }}
                </c-list-item>
            </c-list>
        </c-box>
    </c-flex>
</template>
  
<script>
    import { CBox, CText, CFlex, CList, CListItem } from '@chakra-ui/vue'
  
    export default {
        name: 'DataComponent',
        components: {
            CBox,
            CText,
            CFlex,
            CList,
            CListItem,
        },
        props: {
            data: {
                type: Object,
                required: true,
            },
        },
    }
</script>  