import ModalContainer from "../ModalContainer";
import { PropsWithChildren } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/features/libs/queryClient";

export default function AppProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ModalContainer />
    </QueryClientProvider>
  );
}
