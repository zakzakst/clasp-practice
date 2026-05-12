import { formatName } from "@/utils/format";

export const getUserMessage = (name: string): string => {
  return formatName(name);
};
