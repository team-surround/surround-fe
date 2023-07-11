import { create } from "zustand";
import { SAMPLE_DATA } from "../components/Modal/modalData";

const useStore = create((set) => ({
  // MARK: Splash
  isSplashOpen: true,
  setIsSplashOpen: () =>
    set((state) => ({ isSplashOpen: !state.isSplashOpen })),

  // MARK: Main
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),

  isOpenModal: false,
  setIsOpenModal: () => set((state) => ({ isOpenModal: !state.isOpenModal })),

  modalData: SAMPLE_DATA,
  setModalData: (state) => set({ modalData: state }),
}));

export default useStore;
