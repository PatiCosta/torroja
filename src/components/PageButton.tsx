import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

export function PageButton({ path, text }: { path: string; text: string }) {
    const router = useRouter();
    const [isHovered, setIsHovered] = useState(false);

    const currentPathname = router.asPath;

    return (
        <Flex
            alignItems="center"
            gap={4}
            cursor="pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            as={Link}
            href={path}
        >
            <Box
                h={2}
                w={2}
                border="1px solid transparent"
                borderRadius="full"
                bgColor={
                    path === currentPathname
                        ? "red"
                        : isHovered
                          ? "red"
                          : "transparent"
                }
                transition="background-color 0.3s ease"
            />
            <Text
                fontWeight={400}
                fontSize={{ base: "1.3rem", lg: "1.5rem" }}
                lineHeight={{ base: "2rem", lg: "2.4rem" }}
                color={
                    path === currentPathname
                        ? "light"
                        : isHovered
                          ? "light"
                          : "silver"
                }
                transition="color 0.3s ease"
            >
                {text}
            </Text>
        </Flex>
    );
}
