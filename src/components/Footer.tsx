import { Box, Flex, Image, Link, useBreakpointValue } from "@chakra-ui/react";
import { Text } from "./Text";
import { PageButton } from "./PageButton";
import { SocialButtons } from "./SocialButtons";
import { useState } from "react";

export function Footer() {
    const isLg = useBreakpointValue({ base: false, lg: true });
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Flex
            w="100vw"
            px={{ base: 10, lg: 32 }}
            pt={{ base: 12, lg: 20 }}
            pb={8}
            direction="column"
            gap={{ base: 12, lg: 32 }}
        >
            <Box w="100%">
                <Flex alignItems="center" justifyContent="space-between">
                    <Image src="/assets/img/logo.svg" alt="logo" />
                    <Flex
                        direction="column"
                        alignItems={{ base: "end", lg: "start" }}
                        gap={2}
                    >
                        <PageButton path="/" text="Home" />
                        <PageButton path="/projects" text="Projetos" />
                    </Flex>
                </Flex>
                <Box
                    w="100%"
                    h="1px"
                    bgColor="silver"
                    mt={{ base: 4, lg: 7 }}
                    mb={{ base: 4, lg: 8 }}
                ></Box>
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    direction={{ base: "column", lg: "row" }}
                    gap={{ base: 4, lg: 0 }}
                >
                    <Text variant={isLg ? "lg" : "sm"}>
                        © Studio Torroja. All rights reserved.
                    </Text>
                    <SocialButtons />
                </Flex>
            </Box>
            <Flex alignItems="center" gap={1} justifyContent="center">
                <Text variant={isLg ? "lg" : "sm"}>feito com ♡ por</Text>
                <Box
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Link
                        fontWeight={400}
                        fontSize={{ base: ".8rem", lg: "1rem" }}
                        lineHeight="calc(1.6*1rem)"
                        href="https://awer.co"
                        target="_blank"
                        color="#f55f5e"
                        _hover={{
                            opacity: 0.9,
                            transition: "opacity 0.3s ease",
                        }}
                    >
                        awer.co
                    </Link>
                    <Box
                        w={isHovered ? "100%" : 0}
                        bgColor="#f55f5e"
                        h="1px"
                        transition="width 0.3s ease"
                    />
                </Box>
            </Flex>
        </Flex>
    );
}
