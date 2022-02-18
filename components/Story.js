function Story({ img, username }) {
  return (
    <div>
      <img
        className="h-16 w-16 rounded-full border-red-500 p-[1.5px] border-[2.5px] object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
        src={img}
        alt="profile pic"
      />
      <p className="text-xs w-16 text-center truncate mt-1">{username}</p>
    </div>
  );
}

export default Story;
