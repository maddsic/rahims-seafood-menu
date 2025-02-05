import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import tailwindStyles from "./tailwind.css?url";
import globalStyles from "./global.css?url";
import { BackButton } from "./components/BackButton/BackButton";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        {/* <Outlet /> */}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyles },
  { rel: "stylesheet", href: globalStyles },
];

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
          <h1 className="text-4xl font-bold text-red-500">Oh no!</h1>
          <p className="text-lg text-gray-600">
            An error occurred while rendering this page.
          </p>
          <div className="text-sm text-gray-500">
            <p>
              {isRouteErrorResponse(error)
                ? `${error.status} ${error.statusText}`
                : error instanceof Error
                ? error.message
                : "Unknown error"}
            </p>
            {/* <p>
              <pre>{error.stack}</pre>
            </p> */}
          </div>
          <BackButton />
        </div>
        <Scripts />
      </body>
    </html>
  );
}
