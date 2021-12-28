import UserContext from '../../GlobalVariable'
import { useContext } from 'react';

function Home(){
    const data = useContext(UserContext);
    return(
        <h2>This is home page.{data.email}</h2>
    )
}
export default Home;