import Link from "next/link";
const NotFound = () => {
  return (
    <div className="h-[calc(100vh-180px)] flex flex-col justify-center items-center">
      <h2>Not Found!</h2>
      <p>Sorry, the page you are looking for does not exit. </p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
