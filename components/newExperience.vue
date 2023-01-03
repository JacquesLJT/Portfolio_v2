<template>
    <c-flex
        id="experience"
        w="100%"
        :h="{ base: '100%', xl: '100vh'}"
        justify="center"
        flex-wrap="wrap"
        color="#101935"
        v-bind:style="{ 
            backgroundImage: 'url(' + require('@/assets/background.jpeg') + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed' 
        }"
    >
        <c-flex 
            w="100%"
            mt="10"
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
            >
                Experience
            </c-text>
        </c-flex>
        <c-flex
            :flex-direction="{ base: 'column', xl: 'row'}"
            align-items="stretch"
            :align-content="{ base: 'center', xl: 'none'}"
            :flex-wrap="{ base: 'wrap', xl: 'nowrap'}"
            w="100%"
            mt="10"
            mx="5%"
            height="max-content"
            mb="10"
        >
            <c-flex
                justify="center"
                flex-direction="column"
                bg="rgb(256,256,256,0.8)"
                rounded="lg"
                :width="{ base: '100%', md: '80%', xl: '27%'}"
                :ml="{ base: '0', xl: '2%'}"
                justify-content="start"
                color="black"
                p="5"
                :mb="{ base: '5', xl: '0'}"
                border="5px solid black"
            >
                <c-stack 
                    w="100%"
                    h="max-content"
                    :spacing="0" 
                    justify="center" 
                    align="center"
                    font-family="Quicksand, sans-serif"
                    :font-size="{ base: 'xl', sm: '2xl' }"
                    font-weight="700"
                >
                    <c-text>
                        University Capstone Project
                    </c-text>
                    <c-text>
                        University of Maine, Orono
                    </c-text>
                    <c-text>
                        Fall 2022 - Spring 2023
                    </c-text>
                </c-stack>
                <c-list 
                    w="100%"
                    h="max-content"
                    mt="5"
                    :font-size="{ base: 'xl', sm: '2xl' }"
                    font-weight="700"
                    spacing="3"
                >
                    <c-list-item>
                        <c-text>
                            <font-awesome-icon icon="fa-solid fa-check" />
                            Developed a frontend creature creation and viewing tool for a client's existing database of fantasy creatures
                        </c-text>
                    </c-list-item>
                    <c-list-item>
                        <c-text>
                            <font-awesome-icon icon="fa-solid fa-check" />
                            Used a CI/CD workflow to efficiently and effectively develop and deploy the product
                        </c-text>
                    </c-list-item>
                    <c-list-item>
                        <c-text>
                            <font-awesome-icon icon="fa-solid fa-check" />
                            Gained experience in communicating with a client and managing expectations
                        </c-text>
                    </c-list-item>
                </c-list>
            </c-flex>
            <c-flex
                justify="center"
                flex-direction="column"
                bg="rgb(256,256,256,0.8)"
                rounded="lg"
                :width="{ base: '100%', md: '80%', xl: '26%'}"
                :mx="{ base: '0', xl: '8%'}"
                :my="{ base: '5', xl: '0'}"
                justify-content="start"
                color="black"
                p="5"
                border="5px solid black"
            >
                <c-stack 
                    w="100%"
                    h="max-content"
                    :spacing="0" 
                    justify="center" 
                    align="center"
                    font-family="Quicksand, sans-serif"
                    :font-size="{ base: 'xl', sm: '2xl' }"
                    font-weight="700"
                >
                    <c-text>
                        Greenhouse Retail Associate
                    </c-text>
                    <c-text>
                        Estabrook's, Yarmouth, ME
                    </c-text>
                    <c-text>
                        May 2021 - August 2021
                    </c-text>
                </c-stack>
                <c-list 
                    w="100%"
                    h="max-content"
                    mt="5"
                    :font-size="{ base: 'xl', sm: '2xl' }"
                    font-weight="700"
                    spacing="3"
                >
                    <c-list-item>
                        <c-text>
                            <font-awesome-icon icon="fa-solid fa-check" />
                            Assisted customers with plant selection and care
                        </c-text>
                    </c-list-item>
                    <c-list-item>
                        <c-text>
                            <font-awesome-icon icon="fa-solid fa-check" />
                            Maintained clean and organized greenhouses
                        </c-text>
                    </c-list-item>
                    <c-list-item>
                        <c-text>
                            <font-awesome-icon icon="fa-solid fa-check" />
                            Gained experience in customer service and plant care
                        </c-text>
                    </c-list-item>
                </c-list>
            </c-flex>
            <c-flex
                justify="center"
                flex-direction="column"
                bg="rgb(256,256,256,0.8)"
                rounded="lg"
                :width="{ base: '100%', md: '80%', xl: '27%'}"
                :my="{ base: '5', xl: '0'}"
                justify-content="start"
                color="black"
                p="5"
                border="5px solid black"
            >
                <c-stack 
                    w="100%"
                    h="max-content"
                    :spacing="0" 
                    justify="center" 
                    align="center"
                    :font-size="{ base: 'xl', sm: '2xl' }"
                    font-weight="700"
                    font-family="Quicksand, sans-serif"
                >
                    <c-text justify="center" align="center">
                        General Merchadise Team Member
                    </c-text>
                    <c-text>
                        Target, Topsham, ME
                    </c-text>
                    <c-text justify="center" align=center>
                        September 2017 - January 2021
                    </c-text>
                </c-stack>
                <c-list 
                    display="flex"
                    flex-direction="column"
                    align-items="stretch"
                    w="100%"
                    h="max-content"
                    mt="5"
                    :font-size="{ base: 'xl', sm: '2xl' }"
                    font-weight="700"
                    spacing="3"
                >
                    <c-list-item>
                        <c-text>
                            <font-awesome-icon icon="fa-solid fa-check" />
                            Assisted customers with product selection and checkout
                        </c-text>
                    </c-list-item>
                    <c-list-item>
                        <c-text>
                            <font-awesome-icon icon="fa-solid fa-check" />
                            Maintained a clean and organized store
                        </c-text>
                    </c-list-item>
                    <c-list-item>
                        <c-text>
                            <font-awesome-icon icon="fa-solid fa-check" />
                            Gained experience in customer service and retail
                        </c-text>
                    </c-list-item>
                </c-list>
            </c-flex>
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

    export default {
        name: 'Experience',
        components: {
            CFlex,
            CText,
            CStack,
            CList,
            CListItem,
            CListIcon,
        }
    }
</script>

<style>

</style>