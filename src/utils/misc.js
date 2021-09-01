import swal from "sweetalert";

export const handleResponse = ({ success, ...rest }) => ({ success, ...rest });

export const displayAlert = (title, text, icon, buttons) => swal({ title, text, icon, buttons });

export const mapSelectData = (data) => (Array.isArray(data) ? data.map(({ name: label, id: value, ...rest }) => ({ value, label, ...rest })) : []);

export const mapSelectRangData = (range) => {
    const [start, end] = range.split(":");

    return Array.from({ length: end - start + 1 }, (item, index) => {
        return { label: parseInt(start) + index, value: index };
    });
};

export const getResponseErrors = (responseErrors) => {
    const errors = Object.entries(responseErrors).map(([fieldName, fieldValue]) => [fieldName, fieldValue[0]]);

    return Object.fromEntries(errors);
};

export const FieldTypes = {
    Select: 1,
    FreeText: 2,
    Date: 3,
    HorizontalSelect: 4,
    SelectWithRange: 5,
    Checkbox: 6,
    UploadImages: 7,
    TextInputWithRange: 8,
    SelectProfiles: 9,
};
