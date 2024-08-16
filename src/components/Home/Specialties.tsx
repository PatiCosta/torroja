import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    useBreakpointValue,
} from "@chakra-ui/react";
import { ProjectPreview } from "../ProjectPreview";
import { HighlightHeading } from "../HighlightHeading";
import { Subtitle } from "../Subtitle";
import { Text } from "../Text";
import { useState } from "react";

export function Specialties() {
    const [openedSpecialty, setOpenedSpecialty] = useState(0);
    const isLg = useBreakpointValue({ base: false, lg: true });

    return (
        <Flex
            direction={{ base: "column", lg: "row" }}
            w="100vw"
            alignItems="stretch"
            px={{ base: 10, lg: 32 }}
            justifyContent="space-between"
            maxH={{ base: "auto", lg: "30rem" }}
            overflow="hidden"
        >
            <Flex
                direction="column"
                gap={{ base: 4, lg: 12 }}
                alignItems={{ base: "center", lg: "start" }}
                mb={{ base: 6, lg: 0 }}
            >
                <HighlightHeading
                    variant={isLg ? "lg" : "sm"}
                    textAlign={{ base: "center", lg: "start" }}
                >
                    O que projetamos
                </HighlightHeading>
                <Accordion
                    maxW={{ base: "auto", lg: "30rem" }}
                    defaultIndex={0}
                    index={openedSpecialty}
                >
                    <AccordionItem
                        borderTop={0}
                        borderBottom="1px solid"
                        borderColor="silver"
                    >
                        <AccordionButton
                            py={4}
                            onClick={() => setOpenedSpecialty(0)}
                            px={{ base: 6, lg: 4 }}
                        >
                            <Subtitle
                                variant={isLg ? "xl" : "md"}
                                flex="1"
                                textAlign="left"
                            >
                                Estruturas metálicas
                            </Subtitle>
                            <Box px={4}>
                                <Box position="relative">
                                    <Box
                                        h="1px"
                                        w={{ base: 3, lg: 4 }}
                                        bgColor="silver"
                                        position="absolute"
                                        top="calc(50% - 1px)"
                                        transition="all 0.3s ease"
                                        transform={
                                            openedSpecialty !== 0
                                                ? "rotate(-90deg)"
                                                : ""
                                        }
                                    />
                                    <Box
                                        h="1px"
                                        w={{ base: 3, lg: 4 }}
                                        bgColor="silver"
                                        position="absolute"
                                        top="calc(50% - 1px)"
                                        transition="all 0.3s ease"
                                    />
                                </Box>
                            </Box>
                        </AccordionButton>
                        <AccordionPanel pb={4} px={{ base: 6, lg: 4 }}>
                            <Text variant={isLg ? "md" : "sm"}>
                                Nossos projetos de estruturas metálicas são
                                reconhecidos por sua versatilidade, resistência
                                e eficiência na construção de uma grande
                                variedade de edificações. Essas estruturas
                                proporcionam não apenas agilidade e redução de
                                custos, mas também a liberdade criativa para
                                desenvolver projetos inovadores, atendendo às
                                necessidades de cada cliente com excelência.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem
                        borderTop={0}
                        borderBottom="1px solid"
                        borderColor="silver"
                    >
                        <AccordionButton
                            py={4}
                            onClick={() => setOpenedSpecialty(1)}
                            px={{ base: 6, lg: 4 }}
                        >
                            <Subtitle
                                variant={isLg ? "xl" : "md"}
                                flex="1"
                                textAlign="left"
                            >
                                Estruturas de madeira
                            </Subtitle>
                            <Box px={4}>
                                <Box position="relative">
                                    <Box
                                        h="1px"
                                        w={{ base: 3, lg: 4 }}
                                        bgColor="silver"
                                        position="absolute"
                                        top="calc(50% - 1px)"
                                        transition="all 0.3s ease"
                                        transform={
                                            openedSpecialty !== 1
                                                ? "rotate(-90deg)"
                                                : ""
                                        }
                                    />
                                    <Box
                                        h="1px"
                                        w={{ base: 3, lg: 4 }}
                                        bgColor="silver"
                                        position="absolute"
                                        top="calc(50% - 1px)"
                                        transition="all 0.3s ease"
                                    />
                                </Box>
                            </Box>
                        </AccordionButton>
                        <AccordionPanel pb={4} px={{ base: 6, lg: 4 }}>
                            <Text variant={isLg ? "md" : "sm"}>
                                Nossos projetos de estruturas metálicas são
                                reconhecidos por sua versatilidade, resistência
                                e eficiência na construção de uma grande
                                variedade de edificações. Essas estruturas
                                proporcionam não apenas agilidade e redução de
                                custos, mas também a liberdade criativa para
                                desenvolver projetos inovadores, atendendo às
                                necessidades de cada cliente com excelência.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem
                        borderTop={0}
                        borderBottom="1px solid"
                        borderColor="silver"
                    >
                        <AccordionButton
                            py={4}
                            onClick={() => setOpenedSpecialty(2)}
                            px={{ base: 6, lg: 4 }}
                        >
                            <Subtitle
                                variant={isLg ? "xl" : "md"}
                                flex="1"
                                textAlign="left"
                            >
                                Projetos arquitetônicos
                            </Subtitle>
                            <Box px={4}>
                                <Box position="relative">
                                    <Box
                                        h="1px"
                                        w={{ base: 3, lg: 4 }}
                                        bgColor="silver"
                                        position="absolute"
                                        top="calc(50% - 1px)"
                                        transition="all 0.3s ease"
                                        transform={
                                            openedSpecialty !== 2
                                                ? "rotate(-90deg)"
                                                : ""
                                        }
                                    />
                                    <Box
                                        h="1px"
                                        w={{ base: 3, lg: 4 }}
                                        bgColor="silver"
                                        position="absolute"
                                        top="calc(50% - 1px)"
                                        transition="all 0.3s ease"
                                    />
                                </Box>
                            </Box>
                        </AccordionButton>
                        <AccordionPanel pb={4} px={{ base: 6, lg: 4 }}>
                            <Text variant={isLg ? "md" : "sm"}>
                                Nossos projetos de estruturas metálicas são
                                reconhecidos por sua versatilidade, resistência
                                e eficiência na construção de uma grande
                                variedade de edificações. Essas estruturas
                                proporcionam não apenas agilidade e redução de
                                custos, mas também a liberdade criativa para
                                desenvolver projetos inovadores, atendendo às
                                necessidades de cada cliente com excelência.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Flex>
            <ProjectPreview
                variant="md"
                image="/assets/img/unsplash10.jpg"
                buttonAlign="right"
                title="Nome do projeto"
                tags={["tag 1", "tag 2"]}
                description="Lorem ipsum dolor sit amet consectetur. Leo pretium volutpat tortor nibh placerat. Scelerisque eu pulvinar id eros tristique dolor amet habitasse vestibulum. Convallis arcu fusce viverra turpis."
            />
        </Flex>
    );
}
