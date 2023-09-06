import { useState } from "react";

export default function useMenu() {
  const [toogleMenu, setToogleMenu] = useState<boolean>(false);

  const handleClick = () => {
    setToogleMenu(!toogleMenu);
  };

  return { toogleMenu, handleClick };
}
