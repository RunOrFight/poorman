import { FC, memo, useCallback, useState } from 'react';
import { Button } from '../ui';

interface ICopyToClipboardProps {
  link: string;
}
const CopyToClipboard: FC<ICopyToClipboardProps> = memo(({ link }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = useCallback(async () => {
    if (!link) {
      return;
    }
    try {
      await navigator.clipboard.writeText(link);
      setCopySuccess(true);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Failed to copy: ', err);
    }
  }, [link]);

  return (
    <div className="flex items-center gap-2">
      <div className="text-xl">{link}</div>
      {copySuccess ? (
        <span style={{ color: 'green' }}>Copied!</span>
      ) : (
        <Button onClick={() => copyToClipboard()}>Copy to clipboard</Button>
      )}
    </div>
  );
});

export default CopyToClipboard;
