import { get } from "../../ulities";

export const getQuestions =async (params)=>{
    const response = await get(`questions?topicId=${params.id}`);
    return response;
}