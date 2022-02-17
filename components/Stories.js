import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";

function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const suggestions = [...Array(25)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    // [...Array(20)];
    // Array.from(Array(20));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className="flex space-x-4 p-5 bg-white mt-4 border-gray-200 border rounded-sm md:rounded-md overflow-x-scroll scrollbar-track-gray-200 scrollbar-thin scrollbar-thumb-red-400">
      {session && (
        <Story
          key={session.user.uid}
          img={session.user.image}
          username={session.user.username}
        />
      )}

      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={`https://avatars.dicebear.com/api/open-peeps/${profile.username}.svg`}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
