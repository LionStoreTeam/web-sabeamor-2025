const LoaderCircle = () => {
  return (
    <div className="flex min-h-screen items-center justify-center absolute inset-0">
      <div className="relative">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-primary"></div>
        <div className="absolute inset-0 h-12 w-12 animate-ping rounded-full border-4 border-white opacity-20"></div>
      </div>
    </div>
  );
};

export default LoaderCircle;
