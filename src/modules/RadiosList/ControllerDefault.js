import { useState, useCallback, useRef, useEffect } from 'react';

const ITEM_HEIGHT = 82;
const EXPANDED_ITEM_HEIGHT = 216;

const useController = props => {
    const { radios, web } = props;

    const [ radio, setRadio ] = useState(null);
    const [ position, setPosition ] = useState(null);
    const ref = useRef();
    
    // TEST: test if radios props is valid, if not reject it:
    if(typeof(radios) !== 'object' || ( typeof(radios) === 'object' && radios.constructor !== Object )) {
        return {
            dataValues: [],
            selectRadio: ()=>null,
            clearSelection: ()=>null,
            radio: {},
            ref
        };
    }

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

    useEffect(
        () => {
            if(ref && ref.current && position != null && ref.current.scrollToOffset) {
                const top = position * ITEM_HEIGHT;
                ref.current.scrollToOffset({ animated: true, offset: top > 0 ? top : 0 });
            }
        }, 
        [ ref, position ]
    );

    return {
        dataValues: Object.values(radios),
        selectRadio,
        clearSelection,
        radio,
        ref
    };
};

export default useController;