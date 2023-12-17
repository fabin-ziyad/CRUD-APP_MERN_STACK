//For now not using redux, there is only a simple thing. So im going to use direct store to local storage

export const storeFilter = (data) => {
    if (data) {
        localStorage.setItem("filter",data)
    }
    return localStorage.getItem("filter")
}