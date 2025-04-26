import { create } from 'zustand'

interface ModalStoreProps {
  count: number
  inc: () => void
}

const useStore = create<ModalStoreProps>((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 }))
}))
