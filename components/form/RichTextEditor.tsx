"use client";

// import { ButtonComponent } from '@/components/ui/ButtonComponent';
import { useEffect, useRef, useState } from "react";
import ButtonComponent from "../ui/ButtonComponent";

interface RichTextEditorProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  dir?: 'ltr' | 'rtl';
}

export function RichTextEditor({ 
  value = "", 
  onChange, 
  //placeholder = "Enter your description...",
  className = "",
  dir = 'ltr'
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const lastPropValue = useRef<string>(value);

  const executeCommand = (command: string, value: string = '') => {
    document.execCommand(command, false, value);
    updateContent();
  };

  const updateContent = () => {
    if (editorRef.current) {
      const content = editorRef.current.innerHTML;
      onChange?.(content);
    }
  };

  // Initialize editor content and sync when parent `value` changes
  useEffect(() => {
    const el = editorRef.current;
    if (!el) return;

    // If the editor is focused (user is typing), don't clobber their caret/selection
    if (isFocused) return;

    // Only update if the incoming value differs from what's shown
    const incoming = value ?? '';
    if (el.innerHTML !== incoming) {
      el.innerHTML = incoming || '<p><br></p>';
      lastPropValue.current = incoming;
    }
  }, [value, isFocused]);

  const handleInput = () => {
    updateContent();
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
    updateContent();
  };

  return (
    <div className={`border border-gray-200 rounded-lg bg-white ${className}`}>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-gray-200 bg-gray-50 rounded-t-lg">
        <ButtonComponent
          type="button"
          onClick={() => executeCommand('bold')}
          label="Bold"
        />
        <ButtonComponent
          type="button"
          onClick={() => executeCommand('italic')}
          label="Italic"
        />
        <ButtonComponent
          type="button"
          onClick={() => executeCommand('underline')}
          label="Underline"
        />
        
        <div className="w-px h-4 bg-gray-300 mx-1" />
        
        <ButtonComponent
          type="button"
          onClick={() => executeCommand('justifyLeft')}
          label="Align Left"
        />
        <ButtonComponent
          type="button"
          onClick={() => executeCommand('justifyCenter')}
          label="Align Center"
        />
        <ButtonComponent
          type="button"
          onClick={() => executeCommand('justifyRight')}
          label="Align Right"
        />
        
        <div className="w-px h-4 bg-gray-300 mx-1" />
        
        <ButtonComponent
          type="button"
          onClick={() => executeCommand('insertUnorderedList')}
          label="Insert Unordered List"
        />
        <ButtonComponent
          type="button"
          onClick={() => executeCommand('insertOrderedList')}
          label="Insert Ordered List"
        />
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        role="textbox"
        aria-multiline="true"
        spellCheck={true}
        dir={dir}
        onInput={handleInput}
        onPaste={handlePaste}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`min-h-[120px] p-3 text-sm ${dir === 'rtl' ? 'text-right' : 'text-left'} focus:outline-none ${
          isFocused ? 'ring-1 ring-primary' : ''
        }`}
        style={{ 
          fontFamily: 'inherit',
          lineHeight: '1.5',
          direction: dir,
          textAlign: dir === 'rtl' ? 'right' : 'left'
        }}
      />
      
      {/* Placeholder */}
      
    </div>
  );
}