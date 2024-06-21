"use client";

import ModalAlert from "@/features/ui/ModalAlert";
import useModalAlertStore from "@/features/globalState/zustand/modalAlert";

export default function ModalContainer() {
  const {
    isOpen: isOpenModalAlert,
    openModalAlert,
    closeModalAlert,
    ...modalAlertState
  } = useModalAlertStore();

  return (
    <>
      {isOpenModalAlert && (
        <ModalAlert
          isOpen={isOpenModalAlert}
          onClose={closeModalAlert}
          {...modalAlertState}
        />
      )}
    </>
  );
}
