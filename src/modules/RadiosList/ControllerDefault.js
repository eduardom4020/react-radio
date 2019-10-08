import { useState, useCallback, useEffect } from 'react';

const useController = props => {
    const { radios } = props;
    
    const [ radio, setRadio ] = useState(null);

    const selectRadio = useCallback(
        (id) => {
            const radioItem = radios[id];

            if(radioItem) {
                setRadio(radioItem);
            }
        }, 
        [ radios, setRadio ]
    );

    const clearSelection = useCallback(
        () => setRadio(null), 
        [ setRadio ]
    );

    return {
        selectRadio,
        clearSelection,
        radio
    };
};

export default useController;