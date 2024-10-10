import React, { useEffect } from "react";
import Layout from "@/components/layout";
import "@/styles/globals.css";
import dynamic from "next/dynamic";
import Script from "next/script";

import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Poppins } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./../styles/custom.css";
import "react-loading-skeleton/dist/skeleton.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "react-phone-number-input/style.css";
import { HydrationProvider, Client } from "react-hydration-provider";

import Head from "next/head";
// import Script from "next/script";
import ContextProvider from "@/store/CalculatorContext";
import CookieBox from "@/components/layout/cookie-box";
import GoogleAnalytics from "@/components/googleAnalytic";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();

  useEffect(() => {
    dynamic(() => import("bootstrap/dist/js/bootstrap.bundle.min.js"));
    AOS.init();

    // window.dataLayer = window.dataLayer || [];
    // function gtag() {
    //   window.dataLayer.push(arguments);
    // }
    // gtag("js", new Date());

    // gtag("consent", "default", {
    //   ad_storage: "granted",
    //   ad_user_data: "granted",
    //   ad_personalization: "granted",
    //   analytics_storage: "granted",
    // });

    // gtag("config", "G-B2E8T9FHGK", {
    //   page_path: window.location.pathname,
    // });
  }, []);
  return (
    <>
      <Head>
        <meta name="Cross-Origin-Opener-Policy" content="same-origin" />
        <meta
          name="google-site-verification"
          content="MCnY-JDHb64CO3JhX_nKnzOHjnEZLpSrkwKGZYhIJJg"
        />
        <title>
          Website and App Development Company | Web Design | Vcana Global
        </title>
      </Head>

      <Script id="" strategy="lazyOnload">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N22ZLBK6')`}
      </Script>

      <Script id="" type="application/ld+json" strategy="lazyOnload">
        {`
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Vcana Global",
  "url": "https://www.vcanaglobal.com/",
  "logo": "https://vcana-website-assets.s3.amazonaws.com/images/home/logovc.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1 (302) 394-6860",
    "contactType": "customer service",
    "contactOption": "TollFree",
    "areaServed": "US",
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://www.facebook.com/vcanaglobal",
    "https://x.com/GlobalVcana",
    "https://www.instagram.com/vcanaglobal/",
    "https://www.youtube.com/channel/UCqaZD8sZAx2IyEM2cMCKARw",
    "https://www.linkedin.com/company/vcana-global",
    "https://www.vcanaglobal.com/"
  ]
`}
      </Script>

      <Script id="" type="application/ld+json" strategy="lazyOnload">
        {`
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Vcana Global Inc",
  "image": "https://vcana-website-assets.s3.amazonaws.com/images/home/logovc.svg",
  "@id": "",
  "url": "https://www.vcanaglobal.com",
  "telephone": "+1 (302) 394-6860",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "651 N. Broad St., Suite 206",
    "addressLocality": "Middletown",
    "addressRegion": "DE",
    "postalCode": "19709",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.4559138,
    "longitude": -75.7174423
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "06:00"
  },
  "sameAs": [
    "https://www.facebook.com/vcanaglobal",
    "https://x.com/GlobalVcana",
    "https://www.instagram.com/vcanaglobal",
    "https://www.linkedin.com/company/vcana-global",
    "https://www.vcanaglobal.com",
    "https://www.youtube.com/channel/UCqaZD8sZAx2IyEM2cMCKARw"
  ] `}
      </Script>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-N22ZLBK6"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      <GoogleAnalytics GA_MEASUREMENT_ID="G-B2E8T9FHGK" />

      <GoogleOAuthProvider clientId="67159139554-1eonpr863r7i5ga06nbpfdehh5h4fvma.apps.googleusercontent.com">
        <ToastContainer />
        <HydrationProvider>
          <QueryClientProvider client={queryClient}>
            <Client>
              <ContextProvider>
                <main className={poppins.className}>
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                  <CookieBox />
                </main>
              </ContextProvider>
            </Client>
          </QueryClientProvider>
        </HydrationProvider>
      </GoogleOAuthProvider>
    </>
  );
}
