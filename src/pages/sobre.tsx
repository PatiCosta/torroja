import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CallToAction } from "@/components/CallToAction";
import { Main } from "@/components/Projects/Main";
import { Container } from "@chakra-ui/react";
import { About } from "@/components/Home/About";
import { Metodologia } from "@/components/Home/Metodologia";

export default function Home() {
    return (
        <Container centerContent maxW={2080} mx='auto'>
            <Header />
            <Metodologia />
            <About />
            <Footer />
        </Container>
    )
}
