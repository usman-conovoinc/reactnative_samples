import Axios from "axios";

export function getUsersAPI() {
    return Axios.request({
        method: "get",
        url: "https://my-json-server.typicode.com/usman-conovoinc/fakeServer/users"
    })
}