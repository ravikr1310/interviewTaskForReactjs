import UserContext from '../../GlobalVariable'
import { useContext } from 'react';

function Home(){
    const value = useContext(UserContext);
    return(
        <h2>This is home page.{value.name}</h2>
    )
}
export default Home;