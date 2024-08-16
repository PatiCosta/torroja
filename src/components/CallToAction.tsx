import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { MoveRight } from "lucide-react";
import { HighlightHeading } from "./HighlightHeading";
import { Button } from "./Button";

export function CallToAction() {
    const isLg = useBreakpointValue({ base: false, lg: true });

    return (
        <Box
            w="100vw"
            bgImage="/assets/img/unsplash17.jpg"
            bgSize="cover"
            bgPosition="center"
            h={{ base: "16rem", lg: "30rem" }}
            position="relative"
        >
            <Flex
                backdropFilter="blur(12px)"
                maxW={{ base: "100%", lg: "35rem" }}
                h={{ base: "fit-content", lg: "100%" }}
                alignItems="center"
            >
                <Box
                    position="absolute"
                    w="100%"
                    h="100%"
                    bgColor="eerie"
                    opacity={0.5}
                    zIndex={-1}
                />
                <HighlightHeading
                    variant={isLg ? "lg" : "2xs"}
                    maxW={{ base: "fit-content", lg: "22rem" }}
                    pl={{ base: 12, lg: 32 }}
                    pr={{ base: 12, lg: 0 }}
                    pt={{ base: 8, lg: 0 }}
                    pb={{ base: 12, lg: 0 }}
                    textAlign={{ base: "center", lg: "start" }}
                >
                    Ideias inovadoras esperam por você aqui.
                </HighlightHeading>
                <Button
                    variant="fill"
                    text="Faça seu orçamento"
                    icon={MoveRight}
                    position="absolute"
                    top={{ base: "auto", lg: "50%" }}
                    bottom={{ base: "-15%", lg: "auto" }}
                    right={{ base: "auto", lg: "-10%" }}
                    left={{ base: "50%", lg: "auto" }}
                    transform={{
                        base: "translateX(-50%)",
                        lg: "translateY(-50%)",
                    }}
                />
            </Flex>
        </Box>
    );
}
