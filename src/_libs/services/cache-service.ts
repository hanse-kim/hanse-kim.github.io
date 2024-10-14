type CacheServiceOptions<T> = {
  initial?: Iterable<readonly [string, T]> | null | undefined;
  maxCacheSize?: number;
  cacheExpiryTime?: number;
};

export class CacheService<T> {
  private _maxCacheSize: number;
  private _cache: Map<string, T>;

  constructor(options: CacheServiceOptions<T> = {}) {
    this._maxCacheSize = options.maxCacheSize || Infinity;
    this._cache = new Map<string, T>(options.initial);
  }

  set(key: string, data: T) {
    this._cache.set(key, data);
    if (this._cache.size > this._maxCacheSize) {
      this._deleteOldestData();
    }
  }

  get(key: string) {
    if (!this._cache.has(key)) {
      return undefined;
    }

    this._refreshEntry(key);

    return this._cache.get(key);
  }

  private _deleteOldestData() {
    const oldestKey = this._cache.keys().next().value;
    if (oldestKey) {
      this._cache.delete(oldestKey);
    }
  }

  private _refreshEntry(key: string) {
    const data = this._cache.get(key);
    if (data) {
      this._cache.delete(key);
      this._cache.set(key, data);
    }
  }
}
