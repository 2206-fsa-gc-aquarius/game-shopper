const router = require('express').Router();
const { Product } = require('../db');

module.exports = router;

//Get Routes

//Get all of the Products

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

//Get Single Product
router.get('/:id', async (req, res, next) => {
  try {
    let productid = req.params.id;
    let singleProduct = await Product.findByPk(productid);

    res.send(singleProduct);
  } catch (err) {
    next(err);
  }
});

//Post Routes

router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Product.create(req.body));
  } catch (error) {
    next(error);
  }
});

//Delete Routes

router.delete('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    await product.destroy();
    res.send(product);
  } catch (error) {
    next(error);
  }
});
