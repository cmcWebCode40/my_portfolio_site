import Cookies from 'universal-cookie';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjljMWFhZGZmNTA1ZjAwMTcxN2I1ZjEiLCJlbWFpbCI6ImNtY3dlYmNvZGUuZGV2QHlhaG9vLmNvbSIsImlhdCI6MTYwNDQwMzg4OCwiZXhwIjoxNjA0NDQ3MDg4fQ.vM6B5xM5HEhs6fhdHEYPrfygNiPwJKg-P7wJ85V-ILM';

export const getUserToken = () => {
  const cookies = new Cookies();
  const tokenR = cookies.get('JWT', { path: '/' });

  if (!tokenR) {
    return {
      Authorization: `Bearer ${token}`
    };
  }
  return null;
};
