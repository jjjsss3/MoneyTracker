import * as httpRequest from "~/utils/httpRequest";
export const all = async () => {
  try {
    const res = await httpRequest.get(`posts`, {});
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
