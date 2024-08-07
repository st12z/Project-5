import { get } from "../../ulities";

export const getTopic =async (params) => {
    const response = await get(`topics?id=${params.id}`);
    return response;
};

