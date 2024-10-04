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
            w="100%"
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
                    mb={{ base: 1, lg: 8 }}
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
                        mb={[2,2,2,-16]}
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
                    {/* <YearTabs
                        selectedYear={selectedYear}
                        changeYear={changeYear}
                    /> */}
                </Flex>
            </Box>
            <Flex
                alignItems="stretch"
                gap={2}
                opacity={isChanging ? 0 : 1}
                transition="opacity 0.3s ease"
                direction={{ base: "column", lg: "row" }}
            >
                {/* {projects
                    .filter((project) => project.year === selectedYear)
                    .map((project) => ( */}
                        <ProjectPreview
                            key={projects[0].title}
                            variant={isLg ? "sm" : "mobileList"}
                            image={projects[0].image}
                            buttonAlign={isLg ? "left" : "right"}
                            title={projects[0].title}
                            tags={projects[0].tags}
                            description={projects[0].description}
                        />
                        <ProjectPreview
                            key={projects[1].title}
                            variant={isLg ? "sm" : "mobileList"}
                            image={projects[1].image}
                            buttonAlign={isLg ? "left" : "right"}
                            title={projects[1].title}
                            tags={projects[1].tags}
                            description={projects[1].description}
                        />
                        <ProjectPreview
                            key={projects[2].title}
                            variant={isLg ? "sm" : "mobileList"}
                            image={projects[2].image}
                            buttonAlign={isLg ? "left" : "right"}
                            title={projects[2].title}
                            tags={projects[2].tags}
                            description={projects[2].description}
                        />
                    {/* ))} */}
            </Flex>
        </Flex>
    );
}
