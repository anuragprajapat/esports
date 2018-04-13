import { NavigationActions } from 'react-navigation';


export function resetStackToHome(context){
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Home'})
        ]
      })
      context.props.navigation.dispatch(resetAction)
}
