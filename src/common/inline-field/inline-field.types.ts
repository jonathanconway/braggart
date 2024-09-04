import { ReactNode } from "react";

export interface InlineFieldProps {
  readonly viewer?: ReactNode;
  readonly editor?: ReactNode;
  readonly controls?: ReactNode;
  readonly canSubmit?: boolean;

  onEdit?(): void;
  onSubmit?(): void;
  onCancel?(): void;
}
