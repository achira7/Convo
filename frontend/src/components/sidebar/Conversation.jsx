import { useSocketContext } from "../../context/SocketContext";
import useConversatoin from "../../zustand/useConversation";

const Conversation = ({conversation, lastIdx, emoji}) => {
  const {selectedConversation, setSelectedConversation} = useConversatoin();

  const isSelected = selectedConversation?._id === conversation._id;
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id)
  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-emerald-500 duration-100 rounded px-2 py-1 cursor-pointer
        ${isSelected ? "bg-sky-300" : ""}
        `}
        onClick={() => setSelectedConversation(conversation)}
        >
    <div className={`avatar ${isOnline ? "online" : ""}`}>
            <div className="w-12 rounded-full">
                <img src={conversation.profilePic} alt={`${conversation.fullName}'s Avatar`} />
            </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-semibold text-emerald-900 ml-3">{conversation.fullName}</p>
                <span className="text-xl">{emoji}</span>
            </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" /> }
    </>
  );
};

export default Conversation;
