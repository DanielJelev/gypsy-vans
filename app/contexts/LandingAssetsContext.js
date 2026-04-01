'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const LandingAssetsContext = createContext({ getAsset: () => null, loaded: false });

/** Strip the extension from a filename: "_DSC6430.webp" → "_DSC6430" */
function baseName(name) {
  const dot = name.lastIndexOf('.');
  return dot > 0 ? name.slice(0, dot) : name;
}

export function LandingAssetsProvider({ children }) {
  const [assetMap, setAssetMap] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch('/api/landing')
      .then((res) => res.json())
      .then((data) => {
        if (data.files) {
          const map = {};
          data.files.forEach((f) => {
            // Index by exact name AND by basename so lookups work
            // regardless of extension (.webp, .jpeg, .png, etc.)
            map[f.name] = f;
            map[baseName(f.name)] = f;
          });
          setAssetMap(map);
        }
      })
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  /** Look up a Drive asset by filename or basename (without extension). */
  const getAsset = (filename) => {
    const file = assetMap[filename] || assetMap[baseName(filename)];
    return file ? file.src : null;
  };

  /** Get thumbnail URL for an image by filename or basename. */
  const getThumbnail = (filename) => {
    const file = assetMap[filename] || assetMap[baseName(filename)];
    return file?.thumbnail || null;
  };

  return (
    <LandingAssetsContext.Provider value={{ getAsset, getThumbnail, loaded }}>
      {children}
    </LandingAssetsContext.Provider>
  );
}

export function useLandingAssets() {
  return useContext(LandingAssetsContext);
}
