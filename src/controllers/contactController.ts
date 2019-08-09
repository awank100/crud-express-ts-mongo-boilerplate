import { Request as IReq, Response as IRes } from 'express'
// Repositories
import Contact from '../repositories/Contact'

export const list = async (req: IReq, res: IRes) => {
  try {
    const result = await Contact.list()
    res.json(result)
  } catch (e) {
    res.status(400)
    res.json(e)
  }
}

export const detail = async (req: IReq, res: IRes) => {
  try {
    const result = await Contact.detail(req.params.id)
    res.json(result)
  } catch (e) {
    res.status(400)
    res.json(e)
  }
}

export const create = async (req: IReq, res: IRes) => {
  try {
    const result = await Contact.create(req.body)
    res.json(result)
  } catch (e) {
    res.status(400)
    res.json(e)
  }
}

export const update = async (req: IReq, res: IRes) => {
  try {
    const result = await Contact.update(req.params.id, req.body)
    res.json(result)
  } catch (e) {
    res.status(400)
    res.json(e)
  }
}

export const destroy = async (req: IReq, res: IRes) => {
  try {
    const result = await Contact.destroy(req.params.id)
    res.json(result)
  } catch (e) {
    res.status(400)
    res.json(e)
  }
}
