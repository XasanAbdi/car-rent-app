import Cars from "../modules/carModel.js";


export const createcars=async(req,res)=>{
    const{image,model,amount,year,carSeats,kmperhr}=req.body;
    const cars=await Cars.create({
        image,model,amount,year,carSeats,kmperhr
    });
    if (cars) {
        res.status(201).json(cars)
        
    }
    else{
        res.status(500).json({message:'not created'})
    }
}

export const carsUpdate=async(req,res)=>{
    const{img,model,amount,year,carSeats,kmperhr}=req.body;
    const cars=await  Cars.findById(req.parms.id)
    if (cars) {
        cars.image=image
        cars.model=model
        cars.amount=amount
        cars.year=year
        cars.carSeats=carSeats
        cars.kmperhr=kmperhr


        
    }
    else{
        res.status(500).json({message:'not found'})
    }
    const updateCars=await cars.save();
    if (updateCars) {
        res.status(201).json(updateCars)
        
    }
   
}

export const deleteCars=async(req,res)=>{
    const cars=await  Cars.findByIdAndDelete(req.parms.id)
    if (cars) {
        res.status(201).json({message:'deleted successfully'})
        
    }
}