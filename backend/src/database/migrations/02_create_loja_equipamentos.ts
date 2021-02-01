/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/**
    * ESSE ARQUIVO FICA A CRIAANCAO DA TA TABELA PIVO QUE É O RELACIONAMENTO DE 
    * (N,N) DA NOSSA APLICACAO.
    */
import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('loja_equipamentos', table => {
    table.increments('id').primary();
    table.integer('lojas_id').notNullable().references('id').inTable('lojas'); //lojas
    table.integer('equipamentos_id').notNullable().references('id').inTable('equipamentos'); //equipamentos
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('loja_equipamentos');
}
