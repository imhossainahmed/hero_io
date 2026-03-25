const AppCardSkeleton = () => {
  return (
    <div className="card shadow-md border border-gray-300/50 bg-white p-4 gap-4 animate-pulse">
      
      <div className="w-full h-40 bg-gray-200 rounded-md"></div>

      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>

      <div className="flex items-center justify-between mt-2">
        <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
        <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
      </div>

    </div>
  );
};

export default AppCardSkeleton;