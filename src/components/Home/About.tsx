import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";
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
            pt={{ base: 10, lg: 32 }}
            justifyContent="space-between"
            gap={{ base: 8, lg: 8 }}
        >
            <Flex
                direction="column"
                justifyContent="space-between"
                alignItems={{ base: "center", lg: "start" }}
                gap={{ base: 4, lg: 8 }}
            >
                <HighlightHeading
                    variant={isLg ? "lg" : "sm"}
                    textAlign={{ base: "center", lg: "start" }}
                >
                    Quem somos
                </HighlightHeading>
                <Text
                    variant={isLg ? "lg" : "sm"}
                    maxW="40rem"
                    textAlign={{ base: "justify", lg: "start" }}
                >
                    <b>O Studio Torroja</b> é um escritório especializado no desenvolvimento de projetos de estruturas metálicas.
                    Em nossa abordagem, integramos de forma harmoniosa o projeto arquitetônico com a grandiosidade do projeto estrutural, proporcionando soluções integradas e eficientes.
                    Com essa abordagem, somos capazes de viabilizar a construção, permitindo que ela concorra em termos de desempenho e qualidade com as edificações tradicionais em concreto.
                    Sempre destacando a importância do projeto estrutural, buscamos trabalhar com formas exuberantes e inovadoras, que capturam a atenção e a admiração do observador
                </Text>
                <Text
                    variant={isLg ? "lg" : "sm"}
                    maxW="40rem"
                    textAlign={{ base: "justify", lg: "start" }}
                    >
                    <b>Evandro Guisard</b> nasceu em Taubaté, SP, e formou-se em Engenharia Civil pela Universidade de Taubaté. Especialista em projetos e planejamento BIM, atua na área há 9 anos. Seu foco é gerir e implementar processos BIM em projetos de estruturas metálicas, possuindo uma visão estratégica sobre como a tecnologia BIM pode ser aplicada para melhorar a eficiência e a qualidade nos projetos de construção. Isso envolve a definição de metas claras e a formulação de planos de implementação que alinhem o BIM com os objetivos da organização.
                </Text>
                <Text
                    variant={isLg ? "lg" : "sm"}
                    maxW="40rem"
                    textAlign={{ base: "justify", lg: "start" }}
                >

                    <b>Luiz Guilherme Fernandes Lopes</b> nasceu em Campos do Jordão, SP, e formou-se em Engenharia Civil pela Universidade de Taubaté. Como professor universitário, ministrou aulas de Estruturas I, II e III na Universidade Júlio Mesquita Filho – UNESP, campus de Guaratinguetá. Estudou elementos finitos e sistemas estruturais no Instituto Tecnológico de Aeronáutica (ITA). Fascinado por estruturas metálicas, ele se desafia em cada projeto, elevando o material à sua máxima eficiência estrutural.

                </Text>
                {isLg && (
                    <Button
                        variant="outline"
                        icon={MoveRight}
                        text="Faça seu orçamento"
                    />
                )}
            </Flex>
            <Flex gap={4}>
                <Image src='/assets/img/evandro.png' objectFit={'cover'} objectPosition={'top'} maxH={680} />
                <Image src='/assets/img/luiz.png' objectFit={'cover'} objectPosition={'top'} maxH={680} />
            </Flex>

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
