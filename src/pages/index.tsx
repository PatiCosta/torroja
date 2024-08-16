import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { About } from "@/components/Home/About";
import { Advantages } from "@/components/Home/Advantages";
import { CallToAction } from "@/components/CallToAction";
import { Main } from "@/components/Home/Main";
import { Projects } from "@/components/Home/Projects";
import { Specialties } from "@/components/Home/Specialties";

export default function Home() {
    return (
        <>
            <Header />
            <Main />
            <About />
            <Advantages />
            <Specialties />
            <Projects />
            <CallToAction />
            <Footer />
        </>
    );
}
