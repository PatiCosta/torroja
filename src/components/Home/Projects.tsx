import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { ProjectPreview } from "../ProjectPreview";
import { Text } from "../Text";
import { HighlightHeading } from "../HighlightHeading";
import { Button } from "../Button";
import { AlignJustify } from "lucide-react";
import { useState } from "react";
import { projects } from "@/data/projects";
import { YearTabs } from "../YearTabs";

export function Projects() {
    const [selectedYear, setSelectedYear] = useState("2024");
    const [isChanging, setIsChanging] = useState(false);
    const isLg = useBreakpointValue({ base: false, lg: true });

    function changeYear(year: string) {
        setIsChanging(true);
        setTimeout(() => {
            setSelectedYear(year);
            setIsChanging(false);
        }, 200);
    }

    return (
        <Flex
            w="100vw"
            px={{ base: 10, lg: 32 }}
            py={{ base: 12, lg: 20 }}
            direction="column"
            gap={{ base: 8, lg: 12 }}
            alignItems="stretch"
        >
            <Box>
                <Flex
                    alignItems="end"
                    justifyContent="space-between"
                    mb={{ base: 6, lg: 8 }}
                    direction={{ base: "column-reverse", lg: "row" }}
                    gap={{ base: 4, lg: 0 }}
                >
                    <Text
                        variant={isLg ? "lg" : "sm"}
                        maxW="34rem"
                        textAlign={{ base: "center", lg: "start" }}
                    >
                        Nosso portfólio reflete o compromisso que temos em
                        entregar resultados excepcionais aos nossos clientes.
                    </Text>
                    <HighlightHeading
                        variant={isLg ? "lg" : "sm"}
                        maxW="24rem"
                        textAlign={{ base: "center", lg: "start" }}
                    >
                        Principais projetos do nosso portfólio
                    </HighlightHeading>
                </Flex>
                <Flex
                    alignItems={{ base: "center", lg: "end" }}
                    justifyContent={{ base: "center", lg: "space-between" }}
                >
                    {isLg && (
                        <Button
                            variant="outline"
                            text="Todos os projetos"
                            icon={AlignJustify}
                        />
                    )}
                    <YearTabs
                        selectedYear={selectedYear}
                        changeYear={changeYear}
                    />
                </Flex>
            </Box>
            <Flex
                alignItems="stretch"
                gap={2}
                opacity={isChanging ? 0 : 1}
                transition="opacity 0.3s ease"
                direction={{ base: "column", lg: "row" }}
            >
                {projects
                    .filter((project) => project.year === selectedYear)
                    .map((project) => (
                        <ProjectPreview
                            key={project.title}
                            variant={isLg ? "sm" : "mobileList"}
                            image={project.image}
                            buttonAlign={isLg ? "left" : "right"}
                            title={project.title}
                            tags={project.tags}
                            description={project.description}
                        />
                    ))}
            </Flex>
        </Flex>
    );
}
