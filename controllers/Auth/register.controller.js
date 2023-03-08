import Joi from "joi"
import CustomerErrorHandler from "../../services/CustomErrorHandler"
import { User } from "../../models"
import bcrypt from "bcrypt"


const registerController = {
    async register(req, res, next) {

        //validation
        const registrScheme = Joi.object({
            name: Joi.string().min(3).max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            repeat_password: Joi.ref('password')
        })

        const { error } = registrScheme.validate(req.body)

        if (error)
            return next(error)

        try {
            const exist = await User.exists({ email: req.body.email })
            if (exist)
                return next(CustomerErrorHandler.alreadyExists("This email is already registered"));
        } catch (error) {
            return next(error)
        }
        const { name, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = new User({
            name,
            email,
            password: hashedPassword
        })

        try {
            const result = await user.save()

        } catch (error) {
            return next(error)
        }









        res.send("helloFromExpress")
    }
}


export default registerController;