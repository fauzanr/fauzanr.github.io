import { useState, useEffect } from "react";

const DEFAULT_WIDTH = 768;

type Props = {
  width?: number;
  onChange?: (isMobile: boolean) => void;
};

const useIsMobile = ({ width = DEFAULT_WIDTH, onChange }: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= width) {
      setIsMobile(true);
      onChange?.(true);
    } else {
      setIsMobile(false);
      onChange?.(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
