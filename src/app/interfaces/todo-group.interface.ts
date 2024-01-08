export interface TodoGroup {
  title: string;
  item: TodoItem;
}

export interface TodoItem {
  title: string;
  status: ToDoStatus;
  description: string;
}

export enum ToDoStatus {
  NOT_STARTED = 'not_started',
  IN_PROGRES = 'in_progres',
  DONE = 'done',
}
