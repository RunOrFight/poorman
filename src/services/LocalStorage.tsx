import { useState, useEffect } from "react";

type SetValue<T> = (value: T | ((val: T) => T)) => void;

const useLocalStorage = <T,>(
  key: string,
  initialValue: T
): [T, SetValue<T>] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error retrieving stored value:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const serializedValue = JSON.stringify(storedValue);
      window.localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error("Error storing value:", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export { useLocalStorage };
