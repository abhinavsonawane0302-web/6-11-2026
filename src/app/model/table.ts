export interface Iemp {
        empId:number, 
        empName:string, 
        designation:string, 
        department:string, 
        salary:number, 
        isPermanent:boolean, 
        email:string, 
        contact:number
}


export interface std {
        rollNo:number, 
        name:string, 
        course:string, 
        year:string, 
        percentage:number, 
        isPassed:boolean, 
        email:string, 
        contact:number 
}


export interface proArr{
         prodId:number, 
         prodName:string, 
         category:string,
         price:number, 
         stock:number, 
         isAvailable:boolean, 
         brand:string 
}


export interface Icourse{
        courseId:number, 
        courseName:string, 
        duration:string, 
        fees:number, 
        mode:string, 
        isActive:boolean, 
        trainer:string 
}


export interface Ibook{
         bookId: number, 
         title:string, 
         author:string, 
         price:number,
         pages:number, 
         isAvailable:boolean, 
         genre:string


}



export interface Icust{
         custId:number, 
         name:string, 
         city:string, 
         age:number, 
         email:string, 
         isPrime:boolean, 
         contact:number
}


export interface Iorder{
         orderId:number, 
         customerName:string, 
         product:string, 
         amount:number, 
         status:string, 
         date:string
}


export interface movie{
        movieId:number, 
        title:string, 
        genre:string, 
        rating:number, 
        releaseYear:number, 
        isHit:boolean, 
        language:string
}




export interface tech{
         teacherId:number, 
         name:string, 
         subject:string, 
         experience:number, 
         salary:number, 
         isFullTime:boolean, 
         email:string 
}


export interface vehi{
         vehicleId:number, 
         brand:string, 
         model:string, 
         type:string, 
         price:number, 
         isAvailable:boolean, 
         fuel:string 
}


 export interface Ihotel {
 hotelId: number;
 name: string;
 city: string;
 rating: number;
 pricePerNight: number;
 isAvailable: boolean;
 rooms: number;
 contact: number;
}[]


export interface  Idoc {
 doctorId: number;
 name: string;
 specialization: string;
 experience: number;
 fees: number;
 isAvailable: boolean;
 hospital: string;
 email: string;
}


export interface Ires {
 restId: number;
 name: string;
 cuisine: string;
 city: string;
 rating: number;
 avgCost: number;
 isOpen: boolean;
 isVeg: boolean;
}


export interface Iacc {
 accNo: number;
 holderName: string;
 bank: string;
 accType: string;
 balance: number;
 isActive: boolean;
 branch: string;
}

export interface Ifli {
 flightId: string;
 airline: string;
 from: string;
 to: string;
 price: number;
 duration: string;
 isDirect: boolean;
 seats: number;
}

export interface Ipro{
 projectId: number;
 title: string;
 client: string;
 budget: number;
 status: string;
 teamSize: number;
 isCritical: boolean;
 deadline: string;
}
export interface Icity {
 cityId: number;
 name: string;
 state: string;
 population: number;
 isMetro: boolean;
 pincode: number;
 famousFor: string;
}

export interface Imob {
 mobileId: number;
 brand: string;
 model: string;
 price: number;
 ram: number;
 storage: number;
 isAvailable: boolean;
 os: string;
}

export interface Imem {
 memberId: number;
 name: string;
 age: number;
 membership: string;
 booksIssued: number;
 isActive: boolean;
 joinDate: string;
 email: string;
}


export interface Igym {
 gymId: number;
 name: string;
 age: number;
 plan: string;
 fees: number;
 trainer: string;
 isActive: boolean;
 weight: number;
}



export interface Icar {
 carId: number;
 brand: string;
 model: string;
 year: number;
 price: number;
 mileage: number;
 fuel: string;
 isAvailable: boolean;
}


export interface Icoll {
 collegeId: number;
 name: string;
 city: string;
 type: string;
 established: number;
 fees: number;
 rating: number;
 isAutonomous: boolean;
}


export interface Icri{
 playerId: number;
 name: string;
 role: string;
 team: string;
 matches: number;
 runs: number;
 isActive: boolean;
 jerseyNo: number;
}


export interface Isub{
 subjectId: number;
 name: string;
 code: string;
 credits: number;
 semester: number;
 isElective: boolean;
 faculty: string;
}

export interface Ilap {
 laptopId: number;
 brand: string;
 model: string;
 price: number;
 ram: number;
 processor: string;
 isAvailable: boolean;
 warranty: number;
}

export interface Iapp{
 appId: number;
 name: string;
 brand: string;
 price: number;
 warranty: number;
 energyRating: number;
 isAvailable: boolean;
 category: string;
}

export interface Ieve {
 eventId: number;
 title: string;
 city: string;
 date: string;
 ticketPrice: number;
 seats: number;
 isSoldOut: boolean;
 organizer: string;
}


export interface Icomp {
 companyId: number;
 name: string;
 headquarters: string;
 employees: number;
 founded: number;
 revenueCr: number;
 isPublic: boolean;
 sector: string;
}


export interface Igro {
 itemId: number;
 name: string;
 category: string;
 price: number;
 unit: string;
 stock: number;
 isOrganic: boolean;
 brand: string;
}


export interface Ihosp {
 hospitalId: number;
 name: string;
 city: string;
 beds: number;
 type: string;
 rating: number;
 hasEmergency: boolean;
 established: number;
}

