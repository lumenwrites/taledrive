export const renderElement = (props) => {
  switch (props.element.type) {
    case "heading":
      return <HeadingElement {...props} />
    default:
      return <DefaultElement {...props} />
  }
}
export const renderLeaf = props => {
  return <Leaf {...props} />
}

export const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>
}

// Define a React component renderer for our code blocks.
export const HeadingElement = (props) => {
  return <h1 {...props.attributes}>{props.children}</h1>
}

// Define a React component to render leaves with bold text.
export const Leaf = props => {
  return (
    <span
      {...props.attributes}
      style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
    >
      {props.children}
    </span>
  )
}
