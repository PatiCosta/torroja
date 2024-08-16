import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { ProjectPreview } from "../ProjectPreview";
import { HighlightHeading } from "../HighlightHeading";
import { Text } from "../Text";
import { Button } from "../Button";
import { MoveRight } from "lucide-react";

export function About() {
    const isLg = useBreakpointValue({ base: false, lg: true });

    return (
        <Flex
            direction={{ base: "column", lg: "row" }}
            w="100vw"
            alignItems="stretch"
            px={{ base: 10, lg: 32 }}
            justifyContent="space-between"
            gap={{ base: 8, lg: 0 }}
        >
            <Flex
                direction="column"
                justifyContent="space-between"
                alignItems={{ base: "center", lg: "start" }}
                gap={{ base: 4, lg: 0 }}
            >
                <HighlightHeading
                    variant={isLg ? "lg" : "sm"}
                    textAlign={{ base: "center", lg: "start" }}
                >
                    Sobre nós
                </HighlightHeading>
                <Text
                    variant={isLg ? "lg" : "sm"}
                    maxW="25rem"
                    textAlign={{ base: "center", lg: "start" }}
                >
                    Lorem ipsum dolor sit amet consectetur. Ultricies fames
                    natoque purus odio eu lectus. Vitae id in ipsum condimentum.
                    Tempus commodo quis ut quam vitae. Suspendisse nisl nunc
                    pretium libero interdum malesuada. Mollis consequat non
                    maecenas senectus tristique. Nisl tellus arcu vel semper.
                    Velit scelerisque sed sagittis commodo. Pellentesque
                    dictumst nulla sed nisi sit id lacus. Vel dolor in massa
                    magna in volutpat quis sagittis. Metus eu nec molestie dui
                    sit ac pellentesque. Vestibulum eget massa consequat lacinia
                    vitae amet tempus odio. Sed amet rhoncus congue nulla odio
                    quam felis. Et in amet id risus.
                </Text>
                {isLg && (
                    <Button
                        variant="outline"
                        icon={MoveRight}
                        text="Faça seu orçamento"
                    />
                )}
            </Flex>
            <ProjectPreview
                variant="md"
                image="/assets/img/unsplash1.jpg"
                buttonAlign="right"
                title="Nome do projeto"
                tags={["tag 1", "tag 2"]}
                description="Lorem ipsum dolor sit amet consectetur. Leo pretium volutpat tortor nibh placerat. Scelerisque eu pulvinar id eros tristique dolor amet habitasse vestibulum. Convallis arcu fusce viverra turpis."
            />
            {!isLg && (
                <Button
                    variant="outline"
                    icon={MoveRight}
                    text="Faça seu orçamento"
                    w="100%"
                />
            )}
        </Flex>
    );
}
