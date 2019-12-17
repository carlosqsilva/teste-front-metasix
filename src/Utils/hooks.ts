import { useState, useCallback } from "react";

export function useToggleSelection<T>(value: T) {
  const [selected, setValue] = useState<T>(value);

  const select = useCallback(newValue => {
    setValue(value => {
      if (value === newValue) {
        return undefined;
      }

      return newValue;
    });
  }, []);

  return {
    selected,
    select
  };
}

export const useInput = (init: string = "") => {
  const [value, setValue] = useState(init);
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    []
  );
  return {
    value,
    onChange
  };
};
