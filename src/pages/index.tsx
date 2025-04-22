import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { About } from "@/components/Home/About";
import { Advantages } from "@/components/Home/Advantages";
import { CallToAction } from "@/components/CallToAction";
import { Main } from "@/components/Home/Main";
import { Projects } from "@/components/Home/Projects";
import { Specialties } from "@/components/Home/Specialties";
import { Main as MainProjects } from "@/components/Projects/Main";
import { Container } from "@chakra-ui/react";

export default function Home() {
    return (
        <Container centerContent maxW={2080} mx='auto' gap={8}>
            <Header />
            <Main />
            <Specialties />
            <Advantages />
           
            <Projects />
            <MainProjects />
            {/* <CallToAction /> */}
            <Footer />
        </Container>
    );
}
