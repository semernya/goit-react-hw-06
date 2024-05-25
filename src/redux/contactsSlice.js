import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = {
    items: []
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),
                    }
                }
            }
        },
        deleteContact(state, action) {
            const id = state.findIndex(contact => contact.id === action.payload);
            state.splice(id, 1);
        },

    }
})


export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = state => state.items;
