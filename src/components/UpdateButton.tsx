"use client";

import { useFormStatus } from "react-dom";

const UpdateButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="bg-cyan-400 cursor-pointer text-white p-2 rounded-md disabled:bg-cyan-200 disabled:cursor-not-allowed max-w-96"
    >
      {pending ? "Update..." : "Update"}
    </button>
  );
};

export default UpdateButton;
