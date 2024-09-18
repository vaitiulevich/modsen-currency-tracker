import { ComponentType, useEffect, useRef, useState } from 'react';

import { Section } from './styled';

const withScrollAnimation = <P extends object>(
  WrappedComponent: ComponentType<P>,
) => {
  return (props: P) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.2 },
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

    return (
      <Section ref={ref} isvisible={isVisible}>
        <WrappedComponent {...props} />
      </Section>
    );
  };
};

export default withScrollAnimation;
