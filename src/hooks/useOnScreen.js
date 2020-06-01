import { useState, useEffect } from 'react';

export default function useOnScreen(ref, fireOnce = false, root = null, rootMargin = '0px', threshold = 0) {

    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);

    const config = {
      root: root, // avoiding 'root' or setting it to 'null' sets it to default value: viewport
      rootMargin: rootMargin,
      threshold: threshold,
    }

    let callback = (entries, observer) => {
      entries.forEach(entry => {
        
        setIntersecting(entry.isIntersecting);

        if(fireOnce === true && entry.isIntersecting === true){
          observer.unobserve(ref.current);
        } 
        
      });
    };

    useEffect(() => {
      const observeElement = ref.current;

      const observer = new IntersectionObserver(
        callback,
        config
      );

      if (observeElement) {
        observer.observe(observeElement);
      }
      return () => {
        observer.unobserve(observeElement);
      };
    }); // Empty array ensures that effect is only run on mount and unmount
  
    return isIntersecting;

}