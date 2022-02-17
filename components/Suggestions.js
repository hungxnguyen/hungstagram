import { useState, useEffect } from "react";
import faker from "faker";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between mb-3">
        <p className="text-gray-500 text-sm font-semibold">
          Suggestions For You
        </p>
        <button className="text-xs font-semibold">See All</button>
      </div>

      {suggestions.map(({ id, username, company }) => (
        <div key={id} className="flex items-center py-1 mt-1 ">
          <img
            className="h-10 w-10 rounded-full cursor-pointer p-[2px] border-2 border-gray-300 "
            src={`https://avatars.dicebear.com/api/open-peeps/${username}.svg`}
            alt="profile pic"
          />

          <div className="flex-1 ml-4">
            <h2 className="text-xs font-semibold">{username}</h2>
            <h3 className="text-xs text-gray-400">Works at {company.name}</h3>
          </div>

          <button className="text-blue-400 text-xs font-bold ml-3">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
