import React, { Component } from "react";
import { Col, Container, Row, Form, FormControl, InputGroup, SplitButton, Dropdown } from "react-bootstrap";

class SelectBlock extends Component {
    render() {
        const { options, placeholder, validate, value, name } = this.props;

        return (
            <Form.Select aria-label="Default select example">
                {options.map(({ callingCodes }) => {
                    return <option value="1">One</option>;
                })}
            </Form.Select>
        );
    }

    onChange = ({ target: { name, value } }) => {
        const { onFieldChange } = this.props;
        onFieldChange(name, value);
    };
}

export default SelectBlock;
