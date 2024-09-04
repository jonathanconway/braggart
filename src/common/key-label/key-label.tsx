import * as Styled from "./key-label.styles";

export interface KeyLabelProps {
  readonly children: string;
}

export function KeyLabel({ children }: KeyLabelProps) {
  return <Styled.KeyLabel>{children}</Styled.KeyLabel>;
}
