import Link from 'next/link';


const Form = ({ type,
post, 
setPost ,
submitting,
handleSubmit,}) => {
  return (
    <section className = "w-full max-w-full flex-start flex-col">
      <h1 className = "head_text text-left">
        <span className ="black_gradient" >Add Workout</span>
      </h1>

      <form onSubmit = {handleSubmit} className = "mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <label>
          <span className = "font-satoshi font-semibold text-base text-gray-700"> Your Workout </span>

          <textarea value = { post.workout} onChange = {(e) => setPost({...post,workout:e.target.value})} placeholder = "Enter your Workout" required className = "form_textarea resize rounded-md w-96"></textarea>
        </label>
        <label>
          <span className = "font-satoshi font-semibold text-base text-gray-700"> No of Reps </span>

          <input type = "number" value = { post.reps} onChange = {(e) => setPost({...post,reps:e.target.value})}  required className = " w-24"></input>
        </label><label>
          <span className = "font-satoshi font-semibold text-base text-gray-700"> Weights - lbs</span>

          <input type = "number" value = { post.weights} onChange = {(e) => setPost({...post,weights:e.target.value})} placeholder = "Weights including barbell" required className = "w-24"></input>
        </label>
        <div className ="flex-end mx-3 mb-5 gap-4">
          <Link href='/' className = 'text-gray-500 text-sm'>Cancel</Link>
          <button type = "submit" disabled = {submitting}  className ="px-5 py-1.5 text-sm bg-blue-500 rounded-full text-white" >{submitting ? `${type}..`:type}</button>
        </div>
      </form>

    </section>
  )
}

export default Form


