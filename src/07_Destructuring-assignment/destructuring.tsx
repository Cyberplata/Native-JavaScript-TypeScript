import React from "react";

export type ManType = {
    name: string,
    age: number,
    lessons: Array<{ title: string }>,
    address: {
        street: {
            title: "Nezavisimosti street"
        }
    }
}

export type PropsType = {
    title: string
    man: ManType
}

export const ManComponent: React.FC<PropsType> = ({ title, man }) => {

    // const { title, man } = props;
    // const {name} = props.man;

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
        </div>
    </div>
}