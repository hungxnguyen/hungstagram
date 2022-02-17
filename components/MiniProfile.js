import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Miniprofile() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleAccountSwitch = () => {
    router.push("auth/signin");
  };

  return (
    <div className="flex items-center justify-between mt-7 ml-10">
      <img
        src={session?.user?.image}
        alt="profile pic"
        className="h-14 w-14 rounded-full cursor-pointer p-[2px] border"
      />

      <p className="text-sm font-semibold mx-2.5 flex-1">
        {session?.user?.username}
      </p>

      <button
        onClick={handleAccountSwitch}
        className="text-blue-500 text-xs font-bold"
      >
        Switch
      </button>
    </div>
  );
}

export default Miniprofile;
