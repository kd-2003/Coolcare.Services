function Loader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary shadow-md">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    </div>
  );
}

export default Loader;
