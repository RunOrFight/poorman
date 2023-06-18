const InfiniteProgress = () => {
  return (
    <div className="bg-white w-full h-1 overflow-hidden">
      <div className="bg-purple h-full origin-left animate-[progress_1s_infinite]" />
    </div>
  );
};

export default InfiniteProgress;
