import { useAuthContext } from '../../context/AuthContext';
import { extractTime } from '../../utils/extractTime';
import useConversatoin from '../../zustand/useConversation';

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversatoin();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt)
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-emerald-500' : 'bg-emerald-200';
  const shakeClass = message.shouldShake ? 'shake' : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar"> 
        <div className="w-10 rounded-full">
          <img
            src={profilePic}
            alt={`User Avatar`}
          />
        </div>
      </div>

      <div className={`chat-bubble text-slate-900 bg-emerald-200 ${bubbleBgColor} ${shakeClass} pb-2`}> {message.message} </div>
      <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}> {formattedTime}</div>
    </div>
  );
};

export default Message;
