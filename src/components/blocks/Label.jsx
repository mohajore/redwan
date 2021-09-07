import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { withRouter } from "react-router";

const Label = ({ label, tooltip, classAttr = "", isRequired, policyId, history, onAddNew }) => (
    <div className={`reusable-label ${classAttr}`}>
        <div>
            <span>{label}</span>
            {isRequired && <span className="requiredField">*</span>}
            {tooltip && (
                <OverlayTrigger key="right" placement="right" overlay={<Tooltip id={`tooltip-right`}>{tooltip}</Tooltip>} defaultShow={false}>
                    <img src="/img/qus.png" alt="question mark" className="clickable" width="17" />
                </OverlayTrigger>
            )}
        </div>
        {onAddNew && (
            <span className="addNew_label clickable" onClick={onAddNew}>
                Add New
            </span>
        )}
    </div>
);

export default withRouter(Label);
