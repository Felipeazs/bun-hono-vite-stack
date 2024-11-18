import packageJSON from "../../package.json"
import { apiReference } from "@scalar/hono-api-reference"

import { AppOpenAPI } from "./types"

export default function configureOpenAPI(app: AppOpenAPI) {
	app.doc("/doc", {
		openapi: "3.0.0",
		info: {
			version: packageJSON.version,
			title: "Bagán! API Documentation",
		},
	})

	app.get(
		"/reference",
		apiReference({
			defaultHttpClient: {
				targetKey: "javascript",
				clientKey: "fetch",
			},
			spec: {
				url: "/doc",
			},
		}),
	)
}
