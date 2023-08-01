import Axios from "axios";

export function getFollowersAPI() {
    return Axios.request({
        method: "get",
        url: "https://my-json-server.typicode.com/usman-conovoinc/fakeServer/users"
    })
}