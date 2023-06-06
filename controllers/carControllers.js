import Cars from "../modules/carModel.js";


export const createcars=async(req,res)=>{
   try {
    const{image,model,amount,year,carSeats,kmperhr}=req.body;
    const cars=await Cars.create({
        image,model,amount,year,carSeats,kmperhr
    });
    if (cars) {
        res.status(201).json(cars)
        
    }
    else{
        res.status(400).json({message:'not created'})
    }
    
   } catch (error) {
    res.status(500).json({error:error.message})
   }
}

export const carsUpdate=async(req,res)=>{
    try {
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
        res.status(404).json({message:'not found'})
    }
    const updateCars=await cars.save();
    if (updateCars) {
        res.status(201).json(updateCars)
        
    }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
   
}

export const deleteCars=async(req,res)=>{
    try {
        const cars=await  Cars.findByIdAndDelete(req.parms.id)
    if (cars) {
        res.status(201).json({message:'deleted successfully'})
        
    }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}