import React, { useCallback } from "react";

import { observer } from "mobx-react-lite";
import { FaEdit, FaTrash } from "react-icons/fa";

import { useStore } from "Store";
import { useToggleSelection } from "Utils/hooks";
import { Collapse } from "Components/Collapse";

export const FaqList = observer(() => {
  const { mainStore } = useStore();

  const { select, selected } = useToggleSelection("");

  const onClick = useCallback(
    (fn: () => void) => (e: React.MouseEvent<any>) => {
      e.stopPropagation();
      fn();
    },
    []
  );

  return (
    <ul className="faq__list">
      {mainStore.faq.map(item => (
        <li key={item.objectId} onClick={() => select(item.objectId)}>
          <div className="question">
            <p>{item.question}</p>

            <div className="options">
              <span>{item.position}</span>

              <button className="edit" onClick={onClick(() => "")}>
                <FaEdit />
              </button>

              <button
                className="remove"
                onClick={onClick(() => mainStore.removeFaq(item.objectId))}
              >
                <FaTrash />
              </button>
            </div>
          </div>

          <Collapse isOpen={selected === item.objectId}>
            <div className="answer">
              <h3 className="title">Resposta:</h3>
              <p>{item.answer}</p>

              <div className="info">
                <span>Atualizado: </span> {item.updatedAt}
              </div>
            </div>
          </Collapse>
        </li>
      ))}
    </ul>
  );
});
