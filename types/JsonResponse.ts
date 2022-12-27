import HttpResponse from 'http-response.js';

export interface IJsonResponse {
    status: HttpResponse,
    body: any,
    headers: any
}

export class JsonResponse {
    status: HttpResponse;
    body: any;
    headers: any;

    constructor(status: HttpResponse, body: any, headers: any) {
        this.status = status;
        this.body = body;
        this.headers = headers;
        this.headers["Content-Type"] = "application/json";
    }
}
