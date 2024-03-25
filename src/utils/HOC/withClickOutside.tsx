import React from "react";
import useClickOutSide from "../../hooks/useClickOutside";

interface WithClickOutsideProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  nodeRef: React.RefObject<HTMLDivElement>;
}

function withClickOutside<T extends WithClickOutsideProps>(
  WrappedComponent: React.ComponentType<T>
) {
  const WithClickOutside: React.FC<Omit<T, keyof WithClickOutsideProps>> = (
    props
  ) => {
    const { show, setShow, nodeRef } = useClickOutSide();

    return (
      <WrappedComponent
        {...(props as T)}
        show={show}
        setShow={setShow}
        nodeRef={nodeRef}
      />
    );
  };

  return WithClickOutside;
}
export default withClickOutside;
export type { WithClickOutsideProps };
