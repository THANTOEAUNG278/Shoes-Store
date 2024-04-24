import P from "../component/base/P";
import Card from "./PhotoCard";
const PopularProducts = () => {
  return(
    <div>
      <P size="2xl" className="font-bold flex gap-2">
        POPULAR  <P size="2xl" className="text-red-600"> PRODUCTS</P>  
      </P>
      <div>
        <Card/>
      </div>
    </div>
  )
}
export default PopularProducts;