import mongoose , {Schema,model,models} from 'mongoose';


const WorkoutSchema = new Schema({
    creator:{
        type: String,
        ref: 'User',
    },
    workout:{
        type : String,
        required:[true, 'workout is required'],
    },
    reps:{
        type : Number,
        required:[true,'No of Reps are required'],
    },
    weights:{
        type : Number,
        required :[true,'Weights Required']

    },
});

const Workout = models.Workout || model('Workout',WorkoutSchema);

export default Workout;