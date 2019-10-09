import { useState, useCallback, useEffect } from 'react';
import { Animated } from 'react-native';

const useController = props => {
    const { onToggle, id, selectedRadio } = props;
    
    const [ isActive, setActive ] = useState(false);

    const toggle = useCallback(
        () => {
            setActive(!isActive);

            if(onToggle) {
                onToggle(id, !isActive);
            }
        }, 
        [ isActive, onToggle, setActive ]
    );

    useEffect(
        () => {
            if(selectedRadio && selectedRadio.id !== id && isActive) {
                setActive(false);
            }
        }
    );

    return {
        isActive,
        toggle
    };
};

export default useController;