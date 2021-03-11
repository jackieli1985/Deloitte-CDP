import RequestService from "@/api/request";

const userApi = {
  doGetUserInfo(dataObj) {
    return RequestService({
      url: "/saveConcatInformation",
      method: "post",
      data: dataObj
    });
  }
};

export default userApi;
