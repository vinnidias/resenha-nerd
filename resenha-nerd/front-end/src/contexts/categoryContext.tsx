"use client";

import {
  useContext,
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface ICategoryProps {
  categorySelected: string;
  setCategorySelected: Dispatch<SetStateAction<string>>;
}

const CategorContext = createContext({} as ICategoryProps);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categorySelected, setCategorySelected] = useState("");

  return (
    <CategorContext.Provider
      value={{
        categorySelected,
        setCategorySelected,
      }}
    >
      {children}
    </CategorContext.Provider>
  );
};

export const useCategoryContext = () => {
  return useContext(CategorContext);
};
