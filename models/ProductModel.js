const mongoose = require('mongoose');

// Product's schema design
const ProductSchema = mongoose.Schema(
    {
        productName:{
            type: String,
            required: [true, 'must provide product name'],
            trim: true,
            maxlenght:[91, 'product name can not be more than 91 characters']
        },
        price:{
            type: String,
            required: [true, 'must provide product price'],
        },
        quantity:{
            type: Number,
            default:1
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Product', ProductSchema);