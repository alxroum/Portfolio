import React from "react";
import { useId } from "react";

export function ProjectCard({
    title = "Unnamed Project", // string
    icon = "/", // filepath to an image
    desc = "No description", // string
    stack = [], // the tech stack
    links = [], // links to display
    redir = "/" // path to a redirect page
}) {


    const c_id = "card_" + useId();

    function handleRedirect() {
        
    }

    return (
        
        <div id={c_id} className="card reveal" key={title}>
            <div className="card-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <div className="card-footer">
                <div className="card-stack">
                {stack.map((s) => <span className="stack-tag" key={s}>{s}</span>)}
                </div>
                <div className="card-links">
                {links.map(({ label, href }) => (
                    <a className="card-link" href={href} target="_blank" rel="noreferrer" key={label}>{label}</a>
                ))}
                </div>
            </div>
        </div>
    )
}