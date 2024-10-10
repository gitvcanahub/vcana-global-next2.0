import React from "react";
// import { useRouter } from "next/router";
// import EmailMarketing from "@/components/services/email-marketing";
// import ServiceLayout from "@/components/services/service-layout/ServiceLayout";
import WebDevelopment from "@/components/services/web-development";
import SEO from "@/components/services/seo";
import Ecommerce from "@/components/services/e-commerce";
import MobileApp from "@/components/services/mobile-app-development";
import DigitalMarketing from "@/components/services/digital-marketing";
import BlockChain from "@/components/services/block-chain";
import Smm from "@/components/services/smm";
import WebAppDevelopment from "@/components/services/web-app-development";
import IosDevelopment from "@/components/services/ios-development";
import AndroidDevelopment from "@/components/services/android-development";
import CrossPlateformApp from "@/components/services/cross-plateform-app";
import PPC from "@/components/services/ppc";
import ContentMarketing from "@/components/services/content-marketing";
import EmailMarketing from "@/components/services/email-marketing";
import SaaSPaaS from "@/components/services/saas-paas";
import ArtificialIntelligence from "@/components/services/ai-applications";

// import Outsourcing from "@/components/services/Outsourcing";
// import Smm from "@/components/services/smm";
// import PPC from "@/components/services/ppc";
const ServiceDetail = ({ params }) => {
  // const router = useRouter();
  // const { url } = router.query;

  let service;

  switch (params.url) {
    case "website-design-development":
      service = <WebDevelopment />;
      break;
    case "ecommerce-website-development":
      service = <Ecommerce />;
      break;
    case "application-development":
      service = <WebAppDevelopment />;
      break;
    case "mobile-application-development":
      service = <MobileApp />;
      break;
    case "android-app-development":
      service = <AndroidDevelopment />;
      break;
    case "ios-app-development":
      service = <IosDevelopment />;
      break;
    case "cross-plateform-app-development":
      service = <CrossPlateformApp />;
      break;
    case "digital-marketing":
      service = <DigitalMarketing />;
      break;
    case "search-engine-optimization":
      service = <SEO />;
      break;
    case "social-media-marketing":
      service = <Smm />;
      break;
    case "pay-per-click":
      service = <PPC />;
      break;
    case "content-writing":
      service = <ContentMarketing />;
      break;
    case "email-marketing":
      service = <EmailMarketing />;
      break;

    case "blockchain-development":
      service = <BlockChain />;
      break;
    case "saas-paas":
      service = <SaaSPaaS />;
      break;
    case "ai-ml-applications":
      service = <ArtificialIntelligence />;
      break;
  }
  return <>{service}</>;
};

export async function getStaticProps(context) {
  const { params } = context;

  return {
    props: { params },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { url: "website-design-development" } },
      { params: { url: "ecommerce-website-development" } },
      { params: { url: "search-engine-optimization" } },
      { params: { url: "application-development" } },
      { params: { url: "mobile-application-development" } },
      { params: { url: "android-app-development" } },
      { params: { url: "ios-app-development" } },
      { params: { url: "cross-plateform-app-development" } },
      { params: { url: "digital-marketing" } },
      { params: { url: "social-media-marketing" } },
      { params: { url: "pay-per-click" } },
      { params: { url: "content-writing" } },
      { params: { url: "email-marketing" } },
      { params: { url: "blockchain-development" } },
      { params: { url: "saas-paas" } },
      { params: { url: "ai-ml-applications" } },
    ],
    fallback: false,
  };
}

export default ServiceDetail;
