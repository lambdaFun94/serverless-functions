import { JsonResponse } from "../../types/JsonResponse";
import HttpResponse from "http-response.js";

// GET /api/books/[bookId]
const GET = (req: Request): JsonResponse => {
    const { bookId } = req.routing
    const body = { bookId }

    return new JsonResponse(HttpResponse.OK, body, {})
}
