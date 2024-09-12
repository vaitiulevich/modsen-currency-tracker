import { useEffect, useState } from 'react';

const useLoadImage = (code: string | undefined) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      if (code) {
        setLoading(true);
        setError(null);

        try {
          const imageModule = await import(`@assets/icons/${code}.svg`);
          setImageUrl(imageModule.default);
        } catch (err) {
          console.error('Error loading image:', err);
          setError('Error loading image');
        } finally {
          setLoading(false);
        }
      } else {
        setImageUrl(null);
        setLoading(false);
      }
    };

    loadImage();
  }, [code]);

  return { imageUrl, loading, error };
};

export default useLoadImage;
