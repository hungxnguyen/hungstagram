import Image from "next/image";
import {
  SearchIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Header() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const router = useRouter();

  const handleRouteToHome = () => {
    router.push("/");
  };

  return (
    <div className="bg-white sticky top-0 shadow z-50 py-1">
      <div className="flex justify-between max-w-5xl mx-5 lg:mx-auto">
        {/* Left Side -- IG logo/icon */}
        <div
          onClick={handleRouteToHome}
          className="relative hidden lg:inline-grid my-3 w-36 cursor-pointer"
        >
          <Image src="/images/hungstagram-logo.png" layout="fill" />
        </div>
        <div
          onClick={handleRouteToHome}
          className="relative w-9 lg:hidden flex-shrink-0 cursor-pointer"
        >
          <Image
            src="/images/insta_mobile_logo.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle -- search bar */}
        <div className="w-1/2 lg:w-1/3">
          <div className="relative my-1.5 p-1 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-4 w-4 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 text-sm border-solid border-gray-300 focus:ring-gray-300 focus:border-gray-400 rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right Side -- icons */}
        <div className="flex items-center space-x-2.5 md:space-x-6">
          <img
            src="/images/home.svg"
            onClick={handleRouteToHome}
            className="navBtn"
            alt="explore icon"
          />

          <MenuIcon className="h-6 md:hidden cursor-pointer heroicon-stroke-w-2.5" />

          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-2 -right-1 text-xs bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </div>
              </div>

              <img
                src="/images/newpost.svg"
                onClick={() => setIsOpen(true)}
                alt="explore icon"
                className="navBtn"
              />

              <img
                src="/images/explore.svg"
                alt="explore icon"
                className="navBtn"
              />

              <img
                src="/images/heart.svg"
                alt="explore icon"
                className="navBtn"
              />

              <img
                onClick={signOut}
                src={session.user.image}
                alt="profile pic"
                className="h-8 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
