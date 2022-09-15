export const createReducer =
	(initialState: any, handlers: any) =>
	(state = initialState, ...restArgs: any) => {
		if (handlers.hasOwnProperty(restArgs[0].type)) {
			const newS = handlers[restArgs[0].type](state, ...restArgs);
			const typedNewS: typeof newS = newS;
			return typedNewS;
		}
		return state;
	};

//function combineReducers<S>(reducers: ReducersMapObject<S, any>): Reducer<CombinedState<S>> (+2 overloads)
