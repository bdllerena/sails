/**
 * FecabCabec.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
      fecab_codigo: {
        type: 'string',
        required: true,
        unique: true
      },
      fefor_codigo: {
        type: 'string',
        required: true
      },
      peemp_codigo:{
        type: 'string', 
        columnType: 'datetime' 
      },
      fecli_codigo:{
        type: 'string', 
        columnType: 'datetime' 
      },
      fecab_fecha:{
        type: 'ref', 
        columnType: 'datetime' 
      },
      fecab_subtot:{
        type: 'number'
      },
      fecab_iva:{
        type: 'number' 
      },
      fecab_descue:{
        type: 'number'
      },
      fecab_total:{
        type: 'number'
      },
      fecab_estado:{
        type: 'number'
      }
    },
  
  };
  
  