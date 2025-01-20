import React from "react";

const Footer = () => {
  return (
    <div className=" bg-neutral-300 mt-5 justify-center p-5 items-center flex flex-col">
      <img src="/logo.png" width={33} height={33} alt="Logo loja " />
      <p className="text-sm font-semibold text-primaryDarker">
        Todos os direitos reservados
      </p>
    </div>
  );
};

export default Footer;
