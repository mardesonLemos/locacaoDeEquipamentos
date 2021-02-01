/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Knex from 'knex';

export async function seed(knex: Knex) {
  return knex('equipamentos').insert([
    {
      title: 'Aceadmia', //Aceadmia
      image: 'Academia.png', //Academia.png
    },
    {
      title: 'Art', //Art
      image: 'Art.png', //Art.png
    },
    {
      title: 'Escolares', //Escolares
      image: 'Escolares.png', //Escolares.png
    },
    {
      title: 'Esportivos', //Esportivos
      image: 'Espotivos.png', //Espotivos.png
    },
    {
      title: 'Musical', //Musical
      image: 'Musical.png', //Musical.png
    },
    {
      title: 'Computadores', //Computadores
      image: 'Computer.png', //Computer.png
    },
  ]);
}
