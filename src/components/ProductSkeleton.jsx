export default function ProductSkeleton() {
    return (
      <div className="flex flex-col md:flex-row gap-6 border-t border-gray-300 py-6 animate-pulse">
        <div className="w-full md:w-1/3 flex items-center justify-center">
          <div className="bg-gray-200 w-full h-auto max-w-[220px] aspect-square rounded" />
        </div>
  
        <div className="flex-1 flex flex-col justify-between text-sm">
          <div className="space-y-2">
            <div className="h-6 w-1/2 bg-gray-200 rounded" />
            <div className="h-4 w-1/3 bg-gray-200 rounded" />
  
            <div className="mt-4">
              <div className="h-4 w-24 bg-gray-200 rounded mb-2" />
              <div className="flex gap-4 mt-2">
                <div className="w-6 h-6 bg-gray-200 rounded" />
                <div className="w-6 h-6 bg-gray-200 rounded" />
                <div className="w-6 h-6 bg-gray-200 rounded" />
                <div className="w-6 h-6 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
  
          <div className="mt-4 pt-4 border-t border-gray-300">
            <div className="h-4 w-16 bg-gray-200 mb-1 rounded" />
            <div className="h-6 w-20 bg-gray-300 rounded" />
          </div>
        </div>
      </div>
    );
  }
  