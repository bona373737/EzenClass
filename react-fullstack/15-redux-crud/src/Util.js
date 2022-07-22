const pending = (state, {payload})=>{
    return { ...state, loading:true}
}
const fulfilled = (state, {payload})=>{
    return {
        loading: false,
        data: payload?.data,
        error: null
    }
}
const rejected=(state, {payload})=>{
    return {
        ...state,
        loading: false,
        error: {
            code: payload?.data?.rt? payload?.data?.rt : (payload?.status ? payload.status: 500),
            message: payload?.data?.rtmsg? payload?.data?.rtmsg:(payload?.statusText? payload.statusText: 'Server Error')
        }
    }
}

export {pending, fulfilled, rejected};