import { useCallback, useEffect, useState } from 'react';

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
 * @param _ref
 * @returns {[unknown,(value: unknown) => void,(function(): void)|*]}
 */
const useToggle = (initFlag) => {
  const [toggle, setToggle] = useState(initFlag);

  const handler = useCallback(() => {
    setToggle((prevState) => !prevState);
  }, []);

  return [toggle, setToggle, handler];
};

// TODO: 상태를 한곳에서 관리 해야하는 경우 하나의 컴포넌트가 켜지면 다른건 모두 꺼지게 등..
const useToggleOne = (initFlag) => {
  const [toggle, setToggle] = useState(initFlag);
  const handler = useCallback((e) => {
    console.log(e);
    // setToggle((prevState) => !prevState);
  }, []);

  return [toggle, handler];
};

export { useInput, useToggle, useToggleOne };
