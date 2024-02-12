import { create } from 'zustand'

 const useBearStore = create((set) => ({
  topLoading: '',
  globalLoading:true,
  callbacks:'',
  openTopLoading: (ref) => set({ topLoading: ref }),
  closeGlobalLoading: () => set({ globalLoading: false }),
  openGlobalLoading: () => set({ globalLoading: true }),
  registerCallback: (callback) => set((state) => ({ callbacks: [...state.callbacks, callback] })),
  
}))
export default useBearStore