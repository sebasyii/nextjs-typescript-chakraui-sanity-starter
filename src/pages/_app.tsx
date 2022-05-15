import React, { useState } from "react";

import { AppProps } from "next/app";

import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles/theme";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

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
