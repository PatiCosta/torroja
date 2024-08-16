import { Box, Flex, Icon, Image, useBreakpointValue } from "@chakra-ui/react";
import { HighlightHeading } from "../HighlightHeading";
import { YearTabs } from "../YearTabs";
import { useState } from "react";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { MoveLeft, MoveRight } from "lucide-react";
import { projects } from "@/data/projects";

export function Main() {
    const [selectedYear, setSelectedYear] = useState("2024");
    const [isChangingYear, setIsChangingYear] = useState(false);
    const [isChangingProject, setIsChangingProject] = useState(false);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const isLg = useBreakpointValue({ base: false, lg: true });

    const projectsOfYear = projects.filter(
        (project) => project.year === selectedYear,
    );

    const selectedProject = projectsOfYear[selectedProjectIndex];

    function changeYear(year: string) {
        setIsChangingYear(true);
        setTimeout(() => {
            setSelectedYear(year);
            setSelectedProjectIndex(0);
            setIsChangingYear(false);
        }, 200);
    }

    function changeProject(index: number) {
        setIsChangingProject(true);
        setTimeout(() => {
            setSelectedProjectIndex(index);
            setIsChangingProject(false);
        }, 200);
    }

    return (
        <Flex
            px={{ base: 10, lg: 32 }}
            pt={{ base: 12, lg: 20 }}
            pb={{ base: 12, lg: 32 }}
            gap={12}
            w="100vw"
            direction="column"
        >
            <Flex
                alignItems="end"
                justifyContent="space-between"
                direction={{ base: "column", lg: "row" }}
                gap={{ base: 6, lg: 0 }}
            >
                <HighlightHeading
                    variant={isLg ? "lg" : "sm"}
                    maxW={{ base: "fit-content", lg: "40rem" }}
                    textAlign={{ base: "center", lg: "start" }}
                >
                    Projetos verdadeiramente extraordinários
                </HighlightHeading>
                <YearTabs selectedYear={selectedYear} changeYear={changeYear} />
            </Flex>
            <Flex
                gap={{ base: 6, lg: 12 }}
                alignItems="stretch"
                opacity={isChangingYear ? 0 : 1}
                transition="opacity 0.3s ease"
                direction={{ base: "column-reverse", lg: "row" }}
            >
                <Flex
                    pb={{ base: 4, lg: 8 }}
                    alignItems="start"
                    gap={{ base: 1, lg: 2 }}
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
                    opacity={isChangingProject ? 0 : 1}
                    transition="opacity 0.3s ease"
                >
                    <Image
                        src={selectedProject.image}
                        maxH={{ base: "15rem", lg: "28rem" }}
                        alt="project"
                    />
                    <Image
                        src="/assets/img/unsplash3.jpg"
                        maxH={{ base: "15rem", lg: "28rem" }}
                        alt="project"
                    />
                    <Image
                        src="/assets/img/unsplash4.jpg"
                        maxH={{ base: "15rem", lg: "28rem" }}
                        alt="project"
                    />
                    <Image
                        src="/assets/img/unsplash5.jpg"
                        maxH={{ base: "15rem", lg: "28rem" }}
                        alt="project"
                    />
                    <Image
                        src="/assets/img/unsplash6.jpg"
                        maxH={{ base: "15rem", lg: "28rem" }}
                        alt="project"
                    />
                    <Image
                        src="/assets/img/unsplash7.jpg"
                        maxH={{ base: "15rem", lg: "28rem" }}
                        alt="project"
                    />
                    <Image
                        src="/assets/img/unsplash8.jpg"
                        maxH={{ base: "15rem", lg: "28rem" }}
                        alt="project"
                    />
                </Flex>
                <Flex
                    direction="column"
                    alignItems={{ base: "center", lg: "start" }}
                    justifyContent="space-between"
                    pt={{ base: 0, lg: 12 }}
                >
                    <Box minW={{ base: "fit-content", lg: "24rem" }}>
                        <Heading
                            variant={isLg ? "lg" : "md"}
                            textAlign={{ base: "center", lg: "start" }}
                        >
                            {selectedProject.title}
                        </Heading>
                        <Flex
                            mt={{ base: 4, lg: 8 }}
                            mb={{ base: 6, lg: 8 }}
                            alignItems="center"
                            justifyContent={{ base: "center", lg: "start" }}
                            gap={3}
                        >
                            {selectedProject.tags.map((tag) => (
                                <Box
                                    key={tag}
                                    px={2}
                                    py={1}
                                    bgColor="#ef444430"
                                    borderRadius="sm"
                                >
                                    <Text
                                        variant={isLg ? "md" : "sm"}
                                        color="silver"
                                    >
                                        {tag}
                                    </Text>
                                </Box>
                            ))}
                        </Flex>
                        <Text
                            variant={isLg ? "lg" : "sm"}
                            textAlign={{ base: "center", lg: "start" }}
                        >
                            {selectedProject.description}
                        </Text>
                    </Box>
                    <Flex
                        w="100%"
                        alignItems="end"
                        justifyContent="space-between"
                        direction={{ base: "row-reverse", lg: "row" }}
                        pt={{ base: 6, lg: 0 }}
                    >
                        <Flex alignItems="center" gap={4}>
                            <Icon
                                as={MoveLeft}
                                color="light"
                                h={{ base: 4, lg: 6 }}
                                w={{ base: 4, lg: 6 }}
                                cursor="pointer"
                                _hover={{
                                    color: "red",
                                    transition: "color 0.3s ease",
                                }}
                                onClick={() => {
                                    selectedProjectIndex === 0
                                        ? changeProject(
                                              projectsOfYear.length - 1,
                                          )
                                        : changeProject(
                                              selectedProjectIndex - 1,
                                          );
                                }}
                            />
                            <Icon
                                as={MoveRight}
                                color="light"
                                h={{ base: 4, lg: 6 }}
                                w={{ base: 4, lg: 6 }}
                                cursor="pointer"
                                _hover={{
                                    color: "red",
                                    transition: "color 0.3s ease",
                                }}
                                onClick={() => {
                                    selectedProjectIndex ===
                                    projectsOfYear.length - 1
                                        ? changeProject(0)
                                        : changeProject(
                                              selectedProjectIndex + 1,
                                          );
                                }}
                            />
                        </Flex>
                        <Flex alignItems="end">
                            <HighlightHeading variant={isLg ? "lg" : "sm"}>
                                0{selectedProjectIndex + 1}
                            </HighlightHeading>
                            <HighlightHeading
                                variant={isLg ? "sm" : "2xs"}
                                color="silver"
                            >
                                /0
                                {projectsOfYear.length}
                            </HighlightHeading>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}
