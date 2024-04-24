
import Card from "./PhotoCard";
import PopularProducts from "./PopularProducts";
import HomeContainer from "./HomeContainer";

const HomePage = () =>{
  return (
    <div>
      <HomeContainer/>
      <hr/>
      <PopularProducts/>
      <div>
        <Card/>
      </div>
      
    </div>
  )
}
export default HomePage;