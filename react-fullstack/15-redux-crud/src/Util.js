const pending = (state, {payload})=>{
    return { ...state, loading:true}
}
const fulfilled = (state, {payload})=>{
    return {
        meta: payload?.data?.meta,
        documents : payload?.data?.documents,
        loading: false,
        error: null
    }
}
const rejected=(state, {payload})=>{
    return {
        meta: null,
        documents: null,
        loading: false,
        error: {
            code: payload?.data?.rt? payload?.data?.rt : (payload?.status ? payload.status: 500),
            message: payload?.data?.rtmsg? payload?.data?.rtmsg:(payload?.statusText? payload.statusText: 'Server Error')
        }
    }
}

export {pending, fulfilled, rejected};