import React from 'react';

function FormButton({text,loading,submit}) {
    return (
        <button disabled={loading && loading} className="from-button m-2 ms-0 me-0" type={submit}>{text}</button>
    );
}

export default FormButton;
