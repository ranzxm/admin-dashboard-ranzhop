/**
 * An array of routes that are used for public access,
 * These routes do not require for authentication.
 * @type {string[]}
 **/
export const publicRoutes = ["/"];

/**
 * An array of routes that are used for authentication,
 * These routes will redirect logged in users to /settings.
 * @type {string[]}
 **/
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * This prefix is used for API routes,
 * Routes that start with this prefix are used for API authentication purposes.
 * @type {string}
 **/
export const apiAuthPrefix = "/api/auth";

/**
 * This path is using for redirecting after login
 * @type {string}
 **/
export const DEFAULT_LOGIN_REDIRECT = "/settings";
