
import Contact from '../components/Contact'
import HeaderMain from '../components/HeaderMain'
import Heromain from '../components/Heromain'
import Portfolio from '../components/Portfolio'

export default function Index() {
  return (
    <>

        <title>Paulo Misaki - Personal Portfolio</title>
      <div className="flex flex-col">
        <HeaderMain/>
        <Heromain/>
        <Portfolio/>
        <Contact/>
      </div>
    </>
  )
}
