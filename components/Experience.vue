<template>
    <c-flex
        w="100%"
        justify-content="center"
        flex-wrap="wrap"
        bg="#FFEAEC"
        id="experience"
    >
        <c-flex
            m="5" 
            w="100vw" 
            justify="center"
        >
            <c-text font-family="Quicksand, sans-serif" fontSize="5xl" color="#982649" font-weight="700">
                Experience
            </c-text>
        </c-flex>
        <c-flex
            w="100vw" 
            justify="space-between"
            flex-wrap="wrap"
            ml="10"
            mr="10"
            mb="5"
            color="#FFECEA"
            fontSize="lg"
            font-weight="500"
        >
            <c-flex w="30vw" justify="center" flex-wrap="wrap" bg="#E56B6F" rounded="15" border="#101935 solid 4px">
                <c-stack :spacing="0" justify="center" align-items="center" :mt="5">
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
                <c-flex m="5">
                    <c-list>
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
            </c-flex>
            <c-flex w="30vw" justify="center" flex-wrap="wrap" bg="#E56B6F" rounded="15" border="#101935 solid 4px">
                <c-stack :spacing="0" justify="center" align-items="center">
                    <c-text>
                        Greenhouse Retail Sales
                    </c-text>
                    <c-text>
                        Estabrook's, Yarmouth, ME
                    </c-text>
                    <c-text>
                        May 2021 - August 2021
                    </c-text>
                </c-stack>
                <c-flex m="5">
                    <c-list>
                        <c-list-item>
                            <font-awesome-icon icon="fa-solid fa-check" />
                            Maintained health of plants and flowers
                        </c-list-item>
                        <c-list-item>
                            <font-awesome-icon icon="fa-solid fa-check" />
                            Kept the greenhouses clean, stocked, and organized
                        </c-list-item>
                        <c-list-item>
                            <font-awesome-icon icon="fa-solid fa-check" />
                            Communicated with customers to help them find the best plants for their needs
                        </c-list-item>
                    </c-list>
                </c-flex>
            </c-flex>
            <c-flex w="30vw" justify="center" flex-wrap="wrap" bg="#E56B6F" rounded="15" border="#101935 solid 4px">
                <c-stack :spacing="0" justify="center" align-items="center">
                    <c-text>
                        General Merchandise Team Member
                    </c-text>
                    <c-text>
                        Target, Topsham, ME
                    </c-text>
                    <c-text>
                        September 2017 - January 2021
                    </c-text>
                </c-stack>
                <c-flex m="5">
                    <c-list>
                        <c-list-item>
                            <font-awesome-icon icon="fa-solid fa-check" />
                            kept the store stocked, clean, and organized
                        </c-list-item>
                        <c-list-item>
                            <font-awesome-icon icon="fa-solid fa-check" />
                            Communicated with customers to help them find the best products for their needs
                        </c-list-item>
                        <c-list-item>
                            <font-awesome-icon icon="fa-solid fa-check" />
                            Modified workflow depending on the needs of the store
                        </c-list-item>
                    </c-list>
                </c-flex>
            </c-flex>
        </c-flex>
    </c-flex>
</template>

<script>
    import {
        CFlex,
        CText,
        CList,
        CListItem,
        CListIcon,
        CStack
    } from '@chakra-ui/vue'

    export default {
        name: 'Experience',
        components: {
            CFlex,
            CText,
            CList,
            CListItem,
            CListIcon,
            CStack
        }
    }
</script>