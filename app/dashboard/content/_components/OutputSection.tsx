import React, { useEffect, useRef, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: Props) {
  const editorRef: any = useRef();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  const handleCopy = () => {
    navigator.clipboard.writeText(aiOutput).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Results</h2>
        <Button className='flex gap-2' onClick={handleCopy}>
          <Copy className='w-4 h-4'/>
          {copied ? 'Copied' : 'Copy'}
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your results will appear here"
        initialEditType="wysiwyg"
        height="500px"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
      />
    </div>
  );
}

export default OutputSection;
