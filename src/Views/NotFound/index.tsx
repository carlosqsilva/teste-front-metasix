import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}

export const NotFound = ({ history }: Props) => {
  useEffect(() => {
    setTimeout(() => history.replace("/faq"), 3000);
  }, [history]);

  return <h4>Redirecionando ...</h4>;
};
