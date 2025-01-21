'use client';

import { createContext, useState, useContext } from 'react';

// Create the context
const MyContext = createContext();

// Create the provider component
export const MyProvider = ({ children }) => {
  const markdownText = `
  # Sample Markdown Guide
  
  ## Headings
  
  Use \`#\` for headings, with additional \`#\` for subheadings:
  
  \`\`\`markdown
  # H1 Heading
  ## H2 Heading
  ### H3 Heading
  #### H4 Heading
  \`\`\`
  
  ---
  
  ## Lists
  
  ### Unordered List
  \`\`\`markdown
  - Item 1
    - Sub-item 1.1
  - Item 2
  \`\`\`
  
  ### Ordered List
  \`\`\`markdown
  1. Step 1
  2. Step 2
     1. Sub-step 2.1
  \`\`\`
  
  ---
  
  ## Links
  
  \`\`\`markdown
  [Google](https://www.google.com)
  \`\`\`
  
  ---
  
  ## Images
  
  \`\`\`markdown
  ![Alt Text](https://via.placeholder.com/150)
  \`\`\`
  
  ---
  
  ## Code Blocks
  
  Inline code:
  
  \`\`\`markdown
  \`console.log('Hello, World!');\`
  \`\`\`
  
  Block code:
  
  \`\`\`markdown
  \`\`\`javascript
  function greet(name) {
    return \`Hello, \${name}!\`;
  }
  \`\`\`
  \`\`\`
  
  ---
  
  ## Blockquote
  
  \`\`\`markdown
  > This is a blockquote.
  \`\`\`
  
  ---
  
  ## Tables
  
  \`\`\`markdown
  | Column 1 | Column 2 | Column 3 |
  |----------|----------|----------|
  | Value 1  | Value 2  | Value 3  |
  | Value A  | Value B  | Value C  |
  \`\`\`
  
  ---
  
  ## Task Lists
  
  \`\`\`markdown
  - [x] Task 1
  - [ ] Task 2
  - [ ] Task 3
  \`\`\`
  
  ---
  
  ## Emphasis
  
  - **Bold**:
  
  \`\`\`markdown
  **Bold**
  \`\`\`
  
  - *Italic*:
  
  \`\`\`markdown
  *Italic*
  \`\`\`
  
  - ~~Strikethrough~~:
  
  \`\`\`markdown
  ~~Strikethrough~~
  \`\`\`
  
  ---
  
  ## Horizontal Line
  
  \`\`\`markdown
  ---
  \`\`\`
  
  ---
  
  ## Emoji
  
  \`\`\`markdown
  🎉 ✨ 🚀
  \`\`\`
  
  Write as \`:rocket:\` for 🚀.
  `;

  const [value, setValue] = useState(markdownText);

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to use the context
export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};
