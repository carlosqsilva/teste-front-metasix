import React, { useCallback } from "react";

import { FaSearch } from "react-icons/fa";

import { useInput } from "Utils/hooks";
import { useStore } from "Store";

export const FaqHeader = () => {
  const { mainStore } = useStore();

  const { value, onChange } = useInput("");

  const submit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      mainStore.onSearchChange(value);
    },
    [value]
  );

  return (
    <div className="faq__header">
      <h2 className="title">FAQ - Perguntas Frequentes</h2>

      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Busque por termo..."
          value={value}
          onChange={onChange}
        />
        <button>
          <FaSearch /> <span>BUSCAR</span>
        </button>
      </form>
    </div>
  );
};
