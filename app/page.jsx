import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className = "w-full flex-center flex-col">
        <h1 className ="head_text text-center">
            Track your Workouts 
            <br classNAme = "max-md:hidden"/>
            <span className = "blue_gradient text-center">
                Easy workout sharing 
            </span>
        </h1>
        <p className = "desc text-center">
        A custom app experience that’ll track your personal workouts

        </p>
        <Feed/>

    </section>
  )
}

export default Home