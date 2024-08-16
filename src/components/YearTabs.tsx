import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { Text } from "./Text";

export function YearTabs({
    selectedYear,
    changeYear,
}: {
    selectedYear: string;
    changeYear: (year: string) => void;
}) {
    const isLg = useBreakpointValue({ base: false, lg: true });

    return (
        <Box w={{ base: "calc(100vw - 5rem)", lg: "fit-content" }}>
            <Flex
                mb={4}
                gap={6}
                justifyContent={{ base: "space-between", lg: "start" }}
            >
                <Text
                    variant={isLg ? "xl" : "md"}
                    color={selectedYear === "2024" ? "red" : "silver"}
                    cursor="pointer"
                    onClick={() => changeYear("2024")}
                    transition="color 0.3s ease"
                >
                    2024
                </Text>
                <Text
                    variant={isLg ? "xl" : "md"}
                    color={selectedYear === "2023" ? "red" : "silver"}
                    cursor="pointer"
                    onClick={() => changeYear("2023")}
                    transition="color 0.3s ease"
                >
                    2023
                </Text>
                <Text
                    variant={isLg ? "xl" : "md"}
                    color={selectedYear === "2022" ? "red" : "silver"}
                    cursor="pointer"
                    onClick={() => changeYear("2022")}
                    transition="color 0.3s ease"
                >
                    2022
                </Text>
                <Text
                    variant={isLg ? "xl" : "md"}
                    color={selectedYear === "2021" ? "red" : "silver"}
                    cursor="pointer"
                    onClick={() => changeYear("2021")}
                    transition="color 0.3s ease"
                >
                    2021
                </Text>
                <Text
                    variant={isLg ? "xl" : "md"}
                    color={selectedYear === "2020" ? "red" : "silver"}
                    cursor="pointer"
                    onClick={() => changeYear("2020")}
                    transition="color 0.3s ease"
                >
                    2020
                </Text>
                <Text
                    variant={isLg ? "xl" : "md"}
                    color={selectedYear === "2019" ? "red" : "silver"}
                    cursor="pointer"
                    onClick={() => changeYear("2019")}
                    transition="color 0.3s ease"
                >
                    2019
                </Text>
            </Flex>
            <Box w="100%" h="px" bgColor="silver">
                <Box
                    h="100%"
                    w={{ base: "2.1rem", lg: "2.8rem" }}
                    bgColor="red"
                    ml={{
                        base:
                            selectedYear === "2024"
                                ? 0
                                : selectedYear === "2023"
                                  ? "calc((2.1rem * 1) + (1.8rem * 1))"
                                  : selectedYear === "2022"
                                    ? "calc((2.15rem * 2) + (1.8rem * 2))"
                                    : selectedYear === "2021"
                                      ? "calc((2.15rem * 3) + (1.8rem * 3))"
                                      : selectedYear === "2020"
                                        ? "calc((2.2rem * 4) + (1.8rem * 4))"
                                        : selectedYear === "2019"
                                          ? "calc((2.15rem * 5) + (1.8rem * 5))"
                                          : 0,
                        lg:
                            selectedYear === "2024"
                                ? 0
                                : selectedYear === "2023"
                                  ? "calc((2.8rem * 1) + (1.5rem * 1))"
                                  : selectedYear === "2022"
                                    ? "calc((2.8rem * 2) + (1.5rem * 2))"
                                    : selectedYear === "2021"
                                      ? "calc((2.8rem * 3) + (1.5rem * 3))"
                                      : selectedYear === "2020"
                                        ? "calc((2.75rem * 4) + (1.5rem * 4))"
                                        : selectedYear === "2019"
                                          ? "calc((2.735rem * 5) + (1.5rem * 5))"
                                          : 0,
                    }}
                    transition="margin-left 1s ease"
                />
            </Box>
        </Box>
    );
}
