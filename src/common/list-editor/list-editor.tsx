import { ListEditorProps } from "./list-editor.types";

export function ListEditor(props: ListEditorProps) {
  return (
    <div {...props}>
      {props.children}
    </div>
  );
}
