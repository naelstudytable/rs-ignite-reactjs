

export function CountTasksCreated({ countTasksCreated }: { countTasksCreated: number }) {

    return (
        <div>
            <span>
                <strong>Tarefas criadas</strong>&nbsp;
                <span>{countTasksCreated}</span>
            </span>
        </div>
    )
}