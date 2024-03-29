'use client';

import { SearchResult } from '@nx-pnpm-monorepo/cloudinary-photos-app/types';
import { CloudinaryImage, ImageGrid } from '@nx-pnpm-monorepo/cloudinary-photos-app/components/ui';

export default function GalleryGrid({ images }: { images: SearchResult[] }) {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: SearchResult) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            imagedata={imageData}
            width="400"
            height="300"
            alt="an image of something"
            onClick={() => (location.href = `/detail?publicId=${encodeURIComponent(imageData.public_id)}`)}
          />
        );
      }}
    />
  );
}
