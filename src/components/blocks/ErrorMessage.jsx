import React from "react";

export const ErrorMessage = ({ message }) => (
    <div className="validation-message--underline">
        <small className="font-weight-bold text-capitalize ls-1">{message}</small>
    </div>
);
