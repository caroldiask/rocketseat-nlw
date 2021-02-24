import Document, { Html, Head, Main, NextScript } from 'next/document'

// coloca-se aqui pq o _documents carrega uma única vez, é estático
// no _app o código é reaproveitado porém recalculado, então é um processamento a mais

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>            
        );
    }
}