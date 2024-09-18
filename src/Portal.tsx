import { useState } from "react";
import { createPortal } from "react-dom";

interface ClickableWithPortalProps {
  triggerContent: React.ReactNode;
  portalContent: React.ReactNode;
}

const ClickableWithPortal = ({
  triggerContent,
  portalContent,
}: ClickableWithPortalProps) => {
  const [isPortalVisible, setPortalVisible] = useState(false);

  const togglePortal = () => {
    setPortalVisible(!isPortalVisible);
  };

  return (
    <div>
      <div
        onClick={togglePortal}
        style={{
          cursor: "pointer",
          display: "inline-block",
          padding: "10px",
          border: "1px solid #ccc",
        }}
      >
        {triggerContent}
      </div>

      {isPortalVisible && createPortal(portalContent, document.body)}
    </div>
  );
};

export default ClickableWithPortal;
