type StorageKey = string;

type StorageType = 'session' | 'local';

abstract class StorageUtils {
  protected static storageType: StorageType;

  static set<T = unknown>(key: StorageKey, data: T, storage?: Storage) {
    const storageItem =
      typeof data === 'object' ? JSON.stringify(data) : `${data}`;
    (storage || this.storage).setItem(key, storageItem);
  }

  static get<T = unknown>(key: StorageKey): T | null {
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

  static pop<T = unknown>(key: StorageKey): T | null {
    const storageData = this.get<T>(key);
    this.storage.removeItem(key);
    return storageData;
  }

  static remove(key: StorageKey) {
    this.storage.removeItem(key);
  }

  private static get storage() {
    return this.storageType === 'local' ? localStorage : sessionStorage;
  }
}

export class LocalStorageUtils extends StorageUtils {
  protected static override storageType: StorageType = 'local';
}

export class SessionStorageUtils extends StorageUtils {
  protected static override storageType: StorageType = 'session';
}
