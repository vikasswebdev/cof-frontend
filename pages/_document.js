import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:locale" content="en" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/fav/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/fav/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/fav/favicon-152x152.png"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="theme-color" content="#054a95" />
        <meta name="application-name" content="codeoflyf" />
        <meta name="author" content="https://www.codeoflyf.com/" />
        <meta name="Copyright" content="Copyright 2023 @  codeoflyf" />
        <Script
          id="tag-manager-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-P28SF2N');`,
          }}
        ></Script>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-ZLHPQRY7ZC`}
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZLHPQRY7ZC', {
              page_path: window.location.pathname,
            });
                `}
        </Script>
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P28SF2N"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        ></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
