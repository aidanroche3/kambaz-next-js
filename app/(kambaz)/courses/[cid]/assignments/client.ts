import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const ASSIGNMENTS_API = `${HTTP_SERVER}/api/assignments`;

export const fetchAllAssignments = async (courseId: string) => {
  const { data } = await axios.get(`${ASSIGNMENTS_API}/${courseId}`);
  return data;
};
export const createAssignment = async (courseId: string, assignment: any) => {
  const { data } = await axiosWithCredentials.post(
    `${ASSIGNMENTS_API}/${courseId}`,
    assignment,
  );
  return data;
};
export const deleteAssignment = async (courseId: string, id: string) => {
  const { data } = await axios.delete(`${ASSIGNMENTS_API}/${courseId}/${id}`);
  return data;
};
export const updateAssignment = async (courseId: string, assignment: any) => {
  const { data } = await axios.put(
    `${ASSIGNMENTS_API}/${courseId}/${assignment._id}`,
    assignment,
  );
  return data;
};
