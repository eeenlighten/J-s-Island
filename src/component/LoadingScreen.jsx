import React, { useEffect, useState } from 'react'
import { useProgress } from "@react-three/drei";

function LoadingScreen({ started, onStarted }) {
  const { progress } = useProgress();
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loadingScreen ${started ? "loadingScreen--started" : ""}`}>
            <div className="loadingScreen__progress">
        <div
          className="loadingScreen__progress__value"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
      <div className="loadingScreen__board" style={{ opacity }}>
        <button
          className="loadingScreen__button"
          disabled={progress < 100}
          onClick={onStarted}
        >
          START
        </button>
      </div>
    </div>
  )
}

export default LoadingScreen