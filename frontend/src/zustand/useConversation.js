import { create } from 'zustand';

const useConversatoin = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    messages: [],
    setMessages: (messages) => set({messages}),
}))

export default useConversatoin;