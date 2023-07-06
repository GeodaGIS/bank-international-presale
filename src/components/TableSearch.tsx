// @ts-nocheck
import { InputText } from 'primereact/inputtext';


export const TableSearch = (props) => {
    const { onSearch } = props;

    return (
        <div className='table-search-container'>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                    placeholder="חפש בטבלה..."
                    onChange={(ev) => onSearch(ev.target.value)}
                />
            </span>
        </div>
    )
}