import { useCallback, useState } from 'react';

/**
 *
 * @param initialData
 * @returns {[unknown,(value: unknown) => void,(function(*): void)|*]}
 */
const useInput = (initialData) => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, setValue, handler];
};

/**
 *
 * @param initFlag
 * @returns {[unknown,(value: unknown) => void,(function(): void)|*]}
 */
const useToggle = (initFlag) => {
  const [toggle, setToggle] = useState(initFlag);

  const handler = useCallback(() => {
    setToggle((prevState) => !prevState);
  }, []);

  return [toggle, setToggle, handler];
};

export { useInput, useToggle };
