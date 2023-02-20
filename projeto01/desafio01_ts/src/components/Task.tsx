import { Trash } from "phosphor-react"
import { ChangeEvent, InputHTMLAttributes } from "react"

interface Task {
    id: number,
    title: string,
    isComplete: boolean,
    onComplete: (id: number, isComplete: boolean) => void,
    onDelete: (id: number) => void
}

export function Task({ id, title, isComplete, onComplete, onDelete }: Task) {

    function handleCompleteTaskChange(event: ChangeEvent<HTMLInputElement>) {
        onComplete(id, event.target.checked)
    }

    function handleDeleteTask() {
        onDelete(id)
    }

    return (
        <div>
            <input type="checkbox" defaultChecked={isComplete} onChange={handleCompleteTaskChange} />
            <span>{title} {isComplete ? '(concluída)' : ''}</span>
            <button onClick={handleDeleteTask}>
                <Trash />
            </button>
        </div>
    )
}