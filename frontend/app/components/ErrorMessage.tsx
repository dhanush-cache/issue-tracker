import { Text } from "@radix-ui/themes/components/callout";
import React, { PropsWithChildren } from "react";

export const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;
  return <Text color="red">{children}</Text>;
};
