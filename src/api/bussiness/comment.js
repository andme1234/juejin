import request from "../request";
export default {
  getHotComment() {
    return request.get("/comment/hots");
  },
};
