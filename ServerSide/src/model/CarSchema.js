const mongoose = require("mongoose")

const carSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                // Reject names containing non-vehicle keywords
                const nonVehiclePattern = /(helmet|gloves|jacket|MM|sajal gorain|nexon)/i;
                return !nonVehiclePattern.test(v);
            },
            message: props => `${props.value} is not a valid vehicle name!`
        }
    },
    type: {
        type: String,
        required: true,
        enum: {
            values: ['Car', 'SUV', 'Luxury', 'Sedan', 'Hatchback', 'MUV'],
            message: '{VALUE} is not a valid vehicle type'
        }
    },
    model: {
        type: String,
        required: true
    },
    milage: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    avalableFrom: {
        type: String
    },
    availableTill: {
        type: String
    },
    perKm: {
        type: String
    },
    description: {
        type: String
    },
    carDetails: {
        type: String
    },
    Details: {
        type: String
    },
    AdminId: {
        type: String
    }
});

// Add a pre-save middleware to ensure only vehicle data is saved
carSchema.pre('save', function(next) {
    const nonVehiclePattern = /(helmet|gloves|jacket|MM|sajal gorain|nexon)/i;
    if (nonVehiclePattern.test(this.name)) {
        next(new Error('Cannot save non-vehicle items'));
    }
    next();
});

const carDetails = new mongoose.model("cardata", carSchema);

module.exports = carDetails