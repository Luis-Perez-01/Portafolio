import { useState } from "react";

export default function useMenu() {
  const [toogleMenu, setToogleMenu] = useState(false);

  const handleClick = () => {
    setToogleMenu(!toogleMenu);
  };

  return { toogleMenu, handleClick };
}
