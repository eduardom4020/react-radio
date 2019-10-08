import { useState, useCallback, useEffect } from 'react';
import { Animated } from 'react-native';

const useController = props => {
    const { onActive } = props;
    
    const [ isActive, setActive ] = useState(false);
    // const [ animation, setAnimation ] = useState(new Animated.Value());

    const toggle = useCallback(
        () => {
            setActive(!isActive);

            if(!isActive && onActive) {
                onActive();
            }
        }, 
        [ isActive, onActive, setActive ]
    );

    // useEffect(
    //     () => {
    //         if(isActive) {
    //             animation.setValue(0);
    //             Animated.spring(
    //                 animation,
    //                 {
    //                     toValue: 200
    //                 }
    //             ).start(); 
    //         }
    //     },
    //     [ animation, isActive ]
    // );

    return {
        isActive,
        toggle,
        // animation
    };
};

export default useController;