import { PropsWithChildren, useEffect, useState } from "react";

import { createPortal } from "react-dom";

type PortalContainerProps = PropsWithChildren<{
  portalId: string;
}>;

export default function PortalContainer({
  children,
  portalId,
}: PortalContainerProps) {
  const [portalElement, setPortalElement] = useState<Element>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let portalElement: HTMLElement;

      if (portalId && document.getElementById(portalId)) {
        portalElement = document.getElementById(portalId) as HTMLElement;
      } else {
        portalElement = document.createElement("div");
        portalElement.id = portalId;
        document.querySelector("body")?.appendChild(portalElement);
      }

      setPortalElement(portalElement);
    }
  }, [portalId]);

  return portalElement ? createPortal(children, portalElement) : null;
}
