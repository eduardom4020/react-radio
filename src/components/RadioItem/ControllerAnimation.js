import { useState, useCallback, useEffect } from 'react';
import { Animated, Easing } from 'react-native';

const useAnimationController = props => {
    const { shouldExpand } = props;

    const [ linearAnimation, ] = useState(new Animated.Value(0));

    const callLinear = useCallback(
        (expanding) => {
            linearAnimation.setValue(expanding === true ? 0 : 1)
            Animated.timing(
                linearAnimation,
                {
                    toValue: expanding === true ? 1 : 0,
                    duration: 150,
                    easing: Easing.linear
                }
            ).start()
        }, 
        [ linearAnimation ]
    );

    useEffect(
        () => callLinear(shouldExpand),
        [ callLinear, shouldExpand ]
    );

    const linearGrow = useCallback(
        (from, to) => {
            return linearAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [from, to]
            });
        }, 
        [ linearAnimation ]
    );    

    return {
        linearGrow
    };
};

export default useAnimationController;