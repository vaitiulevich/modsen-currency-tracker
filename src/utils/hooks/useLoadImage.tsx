import { useEffect, useState } from 'react';
import { ERR_LOAD_IMG_MESS } from '@constants/messages';

const useLoadImage = (code?: string) => {
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
          console.error(ERR_LOAD_IMG_MESS, err);
          setError(ERR_LOAD_IMG_MESS);
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
