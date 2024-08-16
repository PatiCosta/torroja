import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { HighlightHeading } from "../HighlightHeading";
import { Text } from "../Text";

export function Main() {
    const isLg = useBreakpointValue({ base: false, lg: true });
    return (
        <Box py={{ base: 12, lg: 20 }} px={{ base: 10, lg: 32 }} w="100vw">
            <Flex
                direction={{ base: "column", lg: "row" }}
                alignItems={{ base: "center", lg: "end" }}
                justifyContent={{ base: "center", lg: "space-between" }}
                w="100%"
                gap={{ base: 4, lg: 0 }}
            >
                <HighlightHeading
                    maxW="32rem"
                    variant={isLg ? "lg" : "sm"}
                    textAlign={{ base: "center", lg: "start" }}
                >
                    Projetando espaços únicos onde cada detalhe importa
                </HighlightHeading>
                <Text
                    variant={isLg ? "lg" : "sm"}
                    maxW="24rem"
                    textAlign={{ base: "center", lg: "start" }}
                >
                    Onde cada traço cria um mundo de possibilidades, moldando os
                    espaços com criatividade e elegância.
                </Text>
            </Flex>
            <Flex
                pt={8}
                pb={{ base: 4, lg: 8 }}
                alignItems="start"
                gap={2}
                overflowX="scroll"
                scrollBehavior="smooth"
                sx={{
                    "&::-webkit-scrollbar": {
                        h: "2px",
                        borderRadius: "4px",
                        backgroundColor: "silver",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        borderRadius: "4px",
                        backgroundColor: "red",
                    },
                }}
            >
                <Image
                    src="/assets/img/unsplash2.jpg"
                    maxH={{ base: "12rem", lg: "24rem" }}
                    alt="project"
                />
                <Image
                    src="/assets/img/unsplash3.jpg"
                    maxH={{ base: "12rem", lg: "24rem" }}
                    alt="project"
                />
                <Image
                    src="/assets/img/unsplash4.jpg"
                    maxH={{ base: "12rem", lg: "24rem" }}
                    alt="project"
                />
                <Image
                    src="/assets/img/unsplash5.jpg"
                    maxH={{ base: "12rem", lg: "24rem" }}
                    alt="project"
                />
                <Image
                    src="/assets/img/unsplash6.jpg"
                    maxH={{ base: "12rem", lg: "24rem" }}
                    alt="project"
                />
                <Image
                    src="/assets/img/unsplash7.jpg"
                    maxH={{ base: "12rem", lg: "24rem" }}
                    alt="project"
                />
                <Image
                    src="/assets/img/unsplash8.jpg"
                    maxH={{ base: "12rem", lg: "24rem" }}
                    alt="project"
                />
            </Flex>
        </Box>
    );
}
