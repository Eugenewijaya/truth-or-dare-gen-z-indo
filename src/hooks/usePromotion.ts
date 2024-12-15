import { useState, useEffect } from 'react';

export const usePromotion = (intervalMs: number = 1200000) => {
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPromo(true);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs]);

  return { showPromo, setShowPromo };
};