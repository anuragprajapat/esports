import { NavigationActions } from 'react-navigation';
import {AsyncStorage} from 'react-native';

export function resetStackToHome(context){
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Home'})
        ]
      })
      context.props.navigation.dispatch(resetAction)
}

export function resetStackToJoinAuction(context){
  const resetAction = NavigationActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'Home'}),
        NavigationActions.navigate({ routeName: 'Join'})
      ]
    })
    context.props.navigation.dispatch(resetAction)
}


export async function getKey(key) {
  try {
    const value = await AsyncStorage.getItem('key');
    return value;
  } catch (error) {
    console.log(error);
    return null;
  }
}