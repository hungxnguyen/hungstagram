import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

function signIn({ providers }) {
  console.log(providers);
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen -mt-36 text-center">
        <img
          src="/images/insta_logo.png"
          className="w-64"
          alt="Instagram logo"
        />
        <p className="text-sm italic ">
          This is NOT a real app, it is built soley for entertainment. <br />{" "}
          But please DO try this at home.
        </p>
        <div className="mt-10">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="bg-blue-500 rounded-lg p-3 text-white shadow-md md:text-sm"
                onClick={() =>
                  SignIntoProvider(provider.id, {
                    callbackUrl: "https://hungstagram.vercel.app/",
                  })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signIn;
