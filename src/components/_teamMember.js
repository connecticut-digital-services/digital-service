import React from "react";

function TeamMember(props) {
    return (
        <div className="ct-mt-12">
            <div className="ct-text-primary-normal ct-text-xl ct-leading-tight ct-mb-2">{ props.name }</div>
            <div className="ct-text-black ct-text-sm ct-w-3/4 ct-uppercase ct-mb-4">{ props.title }</div>
            <div>{ props.content }</div>
        </div>
    );
}

export default TeamMember;
