import { BiSolidSend } from "react-icons/bi";

const MessageInput = () => {
  return (
    <form action="" className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-400 border-gray-600 text-white"
          placeholder="Send a Message"
        />

        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <BiSolidSend className="w-6 h-6 text-white" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
