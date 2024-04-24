import Button from "../component/base/Button";
const HomeContainer = () => {
  return(
    <div className="flex justify-between py-12 ">
    <div>
      <h1 className="text-red-600 font-bold text-5xl mt-20 py-3">NIKE'S SUMMER</h1>
      <h3 className="font-bold text-3xl py-3">COLLECTIONS 2024</h3>
      <p className="font-bold py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,<br />
         tenetur laboriosam voluptates neque perspiciatis, ullam impedit.</p>
      <Button>
        Watch Video
      </Button>
    </div>
    <div>
      <img className="w-96" src="https://i.pinimg.com/originals/3f/91/bb/3f91bb309e9fc8ee9d34bcbfa7fb58d6.gif" alt="NIKE" />
    </div>
  </div>
  )
}
export default HomeContainer;