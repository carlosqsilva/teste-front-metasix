import React from "react";

import { FaqList } from "./faqList";

import { FaqMenu } from "./faqMenu";
import { FaqHeader } from "./faqHeader";

export const FaqView = () => {
  return (
    <>
      <FaqHeader />

      <FaqMenu />

      <FaqList />
    </>
  );
};
