const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-t-transparent border-red-600 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
