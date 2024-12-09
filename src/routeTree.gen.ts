/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root"
import { Route as LayoutImport } from "./routes/_layout"
import { Route as AuthenticatedImport } from "./routes/_authenticated"
import { Route as LayoutIndexImport } from "./routes/_layout.index"
import { Route as AuthenticatedLayoutImport } from "./routes/_authenticated/_layout"
import { Route as AuthenticatedLayoutPostsImport } from "./routes/_authenticated/_layout.posts"

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
	id: "/_layout",
	getParentRoute: () => rootRoute,
} as any)

const AuthenticatedRoute = AuthenticatedImport.update({
	id: "/_authenticated",
	getParentRoute: () => rootRoute,
} as any)

const LayoutIndexRoute = LayoutIndexImport.update({
	id: "/",
	path: "/",
	getParentRoute: () => LayoutRoute,
} as any)

const AuthenticatedLayoutRoute = AuthenticatedLayoutImport.update({
	id: "/_layout",
	getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedLayoutPostsRoute = AuthenticatedLayoutPostsImport.update({
	id: "/posts",
	path: "/posts",
	getParentRoute: () => AuthenticatedLayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
	interface FileRoutesByPath {
		"/_authenticated": {
			id: "/_authenticated"
			path: ""
			fullPath: ""
			preLoaderRoute: typeof AuthenticatedImport
			parentRoute: typeof rootRoute
		}
		"/_layout": {
			id: "/_layout"
			path: ""
			fullPath: ""
			preLoaderRoute: typeof LayoutImport
			parentRoute: typeof rootRoute
		}
		"/_authenticated/_layout": {
			id: "/_authenticated/_layout"
			path: ""
			fullPath: ""
			preLoaderRoute: typeof AuthenticatedLayoutImport
			parentRoute: typeof AuthenticatedImport
		}
		"/_layout/": {
			id: "/_layout/"
			path: "/"
			fullPath: "/"
			preLoaderRoute: typeof LayoutIndexImport
			parentRoute: typeof LayoutImport
		}
		"/_authenticated/_layout/posts": {
			id: "/_authenticated/_layout/posts"
			path: "/posts"
			fullPath: "/posts"
			preLoaderRoute: typeof AuthenticatedLayoutPostsImport
			parentRoute: typeof AuthenticatedLayoutImport
		}
	}
}

// Create and export the route tree

interface AuthenticatedLayoutRouteChildren {
	AuthenticatedLayoutPostsRoute: typeof AuthenticatedLayoutPostsRoute
}

const AuthenticatedLayoutRouteChildren: AuthenticatedLayoutRouteChildren = {
	AuthenticatedLayoutPostsRoute: AuthenticatedLayoutPostsRoute,
}

const AuthenticatedLayoutRouteWithChildren = AuthenticatedLayoutRoute._addFileChildren(
	AuthenticatedLayoutRouteChildren,
)

interface AuthenticatedRouteChildren {
	AuthenticatedLayoutRoute: typeof AuthenticatedLayoutRouteWithChildren
}

const AuthenticatedRouteChildren: AuthenticatedRouteChildren = {
	AuthenticatedLayoutRoute: AuthenticatedLayoutRouteWithChildren,
}

const AuthenticatedRouteWithChildren = AuthenticatedRoute._addFileChildren(
	AuthenticatedRouteChildren,
)

interface LayoutRouteChildren {
	LayoutIndexRoute: typeof LayoutIndexRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
	LayoutIndexRoute: LayoutIndexRoute,
}

const LayoutRouteWithChildren = LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
	"": typeof AuthenticatedLayoutRouteWithChildren
	"/": typeof LayoutIndexRoute
	"/posts": typeof AuthenticatedLayoutPostsRoute
}

export interface FileRoutesByTo {
	"": typeof AuthenticatedLayoutRouteWithChildren
	"/": typeof LayoutIndexRoute
	"/posts": typeof AuthenticatedLayoutPostsRoute
}

export interface FileRoutesById {
	__root__: typeof rootRoute
	"/_authenticated": typeof AuthenticatedRouteWithChildren
	"/_layout": typeof LayoutRouteWithChildren
	"/_authenticated/_layout": typeof AuthenticatedLayoutRouteWithChildren
	"/_layout/": typeof LayoutIndexRoute
	"/_authenticated/_layout/posts": typeof AuthenticatedLayoutPostsRoute
}

export interface FileRouteTypes {
	fileRoutesByFullPath: FileRoutesByFullPath
	fullPaths: "" | "/" | "/posts"
	fileRoutesByTo: FileRoutesByTo
	to: "" | "/" | "/posts"
	id:
		| "__root__"
		| "/_authenticated"
		| "/_layout"
		| "/_authenticated/_layout"
		| "/_layout/"
		| "/_authenticated/_layout/posts"
	fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
	AuthenticatedRoute: typeof AuthenticatedRouteWithChildren
	LayoutRoute: typeof LayoutRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
	AuthenticatedRoute: AuthenticatedRouteWithChildren,
	LayoutRoute: LayoutRouteWithChildren,
}

export const routeTree = rootRoute
	._addFileChildren(rootRouteChildren)
	._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_authenticated",
        "/_layout"
      ]
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/_layout"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/"
      ]
    },
    "/_authenticated/_layout": {
      "filePath": "_authenticated/_layout.tsx",
      "parent": "/_authenticated",
      "children": [
        "/_authenticated/_layout/posts"
      ]
    },
    "/_layout/": {
      "filePath": "_layout.index.tsx",
      "parent": "/_layout"
    },
    "/_authenticated/_layout/posts": {
      "filePath": "_authenticated/_layout.posts.tsx",
      "parent": "/_authenticated/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
