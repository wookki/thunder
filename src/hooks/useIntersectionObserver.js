import { useEffect, useRef, useState } from "react";

const useIntersectionObserve = (callback) => {
  const [observationTarget, setObservationTarget] = useState(null); // 관찰대상
  const observer = useRef(
    new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return; // 교차 되지않으면 리턴
        callback();
      },
      { threshold: 0.5 }
    )
  );

  useEffect(() => {
    const currentTarget = observationTarget;
    const currentObserver = observer.current;
    if (currentTarget) {
      currentObserver.observe(currentTarget);
      console.log("타게팅 성공");
    }
    return () => {
      if (currentTarget) {
        currentObserver.unobserve(currentTarget);
      }
    };
  }, [observationTarget]);

  return setObservationTarget;
};

export default useIntersectionObserve;
