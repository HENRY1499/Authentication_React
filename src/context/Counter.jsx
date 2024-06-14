/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */

import { context } from "./context";

const StateCompo = ({ children }) => {
  
  return (
    <context.Provider
      value={{
       
      }}
    >
      {children}
    </context.Provider>
  );
};
export default StateCompo;
