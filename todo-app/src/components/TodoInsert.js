import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

// rsc 입력시 선언형 템플릿 사용가능
const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onClick = useCallback(
        e => {
            onInsert(value);
            setValue('');
            e.preventDefault();
        },
        [onInsert, value],
    )

    return (
        <form className="TodoInsert">
            <input placeholder="할 일 을 입력하세요" 
                value={value} onChange={onChange}/>
            <button onClick={onClick}>
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;