import css from './Contact.module.css'

export default function Contact({ onDelete, contact: { name, number, id } }) {
    return (
        <div className={css.box}>
            <div>
                <p className={css.text}>{name}</p>
                <p className={css.text}>{number}</p>
            </div>
            <button className={css.btn} type="button" onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}