import { useState } from "react";

const Contador = (contador,setContador) => {
   

  const sumar = () => {
    if (contador < 5) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <th>
       
      </th>
      <th>

      </th>
    </>
  );
};
export default Contador;
