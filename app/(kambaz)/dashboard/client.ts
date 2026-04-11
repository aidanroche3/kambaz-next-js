import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const ENROLLMENTS_API = `${HTTP_SERVER}/api/enrollments`;

export const fetchEnrollments = async () => {
  const { data } = await axiosWithCredentials.get(ENROLLMENTS_API);
  return data;
};
export const enrollInCourse = async (courseId: string, userId: string) => {
  const response = await axiosWithCredentials.post(ENROLLMENTS_API, {
    courseId,
    userId,
  });
  return response.data;
};
export const unenrollFromCourse = async (courseId: string, userId: string) => {
  const response = await axiosWithCredentials.delete(ENROLLMENTS_API, {
    data: {
      courseId,
      userId,
    },
  });
  return response.data;
};
