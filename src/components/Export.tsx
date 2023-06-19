import { useEffect } from 'react';
import ExcelIcon from '../icons/excel-icon.png';
import MailIcon from '../icons/mail-icon.png';
import PDFIcon from '../icons/pdf-icon.png';
import { Asset } from '../types/Asset';
import { Field } from '../types/Field';
import '../styles/export.css';
import jsPDF from 'jspdf';

interface Props {
    assets: Asset[],
    fields: Field[],
    headline: string
}

export const Export = (props: Props) => {
    const { assets, fields, headline } = props;


    // const sendViaMail = () => {
    //     const link = document.createElement('a');
    //     const mailSubject = headline;
    //     const table = getTable();
    //     // console.log('table :>> ', table);
    //     const mailBody = table;
    //     // const mailBody = '';
    //     link.href = `mailto:?subject=${mailSubject}&body=${mailBody}`;
    //     // console.log('link :>> ', link);
    //     link.click();
    // }


    const exportToPDF = () => {
        const file = new jsPDF();
        // const table = getTable();
        // file.text(table, 10, 10);
        const img = new Image();
        img.src = ExcelIcon;
        img.onload = function () {
            file.addImage(img, 'PNG', 30, 30, 30, 30);
            file.save("output.pdf");
        }
    }


    const exportToExcel = () => {
        const table = getTable();
        const fileLink = getFileLink(table);
        fileLink.click();
    }


    const getTable = () => {
        const fieldsNames = fields.map(field => field.name);
        const fieldsAliases = fields.map(field => field.alias);
        const assetsToExport = assets.map(asset => {
            const assetEntries = Object.entries(asset);
            return assetEntries.reduce((newAsset, [key, value]) => {
                const isFieldToExport = fieldsNames.includes(key);
                if (isFieldToExport) {
                    newAsset[key] = value;
                }
                return newAsset;
            }, {});
        });
        const assetsToExportVals = assetsToExport.map(asset => Object.values(asset));
        const rows = [fieldsAliases, ...assetsToExportVals];
        const strRows = rows.map(row => row.join(','));
        const table = strRows.join('\n');
        return table;
    }


    const getFileLink = (table: string) => {
        const bomChar = '\uFEFF';
        const blobParts = [`${bomChar}${table}`];
        const blobOptions = { type: 'text/csv;charset=utf-8;' };
        const blob = new Blob(blobParts, blobOptions);
        const fileUrl = URL.createObjectURL(blob);
        const fileName = `${headline}.csv`;
        const fileLink = document.createElement('a');
        fileLink.href = fileUrl;
        fileLink.setAttribute('download', fileName);
        return fileLink;
    }


    return (
        <div className="export-container">
            {/* <img
                src={MailIcon}
                width={25} height={25}
                title='שלח במייל'
                onClick={sendViaMail}
            /> */}
            {/* <img
                src={PDFIcon}
                width={25} height={25}
                title='ייצא ל-PDF'
                onClick={exportToPDF}
            /> */}
            <img
                src={ExcelIcon}
                width={25} height={25}
                title='ייצא לאקסל'
                onClick={exportToExcel}
            />
        </div>
    )
}