import { InjectionKey } from "vue";

export type LabelPosition = "left" | "top";

export const provideKey: InjectionKey<{
  labelPosition: LabelPosition;
}> = Symbol();
