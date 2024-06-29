import ProductModel from "../Models/productModel.js";

export const createNewProduct = async (req, res) => {
    try {
        const {name, price, description, category, stock} = req.body;
        const newProduct = new ProductModel({
            name: name,
            price: price,
            description: description,
            category: category,
            stock: stock
        });
        await newProduct.save();
        res.status(200).json('Product added successfully');
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const productInfo = await ProductModel.findById(id);
        res.status(200).json(productInfo); 
    } catch (err) {
        res.status(500).json(err);
    }
}

export const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedData = req.body;
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, updatedData, {new: true});
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        await ProductModel.findByIdAndDelete(id);
        res.status(200).json('Product deleted successfully');
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
};