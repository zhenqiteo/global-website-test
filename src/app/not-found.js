import React from "react";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <div className="max-w-md space-y-8">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700">Page Not Found</h2>
        <p className="text-lg text-gray-600">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">CLICK BACK HOME</Link>
        {/* <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
          
          <Button variant="outline" asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div> */}
      </div>
    </div>
  );
}
