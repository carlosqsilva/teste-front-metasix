import React, { useCallback } from "react";

import { FaSearch } from "react-icons/fa";
import { FaqList } from "./faqList";

import { FaqMenu } from "./faqMenu";

export const FaqView = () => {
  const submit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
  }, []);

  return (
    <>
      <div className="faq__header">
        <h2 className="title">FAQ - Perguntas Frequentes</h2>

        <form onSubmit={submit}>
          <input type="text" placeholder="Busque por termo..." />
          <button>
            <FaSearch /> <span>BUSCAR</span>
          </button>
        </form>
      </div>

      <FaqMenu />

      <FaqList />
    </>
  );
};
