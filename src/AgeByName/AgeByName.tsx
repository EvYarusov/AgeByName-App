import React, { useEffect, useState } from 'react';
import style from './AgeByName.module.css';

function AgeByName(): JSX.Element {
    const [firstName, setFirstName] = useState('');
    const [age, setAge] = useState('');
    useEffect(() => {
        async function knowTheAge(): Promise<void> {
            const response = await fetch(`https://api.agify.io/?name=${firstName}`);
            const obj = await response.json();
            setAge(obj.age);
        }
        knowTheAge();
    }, [firstName]);
    return (
        <div className={style.nameArea}>
            <h1 className={style.pageTitle}>Do you wanna know an age by name?</h1>
            <form action="" method="post">
                <label className={style.nameLabel}>Type in the name</label>
                <input
                  type="text"
                  placeholder="name"
                  value={firstName}
                  onChange={(change) => setFirstName(change.target.value)}
                  className={style.nameField}
                />
            </form>
            <div className={style.agePlace} placeholder="age">{age}</div>
            <div />
        </div>
    );
}
export default AgeByName;
