import React, { useEffect, useState } from "react";

import { AppProps } from "next/app";

import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles/theme";
import { useRouter } from "next/router";

import { pageView } from "@/lib/google-analytics/ga";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  const router = useRouter();
  const gaMeasurementId = process.env.GOOGLE_ANALYTICS_ID ?? null;

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageView(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo {...SEO} />

      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
