export type QueryStoreValue<T> =
  | { isLoading: true; isError: false; data: undefined }
  | { isLoading: false; isError: true; data: undefined }
  | {
      isLoading: false;
      isError: false;
      data: T;
    };
