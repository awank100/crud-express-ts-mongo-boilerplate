import validator from 'validator'
// Models
import contactsModel, { IContact } from '../models/contacts'

const validate = async (args: IContact) => {
  let isError = false
  const errors: any = {}

  if (
    args.name === undefined ||
    validator.isEmpty(args.name) ||
    args.name.length < 3
  ) {
    isError = true
    errors.name = ['Name is required', 'Name min length is 3']
  }

  if (
    args.phone === undefined ||
    validator.isEmpty(args.phone) ||
    args.phone.length < 5
  ) {
    isError = true
    errors.phone = ['Phone is required', 'Phone min length is 5']
  }

  if (isError) {
    throw {
      message: 'There is something wrong',
      errors
    }
  }
  return true
}

const Contact = {
  list: async () => {
    const data = await contactsModel.find()
    return {
      message: 'Success',
      data
    }
  },

  detail: async (id: string) => {
    const data = await contactsModel.findById(id)

    if (data === null) {
      throw {
        message: 'Data not found',
        errors: {}
      }
    }

    return {
      message: 'Success',
      data
    }
  },

  create: async (args: IContact) => {
    const isValid = await validate(args)

    const newContact = await contactsModel.create({
      name: args.name,
      phone: args.phone
    })

    return {
      message: 'Success',
      data: newContact
    }
  },

  update: async (id: string, args: IContact) => {
    const contact = await contactsModel.findById(id)

    if (contact === null) {
      throw {
        message: 'Data not found',
        errors: {}
      }
    }

    const isValid = await validate(args)

    contact.name = args.name
    contact.phone = args.phone
    await contact.save()

    return {
      message: 'Update Success',
      data: contact
    }
  },

  destroy: async (id: string) => {
    const contact = await contactsModel.findById(id)

    if (contact === null) {
      throw {
        message: 'Data not found',
        errors: {}
      }
    }

    await contact.remove()

    return {
      message: 'Delete Success',
      data: {}
    }
  }
}

export default Contact
