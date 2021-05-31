// Import React dependencies.
import { useEffect, useMemo, useState, useCallback } from "react"
// Import the Slate editor factory.
import { createEditor, Editor, Transforms } from "slate"
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react"

// TypeScript Users only add this code
import { BaseEditor } from "slate"
import { ReactEditor } from "slate-react"

import Layout from "components/Layout"
import Subnav from "components/Editor/Subnav"

const EditorComponent = () => {
  const editor = useMemo(() => withReact(createEditor()), [])
  // Add the initial value when setting up our state.
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ])

  function onKeyDown(e) {
    if (e.key === "1") { //  && e.metaKey && e.altKey //  && e.ctrlKey && e.altKey // metaKey
      e.preventDefault()
      // Determine whether any of the currently selected blocks are code blocks.
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'heading',
      })
      // Toggle the block type depending on whether there's already a match.
      Transforms.setNodes(
        editor,
        { type: match ? 'paragraph' : 'heading' },
        { match: n => Editor.isBlock(editor, n) }
      )
    }
  }
  
  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'heading':
        return <HeadingElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])
  return (
    <Layout subnav={<Subnav />}>
      <div className="editor">
        <Slate
          editor={editor}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        >
          <Editable
            renderElement={renderElement}
            onKeyDown={(event) => onKeyDown(event)}
          />
        </Slate>
      </div>
    </Layout>
  )
}


const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>
}

// Define a React component renderer for our code blocks.
const HeadingElement = (props) => {
  return <h1 {...props.attributes}>{props.children}</h1>
}

export default EditorComponent
