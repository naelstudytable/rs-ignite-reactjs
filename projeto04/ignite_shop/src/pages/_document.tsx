import { Head, Html, Main, NextScript } from "next/document";
import { getCssText } from "../styles";

export default function Document() {
    return (
        <Html> {/* <html></html> */}
            <Head> {/* <head></head> */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
                <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
            </Head>

            <body>
                <Main /> {/* <div id="root"></div> */}
                <NextScript /> {/* <script src=".../index.js"></script> */}
            </body>
        </Html>
    )
}