export type ToastOption = {
  type?: "success" | "error" | "warning" | "none";
  message?: string;
  /**
   * 默认1500ms
   */
  duration?: number;
  then?: (...args: any) => any;
};

export type ToastInstanceExpose = {
  show: (ops?: ToastOption) => any;
};
