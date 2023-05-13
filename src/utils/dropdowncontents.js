export const car_model_t = ["Any", "Range Rover", "Toyota"]
export const transmission_t = ["Automatic", "Manual"]
export const engine_type_t = ["Petrol", "Diesel", "Kerosene"]

const presentYear = new Date().getFullYear()

function generateYears(){
    let arr = []
    for(let i = 0; i < 9; ++i){
        arr.push(presentYear - i)
    }

    return arr
}

export const years = generateYears()

export const engine_sizes = ["4 liters", "5 liters", "6 liters", "7 liters", "8 liters"]

export const seats = ["Any", "2 seats", "4 seats", "7 seat", "32 seats"]

export const car_color = ["Any", "Black", "White", "Ash"]