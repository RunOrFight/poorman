import { useState } from "react";
import { Button } from "../ui";
import { useAppSelector } from "../store";

const CopyToClipboard = () => {
  const text = useAppSelector((state) => state.game.link);
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = async (text: string | null) => {
    if (!text) {
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div className="text-xl">{text}</div>
      {copySuccess ? (
        <span style={{ color: "green" }}>Copied!</span>
      ) : (
        <Button onClick={() => copyToClipboard(text)}>Copy to clipboard</Button>
      )}
    </div>
  );
};

export default CopyToClipboard;
