// These exports will need to be deno compatible, but the types should match
import { Request } from 'express.js'
import HttpResponse from 'http-response.js'
import { IJsonResponse, JsonResponse } from '../../types/JsonResponse'

// GET request to /api/books
// Case insensitive - get, Get, GET, etc. all work
export const GET = (req: Request): IJsonResponse => {
        const body = {
                ping: "pong",
                ping: { double: "pong", triple: "pong" }
        }
        const headers = { apiKey: "12345597" }

        return new JsonResponse(HttpResponse.OK, body, headers)
}

// POST request to /api/books
// Case insensitive - post, Post, POST, etc. all work
export const POST = (req: Request): JsonResponse => {
        const postBody = req.body // This is the body of the request
        const body = {
                ping: "created",
        }
        const headers = { apiKey: "12345597" }

        return new JsonResponse(HttpResponse.Created, body, headers)
}

// PUT request to /api/books
// Returns a simple string that will be served
// Case insensitive - put, Put, PUT, etc. all work
export const Put = (req: Request): string => {
        return "<h1>PUT request to /api/books</h1>"
}

// Default request to /api/books
// This function is optional and can contain special logic for handling requests that do not match any other method
// If this function is not specified, the default response will be a 405 Method Not Allowed error
// Alternatively, you can only write a default function and not specify any other methods
export default function Default(req: Request): JsonResponse {
        return new JsonResponse(HttpResponse.MethodNotAllowed, {}, {})
}
