import { Box, Flex, Grid, Image, useBreakpointValue } from "@chakra-ui/react";
import { ProjectPreview } from "../ProjectPreview";
import { HighlightHeading } from "../HighlightHeading";
import { Text } from "../Text";

export function Advantages() {
    const isLg = useBreakpointValue({ base: false, lg: true });

    return (
        <Flex
            direction={{ base: "column-reverse", lg: "row" }}
            w="100%"
            alignItems="stretch"
            px={{ base: 10, lg: 32 }}
            justifyContent="space-between"
            py={{ base: 12, lg: 20 }}
            position="relative"
        >
            {!isLg && (
                <Grid
                    templateColumns={{ base: "1fr 1fr", lg: "1fr 1fr 1fr" }}
                    columnGap={10}
                    rowGap={6}
                    mt={8}
                >
                    <Flex
                        direction={{ base: "row", lg: "column" }}
                        alignItems="center"
                        justifyContent={{ base: "start", lg: "center" }}
                        gap={4}
                    >
                        <Image
                            src="/assets/img/shape1.svg"
                            alt="shape 1"
                            h="2.5rem"
                            w="2.5rem"
                        />
                        <Text
                            variant={isLg ? "lg" : "sm"}
                            textAlign={{ base: "start", lg: "center" }}
                        >
                            Abordagem integrada
                        </Text>
                    </Flex>
                    <Flex
                        direction={{ base: "row", lg: "column" }}
                        alignItems="center"
                        justifyContent={{ base: "start", lg: "center" }}
                        gap={4}
                    >
                        <Image
                            src="/assets/img/shape3.svg"
                            alt="shape 3"
                            h="2.5rem"
                            w="2.5rem"
                        />
                        <Text
                            variant={isLg ? "lg" : "sm"}
                            textAlign={{ base: "start", lg: "center" }}
                        >
                            Coordenação Eficiente
                        </Text>
                    </Flex>
                    <Flex
                        direction={{ base: "row", lg: "column" }}
                        alignItems="center"
                        justifyContent={{ base: "start", lg: "center" }}
                        gap={4}
                    >
                        <Image
                            src="/assets/img/shape2.svg"
                            alt="shape 2"
                            h="2.5rem"
                            w="2.5rem"
                        />
                        <Text
                            variant={isLg ? "lg" : "sm"}
                            textAlign={{ base: "start", lg: "center" }}
                        >
                            Soluções Personalizadas
                        </Text>
                    </Flex>
                    <Flex
                        direction={{ base: "row", lg: "column" }}
                        alignItems="center"
                        justifyContent={{ base: "start", lg: "center" }}
                        gap={4}
                    >
                        <Image
                            src="/assets/img/shape4.svg"
                            alt="shape 4"
                            h="2.5rem"
                            w="2.5rem"
                        />
                        <Text
                            variant={isLg ? "lg" : "sm"}
                            textAlign={{ base: "start", lg: "center" }}
                        >
                            Abordagem integrada
                        </Text>
                    </Flex>
                    <Flex
                        direction={{ base: "row", lg: "column" }}
                        alignItems="center"
                        justifyContent={{ base: "start", lg: "center" }}
                        gap={4}
                    >
                        <Image
                            src="/assets/img/shape5.svg"
                            alt="shape 5"
                            h="2.5rem"
                            w="2.5rem"
                        />
                        <Text
                            variant={isLg ? "lg" : "sm"}
                            textAlign={{ base: "start", lg: "center" }}
                        >
                            Coordenação Eficiente
                        </Text>
                    </Flex>
                    <Flex
                        direction={{ base: "row", lg: "column" }}
                        alignItems="center"
                        justifyContent={{ base: "start", lg: "center" }}
                        gap={4}
                    >
                        <Image
                            src="/assets/img/shape6.svg"
                            alt="shape 6"
                            h="2.5rem"
                            w="2.5rem"
                        />
                        <Text
                            variant={isLg ? "lg" : "sm"}
                            textAlign={{ base: "start", lg: "center" }}
                        >
                            Soluções Personalizadas
                        </Text>
                    </Flex>
                </Grid>
            )}
            <ProjectPreview
                variant={isLg? "md": "mobileList"}
                image="/assets/img/atalena-1.jpg"
                buttonAlign="left"
                title="Projeto arquitetônico e estrutural"
                tags={["#Arquitetônico", "#StudioTorroja"]}
                description="A estrutura metálica oferece diversas vantagens como durabilidade, resistência e  design personalizado. Sustentável e de baixa manutenção,  permite construir vãos livres maiores, criando espaços amplos e flexíveis."
            />
            <Flex
                direction={{ base: "row", lg: "column" }}
                gap={{ base: 0, lg: 6 }}
                px={{ base: 6, lg: 12 }}
                py={{ base: 6, lg: 8 }}
                border="0.5px solid silver"
                borderRadius="sm"
                _before={{
                    content: '""',
                    h: "100%",
                    w: "100%",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    borderRadius: "sm",
                    bgColor: isLg ? "eerie" : "light",
                    opacity: isLg ? 0.6 : 0.1,
                    zIndex: -1,
                }}
                backdropFilter="blur(12px)"
                position={{ base: "inherit", lg: "absolute" }}
                left={{ base: "auto", lg: "calc((100vw/2) - 10rem)" }}
                top={{ base: "auto", lg: "50%" }}
                transform={{ base: "auto", lg: "translateY(-50%)" }}
                zIndex={3}
                mt={{ base: 6, lg: 0 }}
                mb={{ base: 8, lg: 0 }}
                justifyContent={{ base: "space-between", lg: "center" }}
            >
                <Box>
                    <HighlightHeading
                        variant={isLg ? "lg" : "sm"}
                        textAlign={{ base: "center", lg: "start" }}
                    >
                        83
                    </HighlightHeading>
                    <Text
                        variant={isLg ? "lg" : "sm"}
                        textAlign={{ base: "center", lg: "start" }}
                    >
                        projetos
                    </Text>
                </Box>
                <Box>
                    <HighlightHeading
                        variant={isLg ? "lg" : "sm"}
                        textAlign={{ base: "center", lg: "start" }}
                    >
                        +976 mil
                    </HighlightHeading>
                    <Text
                        variant={isLg ? "lg" : "sm"}
                        textAlign={{ base: "center", lg: "start" }}
                    >
                        m² projetados
                    </Text>
                </Box>
                <Box>
                    <HighlightHeading
                        variant={isLg ? "lg" : "sm"}
                        textAlign={{ base: "center", lg: "start" }}
                    >
                        100%
                    </HighlightHeading>
                    <Text
                        variant={isLg ? "lg" : "sm"}
                        textAlign={{ base: "center", lg: "start" }}
                    >
                        de satisfação
                    </Text>
                </Box>
            </Flex>
            <Flex
                h={{ base: "initial", lg: "30rem" }}
                direction="column"
                alignItems={{ base: "center", lg: "start" }}
                justifyContent="space-between"
                maxW={{ base: "inherit", lg: "26rem" }}
                gap={{ base: 4, lg: 0 }}
            >
                <Box>
                    <HighlightHeading
                        variant={isLg ? "lg" : "sm"}
                        textAlign={{ base: "center", lg: "start" }}
                    >
                        Vantagens
                    </HighlightHeading>
                    <Text
                        variant={isLg ? "lg" : "sm"}
                        mt={4}
                        textAlign={{ base: "center", lg: "start" }}
                    >
                        Proporcionamos uma experiência única e completa no
                        desenvolvimento de projetos que atendam às necessidades
                        e superem as expectativas.{" "}
                    </Text>
                </Box>
                <Grid
                    display={{ base: "none", lg: "grid" }}
                    templateColumns="1fr 1fr 1fr"
                    columnGap={10}
                    rowGap={6}
                >
                    <Flex
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        gap={4}
                    >
                        <Image src="/assets/img/shape1.svg" alt="shape 1" />
                        <Text variant="lg" textAlign="center">
                            Abordagem integrada
                        </Text>
                    </Flex>
                    <Flex
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        gap={4}
                    >
                        <Image src="/assets/img/shape3.svg" alt="shape 3" />
                        <Text variant="lg" textAlign="center">
                            Coordenação Eficiente
                        </Text>
                    </Flex>
                    <Flex
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        gap={4}
                    >
                        <Image src="/assets/img/shape2.svg" alt="shape 2" />
                        <Text variant="lg" textAlign="center">
                            Soluções Personalizadas
                        </Text>
                    </Flex>
                    <Flex
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        gap={4}
                    >
                        <Image src="/assets/img/shape4.svg" alt="shape 4" />
                        <Text variant="lg" textAlign="center">
                            Abordagem integrada
                        </Text>
                    </Flex>
                    <Flex
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        gap={4}
                    >
                        <Image src="/assets/img/shape5.svg" alt="shape 5" />
                        <Text variant="lg" textAlign="center">
                            Coordenação Eficiente
                        </Text>
                    </Flex>
                    <Flex
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        gap={4}
                    >
                        <Image src="/assets/img/shape6.svg" alt="shape 6" />
                        <Text variant="lg" textAlign="center">
                            Soluções Personalizadas
                        </Text>
                    </Flex>
                </Grid>
            </Flex>
        </Flex>
    );
}
