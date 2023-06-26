export interface dotoListInterFace {
    id: number,
    title: string,
}

export interface dotoListStateInterFace {
    isPending: Array<dotoListInterFace>,
    isDone: Array<dotoListInterFace>,
}

export interface dotoListPropsInterFace {
    todoList: dotoListStateInterFace,
    setTodoList: React.Dispatch<React.SetStateAction<dotoListStateInterFace>>,
}




