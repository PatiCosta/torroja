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
            w="100%"
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
                    textAlign={{ base: "justify", lg: "start" }}
                >
                    <b>O Studio Torroja</b> é um escritório especializado no desenvolvimento de projetos de estruturas metálicas.
                    Em nossa abordagem, integramos de forma harmoniosa o projeto arquitetônico com a grandiosidade do projeto estrutural, proporcionando soluções integradas e eficientes.
                    Com essa abordagem, somos capazes de viabilizar a construção, permitindo que ela concorra em termos de desempenho e qualidade com as edificações tradicionais em concreto.
                    Sempre destacando a importância do projeto estrutural, buscamos trabalhar com formas exuberantes e inovadoras, que capturam a atenção e a admiração do observador

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
                variant={isLg? "md": "mobileList"}
                image="/assets/img/mirante-1.jpg"
                buttonAlign="right"
                title="Mirante da Cevada"
                tags={["#EstruturaMetálica", "#SerraDeCamposDoJordão"]}
                description="Uma bela estrutura metálica inserida em meio à Serra de Campos do Jordão. Este projeto, desenvolvido em conjunto com o escritório Thais Bercovici Arquitetura, concedeu ao Studio Torroja o prêmio Menção Honrosa de 2022, pelo concurso 'Talento Estrutural'. Deseja uma estrutura metálica inovadora como esta? Envie seu projeto para o Studio Torroja!"
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
