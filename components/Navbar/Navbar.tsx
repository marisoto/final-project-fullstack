import Link from "next/link"
import Image from "next/image"


const Navbar = () => {
  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
          <Image src="/Folding Paper.PNG" alt="logo" width ={74} height={74}></Image>
      </Link>


    </nav>
  
  )
}

export default Navbar
