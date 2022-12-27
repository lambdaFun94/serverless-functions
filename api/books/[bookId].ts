import { JsonResponse } from "../../types/JsonResponse";
p
// GET /api/books/[bookId]
const Get = (req: Request): JsonResponse => {
    const bookId = req.path.bookId
    const body = { bookId: bookId }

    return new JsonResponse(HttpResponse.OK, body, {})
}
