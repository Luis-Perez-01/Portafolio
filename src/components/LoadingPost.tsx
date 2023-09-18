export default function LoadingPost() {
  return (
    <div className="max-w-screen-lg min-w-screen-lg w-full my-10 px-5 lg:px-0 mx-auto">
      <div className="animate-pulse">
        <div className="flex justify-between mb-10 mx-10 md:mx-auto">
          <div className="w-16 h-4 bg-gray-300 dark:bg-gray-700"></div>
          <div className="w-36 h-4 bg-gray-300 dark:bg-gray-700"></div>
        </div>
        <div className="my-10 mx-10 md:mx-auto space-y-1">
          <div className="w-full h-7 bg-gray-300 dark:bg-gray-700"></div>
          <div className="w-3/4 h-7 bg-gray-300 dark:bg-gray-700"></div>
          <div className="space-y-2 pt-8">
            <div className="w-full h-5 bg-gray-300 dark:bg-gray-700"></div>
            <div className="w-full h-5 bg-gray-300 dark:bg-gray-700"></div>
            <div className="w-full h-5 bg-gray-300 dark:bg-gray-700"></div>
            <div className="w-3/4 h-5 bg-gray-300 dark:bg-gray-700"></div>
          </div>
          <div className="pt-8">
            <div className="w-full h-[35rem] bg-gray-300 dark:bg-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
