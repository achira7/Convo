import { useState } from "react";
import { BiSolidSend } from "react-icons/bi";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const {loading, sendMessage} = useSendMessage()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage('');
  }

  return (
    <form action="" className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-emerald-600 border-emerald-950 text-white"
          placeholder="Send a Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? <div className="loading loading-spinner"></div> : <BiSolidSend className="w-6 h-6 text-white" /> }
          
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
