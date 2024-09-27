import { QueryStoreValue } from 'src/_libs/types/common';
import { create } from 'zustand';

type StoreValue = QueryStoreValue<GithubProfile>;

type GithubProfile = {
  avatar_url: string;
  name: string;
  bio: string | null;
};

const useGithubProfileStore = create<StoreValue>((set) => {
  const initialState: StoreValue = {
    isLoading: true,
    isError: false,
    data: undefined,
  };

  (async () => {
    try {
      const profile = await getGithubProfile();
      set({ ...initialState, isLoading: false, data: profile });
    } catch (e) {
      set({ ...initialState, isLoading: false, isError: true });
    }
  })();

  return initialState;
});

export const useGithubProfile = () => useGithubProfileStore((state) => state);

async function getGithubProfile() {
  const url = `https://api.github.com/users/hanse-kim`;
  const response = await fetch(url);
  const profile = await response.json();

  return profile as GithubProfile;
}
