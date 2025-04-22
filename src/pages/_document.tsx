import { Html, Head, NextScript, Main } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* */}
                <meta name="description" content="O Studio Torroja é um escritório especializado no desenvolvimento de projetos de estruturas metálicas." />
                <meta name="keywords" content="estruturas metalicas" />

                {/* */}
                <meta property="og:url" content="https://www.studiotorroja.com.br/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Studio Torroja" />
                <meta property="og:description" content="O Studio Torroja é um escritório especializado no desenvolvimento de projetos de estruturas metálicas." />
                <meta property="og:image" content="https://www.studiotorroja.com.br/assets/img/logo.svg" />

                {/* */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="studiotorroja.com.br" />
                <meta property="twitter:url" content="https://www.studiotorroja.com.br/" />
                <meta name="twitter:title" content="Studio Torroja" />
                <meta name="twitter:description" content="O Studio Torroja é um escritório especializado no desenvolvimento de projetos de estruturas metálicas." />
                <meta name="twitter:image" content="https://www.studiotorroja.com.br/assets/img/logo.svg" />

                {/* Fontes */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                {/* Adicionei crossorigin ao segundo preconnect, boa prática */}
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
                <link rel="shortcut icon" href="/assets/img/icon.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
