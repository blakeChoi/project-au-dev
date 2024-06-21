import { ModalAlertProps } from "@/features/ui/ModalAlert";
import { create } from "zustand";

interface ModalAlertStoreState extends Omit<ModalAlertProps, "onClose"> {
  openModalAlert: (
    modalConfirmState: Omit<ModalAlertProps, "isOpen" | "onClose">
  ) => void;
  closeModalAlert: () => void;
}

const initialState: Omit<ModalAlertProps, "onClose"> = {
  isOpen: false,
  title: undefined,
  message: undefined,
  onClickConfirm: undefined,
  buttonConfirmText: undefined,
};

const useModalAlertStore = create<ModalAlertStoreState>((set, get) => ({
  ...initialState,
  openModalAlert: (modalAlertState) => {
    const prevState = get();
    set(() => ({ ...prevState, ...modalAlertState, isOpen: true }));
  },
  closeModalAlert: () => set(() => initialState),
}));

export default useModalAlertStore;
