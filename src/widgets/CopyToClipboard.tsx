import { FC, useState } from "react";
import { Button } from "../ui";

interface ICopyToClipboardProps {
  text: string;
}

const CopyToClipboard: FC<ICopyToClipboardProps> = ({ text }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = async (text: string) => {
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
