import React, { FunctionComponent } from 'react';

export interface ProductImageProps {
  src: string;
  alt?: string;
}

export const ProductImage: FunctionComponent<ProductImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt || src} style={{ width: 35, height: 35, borderRadius: '100%' }} />;
};
