import { type ChangeEvent, type ReactNode, useReducer } from 'react'

//! useReducer an alternative to useState: 
// Ne gibi durumlarda? -> Complex state logic that involves multiple sub-values. t also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

const initState = { count: 0, text: "" }

//! ts 5.8 erasableSyntaxOnly bu yazıma(const enum, enum) izin vermiyor
const enum REDUCER_ACTION_TYPE {
	INCREMENT,
	DECREMENT,
	NEW_INPUT,
}

type ReducerAction = {
	type: REDUCER_ACTION_TYPE,
	payload?: string,
}

const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
	switch (action.type) {
		case REDUCER_ACTION_TYPE.INCREMENT:
			return { ...state, count: state.count + 1 }
		case REDUCER_ACTION_TYPE.DECREMENT:
			return { ...state, count: state.count - 1 }
		case REDUCER_ACTION_TYPE.NEW_INPUT:
			return { ...state, text: action.payload ?? "" }
		default:
			throw new Error()
	}
}

type ChildrenType = {
	children: (num: number) => ReactNode
}



const Counter = ({ children }: ChildrenType) => {
	// const [count, setCount] = useState<number>(1)
	const [state, dispatch] = useReducer(reducer, initState)

	const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })
	const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })
	const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: REDUCER_ACTION_TYPE.NEW_INPUT,
			payload: e.target.value
		})
	}

	return (
		<>
			<h1>{children(state.count)}</h1>
			<div>
				<button onClick={increment}>+</button>
				<button onClick={decrement}>-</button>
			</div>
			<input type="text" onChange={handleTextInput}/>
			<h2>{state.text}</h2>
		</>
	)
}



export default Counter
