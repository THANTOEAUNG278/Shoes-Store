import Button from "../component/base/Button"
import P from "../component/base/P"


const Photos = [
  {
    id: 1,
    Title: "LifeStyle Shoe",
    imageUrl: 'https://i.pinimg.com/originals/2c/9b/48/2c9b48369210b32743fbc7e7ff39a283.gif',
    price: "Price: ￥3500",
    size: "Size: 38",
  },
  {
    id: 2,
    Title: "LifeStyle Shoe",
    imageUrl: 'https://i.pinimg.com/originals/24/f5/19/24f5192b39a96cb3b2ead9bde3d8ce28.gif',
    price: "Price: ￥3550",
    size: "Size: 34",
  },
  {
    id: 3,
    Title: "LifeStyle Shoe",
    imageUrl: 'https://i.pinimg.com/originals/bc/38/2e/bc382ee64cd5d4030572692aa76cecf8.gif',
    price: "Price: ￥2500",
    size: "Size: 33",
  },
  {
    id: 4,
    Title: "LifeStyle Shoe",
    imageUrl: 'https://i.pinimg.com/originals/b8/3c/71/b83c71ea0a548ae1aa56843a45cb5885.gif',
    price: "Price: ￥5500",
    size: "Size: 37",
  },
  {
    id: 5,
    Title: "LifeStyle Shoe",
    imageUrl: 'https://i.pinimg.com/originals/8b/2d/f5/8b2df5580164528c183118b164a1e8f6.gif',
    price: "Price: ￥5500",
    size: "Size: 39",
  },
  {
    id: 6,
    Title: "LifeStyle Shoe",
    imageUrl: 'https://i.pinimg.com/originals/73/a7/4b/73a74b41ef8e2530d0ab97ea3eb78057.gif',
    price: "Price: ￥5500",
    size: "Size: 32",
  },
]

const Card = () => {
  return(
    <div className="min-h-screen">
      <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-3 1xl:grid-cols-3 gap-4">
        {Photos.map(photo =>{
          return <PhotoCard key={photo.id} photo={photo} />
        })}
      </div>
    </div>
  )
}
export default Card; 

const PhotoCard = ({photo}) => {
  return(
    <div className="relative group cursor-pointer">
      <div className="p-4 bg-gray-100 border-gray-400 rounded-2xl shadow-md transition duration-300 ease-in-out transform group-hover:scale-100">
        <div>
          New
        </div>
        <img className="w-full h-48" src={photo.imageUrl} alt="NIKE" />
        <div>
          <P size="xl" className="font-bold">{photo.Title}</P>
          <div className="flex justify-between items-center mx-4 py-3" >
            <P className="text-red-600">{photo.size}</P>
            <P>{photo.price}</P>
          </div>
          <div className="flex justify-between items-center text-sm ">
            <Button variant="danger">
              Buy Now
            </Button>
            <Button variant="secondary">
              Add To Card
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
