import {
    SERVICES_UPLOAD_SUCCESS,
    SERVICES_UPLOAD_REQUEST,
    SERVICES_UPLOAD_FAILURE,
} from './actionTypes'

export function servicesUploadRequest(search) {
    return { type: SERVICES_UPLOAD_REQUEST, payload: { search } }
}

export function servicesUploadSuccess(items) {
    return { type: SERVICES_UPLOAD_SUCCESS, payload: { items } }
}

export function servicesUploadFailure(error) {
    return { type: SERVICES_UPLOAD_FAILURE, payload: { error } }
}
