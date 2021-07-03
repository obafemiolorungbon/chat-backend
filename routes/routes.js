const router = express.Router();



// logic for routing goes here

router.get("/", ( req, res, next )=>{
    console.log("Route Connected");
    res.send({ success:true })
})


module.exports = router