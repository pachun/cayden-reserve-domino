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

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

type MyAnimatedContext = {
  xPositionInParentComponentBeforeGesture: number
  yPositionInParentComponentBeforeGesture: number
}

interface DraggableProps {
  objectWidth: number
  objectHeight: number
  startingXPositionInParentComponent: number
  startingYPositionInParentComponent: number
  xPositionOfParentComponentInWindow: number
  yPositionOfParentComponentInWindow: number
  children: React.ReactElement
}

const Draggable = ({
  children,
  objectWidth,
  objectHeight,
  startingXPositionInParentComponent,
  startingYPositionInParentComponent,
  xPositionOfParentComponentInWindow,
  yPositionOfParentComponentInWindow,
}: DraggableProps) => {
  const currentXPositionInParentComponent = useSharedValue(
    startingXPositionInParentComponent,
  )
  const currentYPositionInParentComponent = useSharedValue(
    startingYPositionInParentComponent,
  )
  const zIndex = useSharedValue(0)

  const bottomBoundaryOnXAxis = -1 * xPositionOfParentComponentInWindow
  const topBoundaryOnXAxis = bottomBoundaryOnXAxis + windowWidth - objectWidth

  const bottomBoundaryOnYAxis = -1 * yPositionOfParentComponentInWindow
  const topBoundaryOnYAxis = bottomBoundaryOnYAxis + windowHeight - objectHeight

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    MyAnimatedContext
  >({
    onStart: (_event, context) => {
      context.xPositionInParentComponentBeforeGesture =
        currentXPositionInParentComponent.value
      context.yPositionInParentComponentBeforeGesture =
        currentYPositionInParentComponent.value
      zIndex.value = 1
    },
    onActive: (event, context) => {
      currentXPositionInParentComponent.value = clamp(
        context.xPositionInParentComponentBeforeGesture + event.translationX,
        bottomBoundaryOnXAxis,
        topBoundaryOnXAxis,
      )
      currentYPositionInParentComponent.value = clamp(
        context.yPositionInParentComponentBeforeGesture + event.translationY,
        bottomBoundaryOnYAxis,
        topBoundaryOnYAxis,
      )
    },
    onEnd: event => {
      currentXPositionInParentComponent.value = withDecay({
        velocity: event.velocityX,
        clamp: [bottomBoundaryOnXAxis, topBoundaryOnXAxis],
      })
      currentYPositionInParentComponent.value = withDecay({
        velocity: event.velocityY,
        clamp: [bottomBoundaryOnYAxis, topBoundaryOnYAxis],
      })
      zIndex.value = 0
    },
  })
  const style = useAnimatedStyle(() => {
    return {
      zIndex: zIndex.value,
      transform: [
        { translateX: currentXPositionInParentComponent.value },
        { translateY: currentYPositionInParentComponent.value },
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
