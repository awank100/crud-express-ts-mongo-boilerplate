import { Schema, Document, model } from 'mongoose'

export interface IContact {
  name: string
  phone: string
}

export interface IContactModel extends IContact, Document {}

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 200
    },
    phone: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 20
    }
  },
  {
    timestamps: true
  }
)

const contacts = model<IContactModel>('contacts', contactSchema)

export default contacts
