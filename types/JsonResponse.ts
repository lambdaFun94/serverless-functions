import HttpResponse from 'http-response.js';

interface IJsonResponse {
    status: HttpResponse | number,
    body: any,
    headers: any
}

export class JsonResponse implements IJsonResponse {
    status: HttpResponse | number;
    body: any;
    headers: any;

    constructor(status: HttpResponse, body?: any, headers?: any) {
        this.status = status;
        this.body = body === undefined ? {} : body;
        this.headers = headers;
        this.headers["Content-Type"] = "application/json";
    }
}
