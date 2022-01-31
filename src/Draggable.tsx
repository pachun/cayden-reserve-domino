import { Dimensions } from "react-native"
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler"
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withDecay,
} from "react-native-reanimated"
import { clamp } from "react-native-redash"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

type MyAnimatedContext = {
  currentX: number
  currentY: number
}

interface DraggableProps {
  objectWidth: number
  objectHeight: number
  children: React.ReactElement
}

const Draggable = ({ children, objectWidth, objectHeight }: DraggableProps) => {
  const insets = useSafeAreaInsets()
  const xBoundary = windowWidth - objectWidth
  const yBoundary = windowHeight - objectHeight
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(insets.top)
  const zIndex = useSharedValue(0)
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    MyAnimatedContext
  >({
    onStart: (_event, context) => {
      context.currentX = translateX.value
      context.currentY = translateY.value
      zIndex.value = 1
    },
    onActive: (event, context) => {
      translateX.value = clamp(
        context.currentX + event.translationX,
        0,
        xBoundary,
      )
      translateY.value = clamp(
        context.currentY + event.translationY,
        insets.top,
        yBoundary - insets.bottom,
      )
    },
    onEnd: event => {
      translateX.value = withDecay({
        velocity: event.velocityX,
        clamp: [0, xBoundary],
      })
      translateY.value = withDecay({
        velocity: event.velocityY,
        clamp: [insets.top, yBoundary - insets.bottom],
      })
      zIndex.value = 0
    },
  })
  const style = useAnimatedStyle(() => {
    return {
      zIndex: zIndex.value,
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    }
  })

  return (
    <PanGestureHandler {...{ onGestureEvent }}>
      <Animated.View {...{ style }}>{children}</Animated.View>
    </PanGestureHandler>
  )
}

export default Draggable
