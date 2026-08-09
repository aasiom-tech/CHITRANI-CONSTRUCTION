export interface SuccessResponse<T = unknown> {
  success: true;
  data: T;
  meta?: {
    requestId?: string;
  };
}

export interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    fields?: Record<string, string>;
  };
  meta?: {
    requestId?: string;
  };
}

export function successResponse<T>(data: T, requestId?: string): SuccessResponse<T> {
  return {
    success: true,
    data,
    meta: requestId ? { requestId } : undefined,
  };
}

export function errorResponse(
  code: string,
  message: string,
  requestId?: string,
  fields?: Record<string, string>,
): ErrorResponse {
  return {
    success: false,
    error: {
      code,
      message,
      ...(fields ? { fields } : {}),
    },
    meta: requestId ? { requestId } : undefined,
  };
}
