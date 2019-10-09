import { useState, useCallback, useRef, useEffect } from 'react';

const ITEM_HEIGHT = 82;
const EXPANDED_ITEM_HEIGHT = 216;

const useController = props => {
    const { radios } = props;
    
    const [ radio, setRadio ] = useState(null);
    const [ position, setPosition ] = useState(null);

    const selectRadio = useCallback(
        (id) => {
            const radioItem = radios[id];

            if(radioItem) {
                setRadio(radioItem);
                setPosition(id);
            }
        }, 
        [ radios, setRadio ]
    );

    const clearSelection = useCallback(
        () => {
            setRadio(null);
            setPosition(null);
        }, 
        [ setRadio ]
    );

    const ref = useRef();

    useEffect(
        () => {
            if(ref && ref.current && position != null) {
                const top = position * ITEM_HEIGHT;
                ref.current.scrollToOffset({ animated: true, offset: top > 0 ? top : 0 });
            }
        }, 
        [ ref, position ]
    );

    return {
        selectRadio,
        clearSelection,
        radio,
        ref
    };
};

export default useController;