import { Box, Flex, Icon, Link, textDecoration, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { Subtitle } from "./Subtitle";
import { MoveRight } from "lucide-react";

interface ProjectPreviewProps {
    buttonAlign: "left" | "right";
    title: string;
    description: string;
    tags: string[];
    image: string;
    variant: "full" | "mobileList" | "md" | "sm";
}

export function ProjectPreview({
    buttonAlign,
    title,
    description,
    tags,
    image,
    variant,
}: ProjectPreviewProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const isLg = useBreakpointValue({ base: false, lg: true });

    function toggleHover() {
        setIsHovered(!isHovered);
        if (!isVisible) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 500);
            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
        }
    }

    return (
        <Flex
            bgImage={image}
            bgPosition="top"
            bgSize="cover"
            w={{
                base: "calc(100vw - 5rem)",
                lg:
                    variant === "full"
                        ? "100vw"
                        : variant === "md"
                            ? "calc((100vw/2) - 8rem)"
                            : "calc((100vw -16rem)/3)",
            }}
            h={{ base: variant === "mobileList" ? 264 : 32, lg: "30rem" }}
            position="relative"
            py={{
                base: 0,
                lg: variant === "full" ? 4 : variant === "md" ? 20 : 12,
            }}
            pl={{
                base: 0,
                lg: variant === "full" ? 4 : variant === "md" ? 12 : 8,
            }}
            pr={{
                base: 0,
                lg: variant === "full" ? 12 : variant === "md" ? 44 : 8,
            }}
            borderRadius="sm"
        >
            {isLg && (
                <Box
                    position="absolute"
                    cursor="pointer"
                    h={20}
                    w={20}
                    border="1px transparent"
                    borderBottomRightRadius={buttonAlign === "right" ? "sm" : 0}
                    borderBottomLeftRadius={buttonAlign === "left" ? "sm" : 0}
                    borderTopLeftRadius={buttonAlign === "right" ? "sm" : 0}
                    borderTopRightRadius={buttonAlign === "left" ? "sm" : 0}
                    overflow="hidden"
                    right={buttonAlign === "right" ? 0 : "initial"}
                    left={buttonAlign === "left" ? 0 : "initial"}
                    bottom={0}
                    _before={{
                        content: '""',
                        height: "100%",
                        width: "100%",
                        bgColor: "light",
                        opacity: 0.5,
                        position: "absolute",
                        bottom: 0,
                        border: "1px solid transparent",
                        borderBottomRightRadius:
                            buttonAlign === "right" ? "sm" : 0,
                        borderBottomLeftRadius:
                            buttonAlign === "left" ? "sm" : 0,
                        borderTopLeftRadius: buttonAlign === "right" ? "sm" : 0,
                        borderTopRightRadius: buttonAlign === "left" ? "sm" : 0,
                        transition: "background-color .8s ease",
                    }}
                    backdropFilter="blur(8px)"
                    transition="height 0.2s ease, width 0.2s ease"
                    _hover={{
                        h: "100%",
                        w: "100%",
                        borderRadius: "sm",
                        transition: "height 1s ease, width 1s ease",
                        _before: {
                            borderRadius: "sm",
                            bgColor: "eerie",
                            transition: "background-color 1.5s ease",
                        },
                    }}
                    onMouseEnter={toggleHover}
                    onMouseLeave={toggleHover}
                    zIndex={1}
                >
                    <Flex
                        h={20}
                        px={7}
                        alignItems="center"
                        justifyContent="center"
                        gap={4}
                        position="absolute"
                        bottom={0}
                        right={buttonAlign === "right" ? 0 : "initial"}
                        left={buttonAlign === "left" ? 0 : "initial"}
                        direction={
                            buttonAlign === "left" ? "row-reverse" : "row"
                        }
                    >
                        <Link
                            href="/projects"
                            _hover={{ color: 'teal.400', textDecoration: 'none', transition:"300ms" }}
                        >
                            <Subtitle
                                variant="xl"
                                opacity={isVisible ? "1" : "0"}
                                transition="opacity 0.1s ease-out"
                                mb={1}
                            >
                                ver mais
                            </Subtitle>
                        </Link>
                        <Icon
                            as={MoveRight}
                            boxSize={6}
                            color={isHovered ? "light" : "eerie"}
                            zIndex={2}
                            transition="color 0.5s ease, position 0.5s ease"
                        />
                    </Flex>
                </Box>
            )}
            {isLg && (
                <Box
                    zIndex={2}
                    opacity={isVisible ? "1" : "0"}
                    transition="opacity 0.4s ease"
                >
                    <Heading variant="lg">{title}</Heading>
                    <Flex
                        my={6}
                        alignItems="center"
                        justifyContent="start"
                        gap={3}
                    >
                        {tags.map((tag) => (
                            <Box
                                key={tag}
                                px={2}
                                py={1}
                                bgColor="#ef444430"
                                borderRadius="sm"
                            >
                                <Text variant="md" color="silver">
                                    {tag}
                                </Text>
                            </Box>
                        ))}
                    </Flex>
                    <Text variant="lg">{description}</Text>
                </Box>
            )}
            {!isLg && (
                <Flex
                    backdropFilter="blur(8px)"
                    h={variant === "mobileList" ? "30%" : "100%"}
                    alignItems="stretch"
                    position="absolute"
                    right={buttonAlign === "right" ? 0 : "initial"}
                    left={buttonAlign === "left" ? 0 : "initial"}
                    bottom={0}
                    border="1px transparent"
                    borderBottomRightRadius={buttonAlign === "right" ? "sm" : 0}
                    borderBottomLeftRadius={buttonAlign === "left" ? "sm" : 0}
                    borderTopLeftRadius={buttonAlign === "left" ? "sm" : 0}
                    borderTopRightRadius={buttonAlign === "right" ? "sm" : 0}
                >
                    <Box
                        position="absolute"
                        w="100%"
                        h="100%"
                        bgColor="eerie"
                        opacity={0.35}
                        zIndex={-1}
                        border="1px transparent"
                        borderBottomRightRadius={
                            buttonAlign === "right" ? "sm" : 0
                        }
                        borderBottomLeftRadius={
                            buttonAlign === "left" ? "sm" : 0
                        }
                        borderTopLeftRadius={buttonAlign === "left" ? "sm" : 0}
                        borderTopRightRadius={
                            buttonAlign === "right" ? "sm" : 0
                        }
                    />
                    <Flex
                        direction="column"
                        alignItems="start"
                        justifyContent="space-between"
                        py={4}
                        px={4}
                    >
                        <Heading variant="xs" maxW={isLg ? "4rem" : "10rem"}>
                            {title}
                        </Heading>
                        <Flex
                            alignItems="center"
                            justifyContent="center"
                            gap={2}
                        >
                            <Link
                                href="/projects"
                                _hover={{ color: 'teal.400', textDecoration: 'none', transition:"300ms" }}
                            >
                                <Subtitle variant="sm" color="silver">
                                    ver mais
                                </Subtitle>
                            </Link>
                            <Icon as={MoveRight} boxSize={2} color="silver" />
                        </Flex>
                    </Flex>
                </Flex>
            )}
        </Flex>
    );
}
