import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

function signIn({ providers }) {
  console.log(providers);
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen -mt-36 text-center">
        <img
          src="/images/hungstagram-logo.png"
          className="w-60 md:w-64"
          alt="Instagram logo"
        />
        <p className="text-sm italic mt-1">
          This app is built soley for entertainment.
        </p>
        <div className="mt-8 md:mt-10">
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
