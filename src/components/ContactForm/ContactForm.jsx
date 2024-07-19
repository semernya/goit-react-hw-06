import css from './ContactForm.module.css'
import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
    number: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
});

export default function ContactForm() {

    const contactId = useId();
    const initialValues = {
        name: '',
        number: '',
    };
    // const handleSubmit = (values, actions) => {
    //     onAdd({
    //         ...values,
    //         id: contactId,
    //     });
    //     actions.resetForm();
    // }

    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);

    const handleNewContact = () => {
        dispatch(addContact());
    }


    return (
        <Formik initialValues={initialValues} onSubmit={handleNewContact} validationSchema={FeedbackSchema}>
            <Form className={css.form}>
                <div className={css.formGroup}>
                    <label htmlFor={contactId} className={css.label}>Name</label>
                    <Field type="text" name="name" id={contactId} />
                    <ErrorMessage name='name' component='span' />
                </div>
                <div className={css.formGroup}>
                    <label className={css.label}>Number</label>
                    <Field type="text" name="number" />
                    <ErrorMessage name='number' component='span' />
                </div>
                <button type='submit' className={css.btn}>Add contact</button>
            </Form>
        </Formik>

        // <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        //     <Form className={css.form}>
        //         <div className={css.formGroup}>
        //             <label htmlFor={contactId} className={css.label}>Name</label>
        //             <Field type="text" name="name" id={contactId} />
        //             <ErrorMessage name='name' component='span' />
        //         </div>
        //         <div className={css.formGroup}>
        //             <label className={css.label}>Number</label>
        //             <Field type="text" name="number" />
        //             <ErrorMessage name='number' component='span' />
        //         </div>
        //         <button type='submit' className={css.btn}>Add contact</button>
        //     </Form>
        // </Formik>
    )
}