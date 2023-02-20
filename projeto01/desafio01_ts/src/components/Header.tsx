import style from './Header.module.css'

import todoLogo from '../assets/todo-logo.svg';

export function Header() {
    return (
        <div>
            <header className={style.header}>
                <img src={todoLogo} alt="Logotipo do ToDo List" />
            </header>
        </div>
    )
}