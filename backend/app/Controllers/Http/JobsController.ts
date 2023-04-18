import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Job from 'App/Models/Job'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class JobsController {
    public async index({ request, response }: HttpContextContract) {
        const jobs = await Job.all()

        response.status(200).json({
            message: "successful",
            data: jobs
        })
    }

    public async store({ request, response }: HttpContextContract) {
        const newJobSchema = schema.create({
            firstName: schema.string(),
            lastName: schema.string(),
            phoneNumber: schema.string(),
            emailId: schema.string(),
            address: schema.string(),
            postCode: schema.number(),
            state: schema.string(),
            typeOfClothing: schema.string(),
            description: schema.string(),
            budget: schema.number.optional(),
        })

        const payload = await request.validate({ schema: newJobSchema })

        const job = await Job.create(payload)

        response.status(201).json({
            message: "Job created successfully",
            data: job
        })
    }

    public async show({ request, response }: HttpContextContract) {

    }

    public async update() {
        //TODO complete the update functionality
    }

    public async destroy() {
        //TODO complete the destroy functionality
    }
}
