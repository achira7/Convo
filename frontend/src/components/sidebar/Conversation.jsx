const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-emerald-500 duration-100 rounded px-2 py-1 cursor-pointer">
        <div className="avatar online">
            <div className="w-12 rounded-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s" alt="User Avatar" />
            </div>
        </div>
        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-black">John Doe</p>
                <span className="text-xl">👽</span>
            </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
};

export default Conversation;
