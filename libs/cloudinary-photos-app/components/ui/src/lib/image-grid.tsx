'use client';

import { ReactNode } from 'react';
import { SearchResult } from '@nx-pnpm-monorepo/cloudinary-photos-app/types';

const MAX_COLUMNS = 4;

export function ImageGrid({
  images,
  getImage,
}: {
  images: SearchResult[];
  getImage: (imagedata: SearchResult) => ReactNode;
}) {
  function getColumns(colIndex: number) {
    return images.filter((resource, idx) => idx % MAX_COLUMNS === colIndex);
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map((column, idx) => (
        <div key={idx} className="flex flex-col gap-4">
          {column.map(getImage)}
        </div>
      ))}
    </div>
  );
}
