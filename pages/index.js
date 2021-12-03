import Navbar from '../components/organisms/navbar'
import Hero from '../components/organisms/hero'
import Categories from '../components/organisms/categories'
import Quote from '../components/organisms/quote'
import Footer from '../components/organisms/footer'
import Statistics from '../components/organisms/statistics'

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero imgRight title="Eat What You Cook With Us, Together!" desc="When you eat something that cooked by yourself, the happiness is priceless." img="/img/woman.svg" />
            <Categories />
            <Quote />
            <Statistics />
            <Hero title="Download our app and join the contest" desc="In order to improve our cooking skills, we do need a food photography" img="/img/capture.svg" />
            <Footer />
        </>

    )
}