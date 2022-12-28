export const GET = (req: Request): JsonResponse => {
    const body = { movie: "Birdman" }

    return new JsonResponse(HttpResponse.OK, body, {})
}