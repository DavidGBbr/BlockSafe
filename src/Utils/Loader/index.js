import React, { useEffect } from "react";
import * as C from "./styles";
import { Animated } from "react-native";

export const Loader = () => {
  const animations = {
    one: new Animated.Value(0),
    two: new Animated.Value(0),
    three: new Animated.Value(0),
  };

  function onAnimate(animation, nextAnimation) {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: -10,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    setTimeout(nextAnimation, 150);
  }

  function onStartAnimate() {
    function onThreeAnimation() {
      onAnimate(animations.three, () => {
        setTimeout(onStartAnimate, 600);
      });
    }
    function onTwoAnimation() {
      onAnimate(animations.two, onThreeAnimation);
    }

    onAnimate(animations.one, onTwoAnimation);
  }

  useEffect(() => {
    onStartAnimate();
  }, []);

  return (
    <C.Container>
      <C.Ball
        style={{ transform: [{ translateY: animations.one }] }}
        color="#f8c02b"
      />
      <C.Ball
        style={{ transform: [{ translateY: animations.two }] }}
        color="#f8c02b"
      />
      <C.Ball
        style={{ transform: [{ translateY: animations.three }] }}
        color="#f8c02b"
      />
    </C.Container>
  );
};
