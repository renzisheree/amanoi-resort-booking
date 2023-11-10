import { useEffect, useRef, useState } from "react";

export default function useClickOutSide(dom = "button") {
  const [show, setShow] = useState(false);
  const nodeRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    function handleClickOutSide(e: MouseEvent) {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target as Node) &&
        !(e.target instanceof HTMLElement && e.target.matches(dom))
      ) {
        setShow(false);
      }
    }
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, [dom, setShow]);
  return {
    show,
    setShow,
    nodeRef,
  };
}
