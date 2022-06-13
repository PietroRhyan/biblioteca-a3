export const isAuthenticated = () => {
  if(localStorage.getItem('@nomeLogin')){
    return true
  } 

  return false
}