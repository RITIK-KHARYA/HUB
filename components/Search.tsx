"use client";

import { PlaceholdersAndVanishInput } from "./placeholders-and-vanish-input";

const Search = () => {
  const placeholders = [
    "What happened? in the 90s",
    "What's going around the globe",
    "how the new tech is working around",
    "how the world would look in 2049",
    "How did covid break out",
  ];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <PlaceholdersAndVanishInput
      placeholders={placeholders}
      onChange={handleChange}
      onSubmit={onSubmit}
    />
  );
};

export default Search;
