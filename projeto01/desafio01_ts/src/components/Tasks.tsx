
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { EmptyTasks } from './EmptyTasks'
import { Task } from './Task'
import style from './Tasks.module.css'
import { CountTasksCreated } from './CountTasksCreated'
import { CountCompletedTasks } from './CountCompletedTasks'

interface Task {
    id: number,
    title: string,
    isComplete: boolean
}

export function Tasks() {
    const [tasks, setTasks] = useState<Task[]>([])

    const [newTaskText, setNewTaskText] = useState('')

    const [countTasksCreated, setCountTasksCreated] = useState(0)

    const [countCompletedTasks, setCountCompletedTasks] = useState(0)

    function handleChangeNewTaskText(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault()

        setNewTaskText(event.target.value)
    }

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()

        let newTaskId = randomNewTaskId()

        const newTask = {
            id: newTaskId,
            title: newTaskText,
            isComplete: false
        }

        setTasks([...tasks, newTask])

        setNewTaskText('')

        const countTasks = tasks.length + 1
        setCountTasksCreated(countTasks)
    }

    function onCompleteTask(id: number, isComplete: boolean) {
        const newTasks = tasks.map(t => {
            if (t.id == id) {

                return {
                    ...t,
                    isComplete: isComplete,
                }
            }

            return t
        })

        setTasks(newTasks)

        const numberOfCompletedTasks = completedTasks(newTasks).length
        setCountCompletedTasks(numberOfCompletedTasks)
    }

    function onDeleteTask(id: number) {
        const newTasks = tasks.filter(t => t.id != id)

        setTasks(newTasks)

        const countTasks = tasks.length - 1
        setCountTasksCreated(countTasks)

        const numberOfCompletedTasks = completedTasks(newTasks).length
        setCountCompletedTasks(numberOfCompletedTasks)
    }

    function randomNewTaskId() {
        let newTaskId = 0;
        do {
            newTaskId = Math.floor(Math.random() * 1000)
        } while (tasks.find(t => t.id == newTaskId))

        return newTaskId;
    }

    function completedTasks(tasks: Task[]) {
        return tasks.filter(t => t.isComplete == true)
    }

    return (
        <div className={style.tasksWrapper}>
            <form onSubmit={handleCreateNewTask}>
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    onChange={handleChangeNewTaskText}
                    value={newTaskText}
                    required
                />
                <button>Criar <PlusCircle /></button>
            </form>

            {/* lista */}
            <section>
                <header>
                    <div>
                        <CountTasksCreated countTasksCreated={countTasksCreated} />

                        <CountCompletedTasks countCompletedTasks={countCompletedTasks} />
                    </div>
                    <hr />
                </header>
                <article>
                    <div>
                        {
                            tasks.length == 0
                                ? <EmptyTasks />
                                : tasks.map(task => {
                                    return <Task
                                        key={task.id}
                                        id={task.id}
                                        title={task.title}
                                        isComplete={task.isComplete}
                                        onComplete={onCompleteTask}
                                        onDelete={onDeleteTask}
                                    />
                                })
                        }
                    </div>
                </article>
            </section>
        </div>
    )
}