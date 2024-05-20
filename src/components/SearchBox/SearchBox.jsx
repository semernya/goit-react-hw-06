import css from './SearchBox.module.css'

export default function SearchBox({ value, onFilter }) {
    return (
        <div className={css.box}>
            <p className={css.text}>Find contacts by name:</p>
            <input type="text" name="filter" value={value} onChange={evt => onFilter(evt.target.value)} />
        </div>
    )
} 