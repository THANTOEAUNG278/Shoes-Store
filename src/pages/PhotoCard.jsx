import Button from "../component/base/Button"
import P from "../component/base/P"


const Photos = [
  {
    id: 1,
    Title: "LifeStyle Shoe",
    imageUrl: 'https://i.pinimg.com/564x/e6/71/e8/e671e84f914c002fd19ed9c19dcbf518.jpg',
  },
  {
    id: 2,
    Title: "LifeStyle Shoe",
    imageUrl: 'https://i.pinimg.com/564x/e6/71/e8/e671e84f914c002fd19ed9c19dcbf518.jpg',
  },
  {
    id: 3,
    Title: "LifeStyle Shoe",
    imageUrl: 'https://i.pinimg.com/564x/e6/71/e8/e671e84f914c002fd19ed9c19dcbf518.jpg',
  },
  {
    id: 4,
    Title: "LifeStyle Shoe",
    imageUrl: 'https://i.pinimg.com/564x/e6/71/e8/e671e84f914c002fd19ed9c19dcbf518.jpg',
  },
]

const Card = () => {
  return(
    <div className="min-h-screen">
      <div className="container mx-auto px-3 py-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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
      <div className="p-4 bg-gray-100 border-gray-400 rounded-lg shadow-md transition duration-300 ease-in-out transform group-hover:scale-100">
        <img className="w-full rounded-t-lg" src={photo.imageUrl} alt="NIKE" />
        <div>
          <P size="xl" className="font-bold">{photo.Title}</P>
          <div className="flex justify-between items-center mx-4 py-3" >
            <p>size:42</p>
            <p>Quarlity</p>
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
