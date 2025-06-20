export type User = {
  id: string;
  avatar: string;
  name: string;
};

export type UserTask = {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
};
