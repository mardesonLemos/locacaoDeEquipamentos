/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {
  async index(request: Request, response: Response) {
    const { city, uf, items } = request.query;

    const parsedItems = String(items)
      .split(',')
      .map(item => Number(item.trim()));

    const points = await knex('lojas')
      .join('loja_equipamentos','lojas.id','=','loja_equipamentos.lojas_id')
      .whereIn('loja_equipamentos.equipamentos_id', parsedItems)
      .where('city', String(city))
      .where('uf', String(uf))
      .distinct()
      .select('lojas.*');

    const serializedPoints = points.map(point => {
      return {
        ...point,
        image_url: `http://localhost:3333/uploads/${point.image}`,
      };
    });

    return response.json(serializedPoints);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const point = await knex('lojas').where('id', id).first();

    if (!point) {
      return response.status(400).json({ message: 'Point not found.' });
    }
    const serializedPoint = {
      ...point,
      image_url: `http://localhost/uploads/${point.image}`,
    };
    const items = await knex('equipamentos')
      .join('loja_equipamentos','equipamentos.id','=','loja_equipamentos.equipamentos_id')
      .where('loja_equipamentos.lojas_id', id)
      .select('equipamentos.title');

    return response.json({ point: serializedPoint, items });
  }

  async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items,
    } = request.body;

    const trx = await knex.transaction();

    const point = {
      image: request.file.filename,
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    };

    const insertedIds = await trx('lojas').insert(point);

    const lojas_id = insertedIds[0];

    const pointItems = items
      .split(',')
      .map((equipamentos: string) => Number(equipamentos.trim()))
      .map((equipamentos_id: number) => {
        return {
          equipamentos_id,
          lojas_id,
        };
      });

    await trx('loja_equipamentos').insert(pointItems);

    await trx.commit();

    return response.json({
      id: lojas_id,
      ...point,
    });
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const point = await knex('lojas').where('id', id).delete();

    if (!point) {
      return response.status(400).json({ message: 'Point not found.' });
    }

    return response.json({ msg: 'successfully deleted' });
  }
}

export default PointsController;
