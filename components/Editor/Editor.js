// @refresh reset
// Import React dependencies.
import { useEffect, useMemo, useState, useCallback } from "react"
// Import the Slate editor factory.
import { createEditor, Editor, Transforms, Text } from "slate"
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react"
// Import elements
import { renderElement, renderLeaf } from 'components/Editor/Elements'
// TypeScript Users only add this code
import { BaseEditor } from "slate"
import { ReactEditor } from "slate-react"
import { Commands } from './Commands'

const isServer = typeof window === "undefined";
const defaultDoc = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
]

const EditorComponent = () => {

  const editor = useMemo(() => withReact(createEditor()), [])
  
  // Add the initial value when setting up our state.
  let savedDoc
  if (!isServer) savedDoc = JSON.parse(localStorage.getItem('content'))
  const [value, setValue] = useState(savedDoc|| defaultDoc)

  function onKeyDown(event) {
    // console.log(event.keyCode, event.keyCode==49)
    const holdingHotkey = event.metaKey // event.metaKey && event.altKey
    if (!holdingHotkey) return

    switch (event.key) {
      // When "`" is pressed, keep our existing code block logic.
      case '1': {
        event.preventDefault()
        Commands.toggleHeading(editor)
        break
      }

      // When "B" is pressed, bold the text in the selection.
      case 'b': {
        event.preventDefault()
        Commands.toggleBoldMark(editor)
        break
      }
    }
  }
  function onChange(value) {
    setValue(value)
    // Save the value to Local Storage.
    const content = JSON.stringify(value)
    localStorage.setItem('content', content)
  }


  return (
      <div className="editor">
        <Slate
          editor={editor}
          value={value}
          onChange={onChange}
        >
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            onKeyDown={(event) => onKeyDown(event)}
          />
        </Slate>
      </div>
  )
}


export default EditorComponent
