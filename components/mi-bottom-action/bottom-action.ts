export type BottomActionItem = {
  /**
   * 按钮文案
   */
  label: string;
  type?: "primary" | "default" | "danger" | "warning";
  disabled?: boolean;
  command?: () => any;
};
