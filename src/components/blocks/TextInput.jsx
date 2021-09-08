import React, { Component } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { ErrorMessage } from "./ErrorMessage";
import Label from "./Label";

class TextInput extends Component {
    render() {
        const { label, placeholder, tooltip, validate, maxLength, value, name, isRequired, isTextArea = false } = this.props;

        return (
            <div className="text-input-block">
                {label && <Label label={label} tooltip={tooltip} isRequired={isRequired} />}

                <InputGroup className="mb-3">{isTextArea ? <textarea name={name} value={value} placeholder={placeholder ?? label} maxLength={maxLength} onChange={this.onChange} aria-label="Username" aria-describedby="basic-addon1" /> : <FormControl name={name} value={value} placeholder={placeholder ?? label} maxLength={maxLength} onChange={this.onChange} aria-label="Username" aria-describedby="basic-addon1" />}</InputGroup>
                {validate && <ErrorMessage message={validate} />}
            </div>
        );
    }

    onChange = ({ target: { name, value } }) => {
        const { onFieldChange } = this.props;
        onFieldChange(name, value);
    };
}

export default TextInput;
