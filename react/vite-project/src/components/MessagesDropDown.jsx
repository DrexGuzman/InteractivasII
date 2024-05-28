import Chat from "../assets/chat.svg";

export function MessagesDropDrown() {
    return (
        <button className="group relative sm:z-20">
            <div className="bg-amber-500 size-6 group-focus:scale-0 duration-200 rounded-full absolute left-4 bottom-4 font-extrabold">
                4
            </div>
            <img className="size-8 group-focus:opacity-70" alt="" src={Chat} />
            <div className="fixed inset-0 z-50 sm:absolute scale-y-0 group-focus:scale-y-100 origin-top duration-200 sm:w-[25rem] min-h-[33rem] ring-2 ring-blue-3 rounded-sm bg-blue-1 sm:inset-auto sm:right-0 sm:top-14">
                <div className="size-4 rotate-45 border-t-2 border-l-2 -z-0 absolute right-[2%] top-[-3%]"></div>
                <p className="pl-2 pt-2 text-texto font-second font-bold text-blue-3 border-t-2 border flex justify-between">
                    Mensajes <span className="pr-2 flex">salir <input className="size-7 fixed opacity-0 cursor-pointer" type="text" /> </span>
                </p>
                <ul className="text-texto font-second text-blue-3 overflow-y-auto overflow-hidden max-h-[33rem]">
                    <li className="hover:bg-blue-2 hover:text-white flex items-center pl-2">
                        <img alt="User Profile" className="rounded-full ring-4 ring-white size-[2rem]" src="https://randomuser.me/api/portraits/women/32.jpg" />
                        <div>
                            <p className="flex gap-1 pl-3 pt-2 relative">Laura Ruiz Hernández</p>
                            <p className="text-[12px] text-start pl-4 line-clamp-1 duration-200 hover:line-clamp-none">
                                Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                            </p>
                            <p className="text-[12px] text-start pl-4">ver más..</p>
                        </div>
                    </li>
                    <li className="hover:bg-blue-2 hover:text-white flex items-center pl-2">
                        <img alt="User Profile" className="rounded-full ring-4 ring-white size-[2rem]" src="https://randomuser.me/api/portraits/women/32.jpg" />
                        <div>
                            <p className="flex gap-1 pl-3 pt-2 relative">Laura Ruiz Hernández</p>
                            <p className="text-[12px] text-start pl-4 line-clamp-1 duration-200 hover:line-clamp-none">
                                Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                            </p>
                            <p className="text-[12px] text-start pl-4">ver más..</p>
                        </div>
                    </li>
                </ul>
            </div>
        </button>
    );
}
