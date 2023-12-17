import { useState, useEffect } from "react";

const LoaderWithTime = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {isLoading && (
        <div className="loader">Loading...</div> 
      )}
    </div>
  );
};

export default LoaderWithTime;
