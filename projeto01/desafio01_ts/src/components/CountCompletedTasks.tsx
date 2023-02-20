

export function CountCompletedTasks({ countCompletedTasks }: { countCompletedTasks: number }) {

    return (
        <div>
            <span>
                <strong>Concluídas</strong>&nbsp;
                <span>{countCompletedTasks}</span>
            </span>
        </div>
    )
}