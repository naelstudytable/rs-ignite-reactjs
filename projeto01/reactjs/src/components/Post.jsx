import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({ author, content, publishedAt }) {
    const [comments, setComments] = useState([
        'Post belo demais, digaí!!',
    ])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const isNewCommentEmpty = newCommentText.length == 0

    function handleCreateNewComment(event) {
        event.preventDefault()

        setComments([...comments, newCommentText])

        setNewCommentText('')
    }
    function handleNewCommenteChange(event) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }
    function handleNewCommentInvalid(event) {
        event.target.setCustomValidity('O comentário está inválido')
    }
    function deleteComment(commentToDelete) {
        const newCommentsWithoutDeletedOne = comments.filter(c => c !== commentToDelete)

        setComments(newCommentsWithoutDeletedOne)
    }

    return (
        <div>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <Avatar hasBorder src={author.avatarUrl} />

                        <div className={styles.authorInfo}>
                            <strong>{author.name}</strong>
                            <span>{author.role}</span>
                        </div>
                    </div>

                    <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
                </header>

                <div className={styles.content}>
                    {
                        content.map(line => {
                            if (line.type === 'paragraph') {
                                return <p key={line.content}>{line.content}</p>
                            } else if (line.type === 'link') {
                                return <p key={line.content}><a href='#'>{line.content}</a></p>
                            }
                        })
                    }
                </div>

                <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>

                    <textarea
                        onChange={handleNewCommenteChange}
                        value={newCommentText}
                        placeholder='Deixe um comentário'
                        onInvalid={handleNewCommentInvalid}
                        required />

                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </form>

                <div className={styles.commentList}>
                    {
                        comments.map(comment => {
                            return <Comment
                                key={comment}
                                content={comment}
                                onDeleteComment={deleteComment} />
                        })
                    }
                </div>
            </article>
        </div>
    )
}