// Helper function to get optimized image URL
export const getOptimizedImageUrl = (url: string, width?: number, height?: number): string => {
  // For Unsplash images, you can add parameters for optimization
  if (url.includes('unsplash.com')) {
    const baseUrl = url.split('?')[0];
    const params = new URLSearchParams();
    if (width) params.append('w', width.toString());
    if (height) params.append('h', height.toString());
    params.append('auto', 'format');
    params.append('fit', 'crop');
    params.append('q', '80');
    return `${baseUrl}?${params.toString()}`;
  }
  
  // For local images, you might want to use different sizes
  // This is a placeholder - implement according to your build setup
  return url;
};

// Lazy loading helper
export const lazyLoadImage = (imageUrl: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
};