import { useDispatch, useSelector } from 'react-redux'
import Contact from '../Contact/Contact'
import css from './ContactList.module.css'
import { deleteContact } from '../../redux/contactsSlice';

export default function ContactList() {
    const contacts = useSelector(state => state.contacts.items);

    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteContact());
    };

    return (
        <ul className={css.list}>
            {contacts.map((contact) => (
                <li className={css.listItem} key={contact.id}>
                    <Contact contact={contact} onDelete={handleDelete} />
                </li>
            ))}
        </ul>
    )
}