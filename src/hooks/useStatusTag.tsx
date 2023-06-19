// @ts-nocheck
import { Tag } from 'primereact/tag';


export const useStatusTag = (rowData) => {
    const status = rowData.contractStatus;

    const getSeverity = (status) => {
        switch (status) {
            case 'פעיל':
                return 'success';
            case 'לא פעיל':
                return 'danger';
            case 'ממתין לאישור':
                return 'warning';
            default:
                return 'primary';
        }
    }

    return <Tag
        value={status}
        severity={getSeverity(status)}
    />;
}