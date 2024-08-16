import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CallToAction } from "@/components/CallToAction";
import { Main } from "@/components/Projects/Main";

export default function Home() {
    return (
        <>
            <Header />
            <Main />
            <CallToAction />
            <Footer />
        </>
    );
}
