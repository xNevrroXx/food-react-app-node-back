import Popular from "../components/Popular"
import Veggie from "../components/Veggie"

function Home() {
  console.log("home")
  return (
    <div>
        <Veggie />
        <Popular />
    </div>
  )
}

export default Home