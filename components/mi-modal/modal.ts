/**
 * 组件实例方法
 */
export type ModalInstanceExpose = {
  /**
   * 打开modal
   */
  open: (options: ModalOption) => void;
  /**
   * 关闭modal
   */
  close: () => void;
};

export type ModalOption = {
  /**
   * 标题 默认"提示"
   */
  title?: string;
  /**
   * 内容 默认空字符串
   */
  content?: string;
  /**
   * 是否需要输入框 默认false
   */
  isInputRemark?: boolean;
  /**
   * 是否仅需要内容（剔除标题）默认false
   */
  justContent?: boolean;
  /**
   * 显示取消按钮 默认true
   */
  showCancel?: boolean;
  /**
   * 是否允许点击遮罩层来关闭modal 默认fase
   */
  closeOnMask?: boolean;
  /**
   * 输入框是否不需要必填 默认false
   */
  isInputNotRequired?: boolean;
  /**
   * 输入框的占位文字 默认 "请输入内容"
   */
  inputPlaceholder?: string;
  /**
   * 确认按钮回调 如果指定了输入框 输入内容会作为回调参数
   */
  confirm?: (remark?: string) => any;
  /**
   * 取消按钮回调
   */
  cancel?: () => any;
  /**
   * 确认按钮文字 默认 "确定"
   */
  confirmText?: string;
  /**
   * 取消按钮文字 默认 "取消"
   */
  cancelText?: string;
};
