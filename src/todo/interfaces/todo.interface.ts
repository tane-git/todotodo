export interface Todo {
    label: string;
    //? Need to manually change interfaces, dtos etc when you change a table column name? How to automate?
    isUrgent: boolean;
    isImportant: boolean;
    isComplete: boolean;
}
