const buildUrlWithEncoding = (url, params) => {
  const isServiceObject = !!(typeof url === "object" && url.url);
  let query = isServiceObject ? url.url : url;
  query += query.indexOf("?") < 1 ? "?" : "&";
  query += Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join("&");
  query = encodeURI(query);

  return isServiceObject ? { ...url, ...{ url: query } } : query;
};

export { buildUrlWithEncoding };
