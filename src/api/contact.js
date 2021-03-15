import RequestService from "@/api/request";

const contactApi = {
  doSaveConcatInformation(dataObj) {
    return RequestService({
      url: "/saveConcat",
      method: "post",
      data: dataObj
    });
  }
};

export default contactApi;
