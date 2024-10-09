import { envUtils } from './env-utils';

type StorageKey = string;

type StorageType = 'session' | 'local';

class StorageUtils {
  private storage: Storage;

  constructor(storageType: StorageType) {
    if (!envUtils.isClient) {
      this.storage = {} as Storage;
      return;
    }

    this.storage = storageType === 'local' ? localStorage : sessionStorage;
  }

  set<T = unknown>(key: StorageKey, data: T, storage?: Storage) {
    const storageItem =
      typeof data === 'object' ? JSON.stringify(data) : `${data}`;
    (storage || this.storage).setItem(key, storageItem);
  }

  get<T = unknown>(key: StorageKey): T | null {
    const storageItem = this.storage.getItem(key);

    const data =
      storageItem?.startsWith('{') ||
      storageItem?.startsWith('[') ||
      storageItem === 'null' ||
      storageItem === 'true' ||
      storageItem === 'false'
        ? JSON.parse(`${storageItem}`)
        : storageItem;

    return data;
  }

  pop<T = unknown>(key: StorageKey): T | null {
    const storageData = this.get<T>(key);
    this.storage.removeItem(key);
    return storageData;
  }

  remove(key: StorageKey) {
    this.storage.removeItem(key);
  }
}

export const localStorageUtils = new StorageUtils('local');
export const sessionStorageUtils = new StorageUtils('session');
