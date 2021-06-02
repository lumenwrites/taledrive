import { createEditor, Editor, Transforms, Text } from "slate"

// Define our own custom set of helpers.
export const Commands = {
  isBoldMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.bold === true,
      universal: true,
    })

    return !!match
  },

  isHeadingActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.type === 'heading',
    })

    return !!match
  },

  toggleBoldMark(editor) {
    const isActive = Commands.isBoldMarkActive(editor)
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: n => Text.isText(n), split: true }
    )
  },

  toggleHeading(editor) {
    const isActive = Commands.isHeadingActive(editor)
    Transforms.setNodes(
      editor,
      { type: isActive ? null : 'heading' },
      { match: n => Editor.isBlock(editor, n) }
    )
  }
}
