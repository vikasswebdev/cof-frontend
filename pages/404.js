import Link from "next/link";

// pages/404.js
export default function Custom404() {
  return (
    <main class="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-9xl font-semibold text-black">404</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            class="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}
