"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({
  currentPage,
  hasPrev,
  hasNext,
}: {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const currentPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="mt-12 flex justify-between w-full">
      <button
        className="rounded-md bg-cyan-400 text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-cyan-200"
        disabled={!hasPrev}
        onClick={() => currentPageUrl(currentPage - 1)}
      >
        Previous
      </button>
      <button
        className="rounded-md bg-cyan-400 text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-cyan-200"
        disabled={!hasNext}
        onClick={() => currentPageUrl(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
