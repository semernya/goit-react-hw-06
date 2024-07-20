import css from './Contact.module.css'
import { deleteContact } from '../../redux/contactsSlice'
import { useDispatch } from 'react-redux'

export default function Contact({contact: { name, number, id } }) {

    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteContact(id));
    }

    return (
        <div className={css.box}>
            <div>
                <p className={css.text}>{name}</p>
                <p className={css.text}>{number}</p>
            </div>
            <button className={css.btn} type="button" onClick={() => handleDelete(id)}>Delete</button>
        </div>
    )
}