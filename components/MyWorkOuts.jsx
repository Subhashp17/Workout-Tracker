import Workoutcard from '@components/Workoutcard';

const MyWorkOuts = ({name, desc, data})=>{
    
    return (

        
        <section className = "w-full">
            <h1 className = "head_text text-left"><span className =" black_gradient">{name} Workouts</span></h1>
            <p className = "desc text-left">{desc}</p>

        </section>
    )
}

export default MyWorkOuts;