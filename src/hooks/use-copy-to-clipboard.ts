import { useState } from "react";

const useCopyToClipboard = (timeout = 2000) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    if (!navigator.clipboard) return false;

    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), timeout);
    });

    return true;
  };

  return { isCopied, copyToClipboard };
};
export default useCopyToClipboard;
