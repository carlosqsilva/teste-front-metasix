import React from "react";

import { FaPlusCircle } from "react-icons/fa";

export const FaqMenu = () => {
  return (
    <div className="faq__menu">
      <h5 className="faq__menu_header">Pergunta</h5>

      <div className="faq__menu_options">
        <button>
          <FaPlusCircle />
          <span>Nova Pergunta</span>
        </button>
        <button>Ordem</button>
        <button>Editar</button>
        <button>Excluir</button>
      </div>
    </div>
  );
};
