import css from './SearchBox.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectNameFilter, changeFilter } from '../../redux/filtersSlice';

export default function SearchBox() {

    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);
    const handleFilterValue = (filter) => dispatch(changeFilter(filter));

    return (
        <div className={css.box}>
            <p className={css.text}>Find contacts by name:</p>
            <input type="text" name="filter" value={filter} onChange={evt => handleFilterValue(evt.target.value)} />
        </div>
    )
}


