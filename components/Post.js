import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import {
  BookmarkAltIcon,
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

function Post({ id, username, userImg, img, caption }) {
  return (
    <div className="bg-white my-4 md:border md:border-gray-300 md:my-7 md:rounded-md">
      {/* Head  */}
      <div className="p-3 flex items-center ">
        <img
          src={userImg}
          className="rounded-full h-9 w-9 mr-2 p-[1.5px] border-red-500 border-[2px] object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
          alt="user image"
        />
        <p className="text-sm font-semibold flex-1">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* Post Image  */}
      <img
        src={img}
        className="w-full h-1/2 object-cover border-0"
        alt="post image"
      />

      <div className="flex justify-between px-3.5 pt-4">
        <div className="flex space-x-3">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* Caption  */}
      <div className="p-3.5 text-sm">
        <p className="pb-2 font-semibold">161 likes</p>
        <span className="mr-1.5 truncate font-semibold">{username}</span>
        {caption}
      </div>

      {/* Comments  */}
      <div className="flex px-3.5 pb-3 md:py-2 md:border-t items-center">
        <form className="flex flex-1 items-center ">
          <EmojiHappyIcon className="btn" />
          <input
            type="text"
            className="text-xs outline-none focus:ring-0 border-none"
            placeholder="Add a comment..."
          ></input>
        </form>
        <p className="text-blue-200 text-xs font-bold">Post</p>
      </div>
    </div>
  );
}

export default Post;
