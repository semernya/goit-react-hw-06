import { useDispatch, useSelector } from 'react-redux'
import Contact from '../Contact/Contact'
import css from './ContactList.module.css'
import { deleteContact } from '../../redux/contactsSlice';

export default function ContactList() {

    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.name);
    const visibleContacts = contacts.filter((contact) => {
        if (filter.trim() === '') {
            return contacts;
        }
        return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    const handleDelete = () => {
        dispatch(deleteContact());
    };

    return (
        <ul className={css.list}>
            {visibleContacts.map((contact) => (
                <li className={css.listItem} key={contact.id}>
                    <Contact contact={contact} onDelete={handleDelete} />
                </li>
            ))}
        </ul>
    )
}