import { QueryStoreValue } from 'src/_libs/types/common';
import { create } from 'zustand';

type StoreValue = QueryStoreValue<GithubProfile>;

type GithubProfile = {
  avatar_url: string;
  name: string;
  bio: string | null;
};

const useGithubProfileStore = create<StoreValue>((set) => {
  const fetchData = async () => {
    try {
      const profile = await getGithubProfile();
      set({ isLoading: false, isError: false, data: profile });
    } catch (e) {
      set({ isLoading: false, isError: true, data: undefined });
    }
  };

  fetchData();

  return {
    isLoading: true,
    isError: false,
    data: undefined,
  };
});

export const useGithubProfile = () => useGithubProfileStore((state) => state);

async function getGithubProfile() {
  const url = `https://api.github.com/users/hanse-kim`;
  const response = await fetch(url);
  const profile = await response.json();

  return profile as GithubProfile;
}
