import { createContext, useState } from "react";

export const categoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
  const [category, setCategory] = useState("All");
  const [change, setChange] = useState(true);
  const filterItemHandler = () => {
    setChange(false);
    setTimeout(() => {
      setChange(true);
    }, 680);
  };
  return (
    <categoryContext.Provider
      value={{
        category,
        setCategory,
        change,
        filterItemHandler,
      }}
    >
      {children}
    </categoryContext.Provider>
  );
};
export default CategoryContextProvider;
