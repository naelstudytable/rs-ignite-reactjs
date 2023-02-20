import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setlikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content);
    }
    function handleLikeComment() {
        setlikeCount((state) => state + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/naelallves.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAdTime}>
                            <strong>Natanael Alves</strong>
                            <time title="11 de Maio às 10:00">há 1 hora</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar Comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}