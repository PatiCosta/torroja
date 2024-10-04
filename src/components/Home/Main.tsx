import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { HighlightHeading } from "../HighlightHeading";
import { Text } from "../Text";

export function Main() {
    const isLg = useBreakpointValue({ base: false, lg: true });
    return (
        <Box py={{ base: 12, lg: 20 }} px={{ base: 10, lg: 32 }} w="100%">
            <Flex
                direction={{ base: "column", lg: "row" }}
                alignItems={{ base: "center", lg: "end" }}
                justifyContent={{ base: "center", lg: "space-between" }}
                w="100%"
                gap={{ base: 4, lg: 0 }}
            >
                <HighlightHeading
                    maxW="32rem"
                    variant={isLg ? "lg" : "md"}
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
                    src="/assets/img/altalena-1.png"
                    h={{ base: "16rem", lg: "24rem" }}
                    objectFit={'cover'}
                    alt="project"
                />
                <Image
                    src="/assets/img/solar-1.jpg"
                    h={{ base: "16rem", lg: "24rem" }}
                    objectFit={'cover'}
                    alt="project"
                />
                <Image
                    src="/assets/img/aframe-1.png"
                    h={{ base: "16rem", lg: "24rem" }}
                    objectFit={'cover'}
                    alt="project"
                />
                <Image
                    src="/assets/img/reserva-3.jpeg"
                    h={{ base: "16rem", lg: "24rem" }}
                    objectFit={'cover'}
                    alt="project"
                />
                <Image
                    src="/assets/img/reserva-4.jpeg"
                    h={{ base: "16rem", lg: "24rem" }}
                    objectFit={'cover'}
                    alt="project"
                />
                <Image
                    src="/assets/img/altalena-2.png"
                    h={{ base: "16rem", lg: "24rem" }}
                    objectFit={'cover'}
                    alt="project"
                />
                <Image
                    src="/assets/img/solar-2.jpg"
                    h={{ base: "16rem", lg: "24rem" }}
                    objectFit={'cover'}
                    alt="project"
                />
            </Flex>
        </Box>
    );
}
