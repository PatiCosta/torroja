import type { AppProps } from "next/app";
import { ChakraBaseProvider } from "@chakra-ui/react";

import { fonts } from "../lib/fonts";
import { theme } from "@/styles/theme";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>
                {`
                    :root {
                        --font-lora: ${fonts.lora.style.fontFamily};
                        --font-bodoniModa: ${fonts.bodoniModa.style.fontFamily};
                    }
                `}
            </style>
            <ChakraBaseProvider theme={theme}>
                <Head>
                    <title>Studio Torroja</title>
                </Head>
                <Component {...pageProps} />
            </ChakraBaseProvider>
        </>
    );
}
