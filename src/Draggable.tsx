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
import { withBouncing } from "react-native-redash"

const clamp = (value: number, lowerBound: number, upperBound: number) => {
  "worklet"
  return Math.min(Math.max(lowerBound, value), upperBound)
}

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height
const objectWidth = 300
const objectHeight = 150

type MyAnimatedContext = {
  currentX: number
  currentY: number
}

interface DraggableProps {
  children: React.ReactElement
}

const Draggable = ({ children }: DraggableProps) => {
  const xBoundary = windowWidth - objectWidth
  const yBoundary = windowHeight - objectHeight
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)
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
      translateX.value = context.currentX + event.translationX
      translateY.value = context.currentY + event.translationY
    },
    onEnd: event => {
      translateX.value = withDecay({
        velocity: event.velocityX,
      })
      translateY.value = withDecay({
        velocity: event.velocityY,
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
